/**
 * YK-1103: YADU Encryption Core
 * 
 * Algorithm Identity:
 * - Public Name: YK-1103
 * - Internal Logic: YADU
 * - Key Size: 1103 bits
 * 
 * Design Constraints:
 * - Deterministic & Reversible
 * - Client-side only
 * - Meaningful constants from 'Y', 'K', 'A', 'D', 'U'
 */

// YADU Identity Constants (Seeds)
// These are not just ASCII values, but seed values derived from the letters for the algorithm.
const Y_SEED = 0x59; // 89
const K_SEED = 0x4B; // 75
const A_SEED = 0x41; // 65
const D_SEED = 0x44; // 68
const U_SEED = 0x55; // 85

// Non-obvious internal constants derived from seeds
const C1 = (Y_SEED * K_SEED) + 1103;     // 7778
const C2 = (Y_SEED * A_SEED * D_SEED) % 1103; // (89*65*68) % 1103
const C3 = (U_SEED ^ K_SEED) * Y_SEED;   // (85^75) * 89 = 26 * 89 = 2314
const MAGIC_PRIME = 1103;

// Key size in characters (1103 bits = ~137.8 bytes -> 138 bytes)
// We will represent the key as a Hex string for user handling (1103/4 = ~276 hex chars)
const KEY_BITS = 1103;
const KEY_BYTES = Math.ceil(KEY_BITS / 8);

export interface YaduKey {
    raw: string; // The hex string representation
}

/**
 * Auto-generates a strong, unpredictable 1103-bit key.
 */
export function generateKey(): YaduKey {
    const bytes = new Uint8Array(KEY_BYTES);
    crypto.getRandomValues(bytes);

    // Ensure we are strictly 1103 bits? 
    // 138 bytes * 8 = 1104 bits. We mask the last bit to be exact if needed, 
    // but for simplicity and byte alignment, 1104 is close enough to 1103 and safer for byte ops.
    // However, spec says "Fixed internal key size: 1103 bits".
    // Validating 1103 bits exactly implies masking the final byte.
    // byte 137 (0-indexed) has 8 bits. We need only 7 bits from it (137*8 + 7 = 1103).
    // 137 * 8 = 1096. 1103 - 1096 = 7 bits needed from last byte.

    // Masking last byte to keep only 7 bits used (unset the 8th bit)
    bytes[KEY_BYTES - 1] &= 0x7F; // 01111111

    return {
        raw: Array.from(bytes).map(b => b.toString(16).padStart(2, '0')).join('')
    };
}

/**
 * Deterministically expands the key into two large substitution/permutation tables
 * using the YADU seeds.
 */
function expandKey(keyHex: string): { sBox: number[], pBox: number[] } {
    // Convert hex to bytes
    const keyBytes = new Uint8Array(keyHex.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));

    const sBox = new Array(256).fill(0).map((_, i) => i);
    const pBox = new Array(256).fill(0).map((_, i) => i);

    // Scramble S-Box using Key and YADU constants
    let j = 0;
    for (let i = 0; i < 256; i++) {
        // Basic RC4-like KSA but mixed with YADU constants
        const keyByte = keyBytes[i % keyBytes.length];
        const mix = (i % 2 === 0) ? C1 : C2;
        j = (j + sBox[i] + keyByte + mix) % 256;
        [sBox[i], sBox[j]] = [sBox[j], sBox[i]];
    }

    // Scramble P-Box (Permutation logic) using Key and C3/MAGIC_PRIME
    let k = 0;
    for (let i = 0; i < 256; i++) {
        const keyByte = keyBytes[(i + 13) % keyBytes.length];
        k = (k + pBox[i] + keyByte + C3 + MAGIC_PRIME) % 256;
        [pBox[i], pBox[k]] = [pBox[k], pBox[i]];
    }

    return { sBox, pBox };
}

/**
 * Validates the key format.
 */
export function validateKey(keyHex: string): boolean {
    if (!keyHex || typeof keyHex !== 'string') return false;
    // Check hex chars
    if (!/^[0-9a-fA-F]+$/.test(keyHex)) return false;
    // Length check: 138 bytes -> 276 hex chars
    return keyHex.length === KEY_BYTES * 2;
}

/**
 * Encrypts a string using YADU algorithm and the derived key.
 */
export function encrypt(plaintext: string, keyHex: string): string {
    if (!validateKey(keyHex)) throw new Error("Invalid Key");

    const { sBox, pBox } = expandKey(keyHex);
    const keyBytes = new Uint8Array(keyHex.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));

    // 1. Convert to UTF-8 bytes
    const encoder = new TextEncoder();
    const inputBytes = encoder.encode(plaintext);

    const outputBytes = new Uint8Array(inputBytes.length);

    // 2. Transformation
    for (let i = 0; i < inputBytes.length; i++) {
        let charCode = inputBytes[i];

        // Position dependent mix
        const keyByte = keyBytes[i % keyBytes.length];

        // Forward Substitution
        // (Char + Key + SBox[Pos%256] + Y_SEED) % 256
        let transformed = (charCode + keyByte + sBox[i % 256] + Y_SEED) % 256;

        // Scramble/Swap value mapping through P-Box
        transformed = pBox[transformed];

        // XOR with a dynamic value driven by D_SEED and U_SEED
        const xorMix = (D_SEED * (i + 1)) ^ U_SEED;
        transformed = transformed ^ (xorMix % 255);

        outputBytes[i] = transformed;
    }

    // 3. Scrambling (Reordering) - Simple deterministic shuffle
    // We'll perform a reverse swap pass to scramble positions
    // Note: To be reversible, we must be able to reverse this exactly.
    // Let's use a specific seed derived from key's first bits to shuffle indices.
    // However, clean swapping is easier to reverse if we just walk backwards.
    // For simplicity and strict reversibility, we'll keep position scrambling simple:
    // Rotate bytes based on C1? OR just skip position scrambling effectively if it complicates clean reversal too much without a dedicated unshuffle.
    // Requirement: "Apply key-driven scrambling after transformation"
    // Let's do a simple block-less swap: Pairwise swap based on key bit?
    // Or just a global reverse if key odd? Too simple.
    // Let's do: Swap index `i` with `(i + key[i%len]) % len`. 
    // Wait, reversing `(i + k) % len` swaps is tricky if order matters. 
    // Standard Fisher-Yates is reversible if we save the randoms. Here 'randoms' are the key.
    // So yes, Fisher-Yates using Key as rng source.

    // Forward Scramble
    for (let i = 0; i < outputBytes.length; i++) {
        const swapTarget = (i + keyBytes[i % keyBytes.length]) % outputBytes.length;
        [outputBytes[i], outputBytes[swapTarget]] = [outputBytes[swapTarget], outputBytes[i]];
    }

    // 4. Integrity Checksum
    // We will append a hash/checksum separate from the ciphertext or encoded within.
    // User wants "Wrong key -> detectable failure".
    // We'll prepend a 4-byte checksum of the (Plaintext + KeySalt)
    // Actually, simpler: Prepend a "Magic" header encrypted with the key.
    // If decrypting doesn't yield the magic header, key is wrong.
    // Magic header: "YADU"

    // Better: Encrypt ("YADU" + Plaintext)
    // If decryption doesn't start with "YADU", fail.

    // Let's re-run the encrypt logic on ("YADU" + plaintext)
    // To do this cleanly, we'll recursively call a core function or just prepend before the loop.
    // Let's refactor to process the internal buffer.

    // Refined Logic with Integrity:
    const magic = encoder.encode("YADU"); // Integrity header
    const combined = new Uint8Array(magic.length + inputBytes.length);
    combined.set(magic);
    combined.set(inputBytes, magic.length);

    const protectedOutput = new Uint8Array(combined.length);

    // --- Repeat Core Transformation on Combined Buffer ---
    for (let i = 0; i < combined.length; i++) {
        let charCode = combined[i];
        const keyByte = keyBytes[i % keyBytes.length];

        let transformed = (charCode + keyByte + sBox[i % 256] + Y_SEED) % 256;
        transformed = pBox[transformed];
        const xorMix = (D_SEED * (i + 1)) ^ U_SEED;
        transformed = transformed ^ (xorMix % 255);

        protectedOutput[i] = transformed;
    }

    // --- Repeat Scramble on Combined Buffer ---
    for (let i = 0; i < protectedOutput.length; i++) {
        const swapTarget = (i + keyBytes[i % keyBytes.length]) % protectedOutput.length;
        [protectedOutput[i], protectedOutput[swapTarget]] = [protectedOutput[swapTarget], protectedOutput[i]];
    }

    // 5. Output Format
    // Use browser-friendly Base64
    return bytesToBase64(protectedOutput);
}

/**
 * Decrypts a string using YADU algorithm.
 */
export function decrypt(ciphertext: string, keyHex: string): string | null {
    if (!validateKey(keyHex)) return null; // Or throw

    const { sBox, pBox } = expandKey(keyHex);
    // Expand key bytes
    const keyBytes = new Uint8Array(keyHex.match(/.{1,2}/g)!.map(byte => parseInt(byte, 16)));

    let inputBytes: Uint8Array;
    try {
        inputBytes = base64ToBytes(ciphertext);
    } catch (e) {
        return null; // Invalid base64
    }

    if (inputBytes.length < 4) return null; // Too short to even have header

    // 1. Reverse Scramble
    // Must reverse the loop: from length-1 down to 0
    for (let i = inputBytes.length - 1; i >= 0; i--) {
        const swapTarget = (i + keyBytes[i % keyBytes.length]) % inputBytes.length;
        // Swap back
        [inputBytes[i], inputBytes[swapTarget]] = [inputBytes[swapTarget], inputBytes[i]];
    }

    // 2. Reverse Transformation
    const outputBytes = new Uint8Array(inputBytes.length);
    for (let i = 0; i < inputBytes.length; i++) {
        let transformed = inputBytes[i];

        // Reverse XOR
        const xorMix = (D_SEED * (i + 1)) ^ U_SEED;
        transformed = transformed ^ (xorMix % 255);

        // Reverse P-Box
        // For O(1), build inverse P-Box.
        const invPBox = new Array(256);
        for (let j = 0; j < 256; j++) invPBox[pBox[j]] = j;

        transformed = invPBox[transformed];

        // Reverse Substitution
        const keyByte = keyBytes[i % keyBytes.length];
        const sub = (keyByte + sBox[i % 256] + Y_SEED);

        let charCode = (transformed - sub) % 256;
        while (charCode < 0) charCode += 256; // Ensure positive modulo

        outputBytes[i] = charCode;
    }

    // 3. Integrity Check
    const decoder = new TextDecoder();
    // Check first 4 bytes for "YADU"
    const headerBytes = outputBytes.slice(0, 4);
    const header = decoder.decode(headerBytes);

    if (header !== "YADU") {
        return null; // Integrity check failed (Wrong key)
    }

    // Return rest of the message
    return decoder.decode(outputBytes.slice(4));
}

// Browser-compatible Base64 helpers
function bytesToBase64(bytes: Uint8Array): string {
    let binary = '';
    const len = bytes.byteLength;
    for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
}

function base64ToBytes(base64: string): Uint8Array {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
        bytes[i] = binary.charCodeAt(i);
    }
    return bytes;
}
