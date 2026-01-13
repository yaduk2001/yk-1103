export default function HowItWorksPage() {
    return (
        <>
            {/* Animated Background */}
            <div className="bg-animation">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
            </div>

            <div className="page-content">
                {/* Hero */}
                <section className="page-hero">
                    <div className="status-badge">
                        <span className="status-dot"></span>
                        TECHNICAL DOCUMENTATION
                    </div>
                    <h1 className="page-title">How It Works</h1>
                    <p className="page-subtitle">
                        Deep dive into the YK-1103 encryption architecture
                    </p>
                </section>

                {/* Overview */}
                <section className="content-section">
                    <h2 className="section-title">System Overview</h2>
                    <div className="text-block">
                        <p>
                            YK-1103 implements a custom substitution-permutation network (SPN) called the YK-1103 algorithm.
                            This cryptographic system transforms plaintext into ciphertext through a series of mathematically
                            reversible operations, all controlled by a 1103-bit ephemeral key.
                        </p>
                    </div>
                </section>

                {/* Architecture Steps */}
                <section className="content-section">
                    <h2 className="section-title">Encryption Pipeline</h2>
                    <div className="steps-container">
                        <div className="step-item">
                            <div className="step-number">01</div>
                            <div className="step-content">
                                <h3>Key Generation</h3>
                                <p>
                                    A 1103-bit (138-byte) cryptographically secure random key is generated using the
                                    Web Crypto API. This key never leaves your browser and exists only in volatile memory.
                                </p>
                                <div className="code-block">
                                    <code>crypto.getRandomValues(new Uint8Array(138))</code>
                                </div>
                                <p className="example-note">
                                    <em>Note: Example pseudocode for illustration purposes.</em>
                                </p>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-number">02</div>
                            <div className="step-content">
                                <h3>YADU Identity Seeding</h3>
                                <p>
                                    The algorithm injects identity constants derived from Y-A-D-U (ASCII: 89, 65, 68, 85).
                                    These seeds bias the encryption state, creating a unique cryptographic signature for YK-1103.
                                </p>
                                <div className="code-block">
                                    <code>seeds = [89, 75, 65, 68, 85] // YKADU</code>
                                </div>
                                <p className="example-note">
                                    <em>Note: The values shown above are for illustration. Actual algorithm constants may differ in implementation.</em>
                                </p>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-number">03</div>
                            <div className="step-content">
                                <h3>Substitution Layer</h3>
                                <p>
                                    Each byte of plaintext undergoes key-dependent substitution. The substitution table
                                    is generated dynamically from the key, ensuring no two keys produce the same transformation.
                                </p>
                                <div className="tech-detail">
                                    <span className="detail-label">Operation:</span>
                                    <span className="detail-value">Byte-level XOR with key-derived values</span>
                                </div>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-number">04</div>
                            <div className="step-content">
                                <h3>Permutation Layer</h3>
                                <p>
                                    The substituted bytes are shuffled according to a permutation sequence derived from the key.
                                    This diffusion step ensures that a change in one plaintext byte affects multiple ciphertext bytes.
                                </p>
                                <div className="tech-detail">
                                    <span className="detail-label">Diffusion:</span>
                                    <span className="detail-value">Key-dependent position scrambling</span>
                                </div>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-number">05</div>
                            <div className="step-content">
                                <h3>Integrity Header</h3>
                                <p>
                                    A magic header YADU is prepended to the encrypted payload. During decryption,
                                    this header is verified to detect tampering or incorrect keys.
                                </p>
                                <div className="tech-detail">
                                    <span className="detail-label">Validation:</span>
                                    <span className="detail-value">Header must match for successful decryption</span>
                                </div>
                            </div>
                        </div>

                        <div className="step-item">
                            <div className="step-number">06</div>
                            <div className="step-content">
                                <h3>Base64 Encoding</h3>
                                <p>
                                    The final binary ciphertext is encoded to Base64 for safe storage and transmission
                                    in text-based formats like email, JSON, or clipboard operations.
                                </p>
                                <div className="tech-detail">
                                    <span className="detail-label">Output:</span>
                                    <span className="detail-value">URL-safe Base64 string</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Security Analysis */}
                <section className="content-section">
                    <h2 className="section-title">Security Analysis</h2>
                    <div className="security-grid">
                        <div className="security-card">
                            <div className="security-icon">🔒</div>
                            <h3>Brute Force Resistance</h3>
                            <p>
                                With 2^1103 possible keys, a brute force attack testing 1 trillion keys per second
                                would require approximately 10^310 years to exhaust the key space.
                            </p>
                        </div>
                        <div className="security-card">
                            <div className="security-icon">🎲</div>
                            <h3>Key Entropy</h3>
                            <p>
                                Keys are generated using the browsers Crypto.getRandomValues(), a cryptographically
                                secure pseudorandom number generator seeded from system entropy sources.
                            </p>
                        </div>
                        <div className="security-card">
                            <div className="security-icon">🔗</div>
                            <h3>Avalanche Effect</h3>
                            <p>
                                A single bit change in the plaintext or key produces a completely different ciphertext.
                                On average, 50% of output bits flip for any 1-bit input change.
                            </p>
                        </div>
                        <div className="security-card">
                            <div className="security-icon">🚫</div>
                            <h3>No Backdoors</h3>
                            <p>
                                The algorithm contains no master keys, recovery mechanisms, or hidden access points.
                                Lost keys mean unrecoverable data—by design.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Technical Specs */}
                <section className="content-section">
                    <h2 className="section-title">Technical Specifications</h2>
                    <div className="specs-list">
                        <div className="spec-row">
                            <span className="spec-key">Algorithm Name</span>
                            <span className="spec-value">YADU-1103</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-key">Type</span>
                            <span className="spec-value">Symmetric Substitution-Permutation Network</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-key">Key Length</span>
                            <span className="spec-value">1103 bits (138 bytes)</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-key">Block Size</span>
                            <span className="spec-value">Variable (stream-like processing)</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-key">Key Generation</span>
                            <span className="spec-value">Web Crypto API (CSPRNG)</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-key">Encoding</span>
                            <span className="spec-value">Base64 (RFC 4648)</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-key">Integrity Check</span>
                            <span className="spec-value">YADU Magic Header (4 bytes)</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-key">Platform</span>
                            <span className="spec-value">Browser JavaScript (ES6+)</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-key">Dependencies</span>
                            <span className="spec-value">None (Native APIs only)</span>
                        </div>
                    </div>
                </section>

                {/* Decryption Process */}
                <section className="content-section">
                    <h2 className="section-title">Decryption Process</h2>
                    <div className="text-block">
                        <p>
                            Decryption is the exact inverse of encryption. The same key is used to reverse
                            the permutation, reverse the substitution, and validate the integrity header.
                        </p>
                        <p>
                            If the YADU header is not found after decryption, the operation is rejected.
                            This indicates either an incorrect key or corrupted/tampered ciphertext.
                        </p>
                    </div>
                    <div className="warning-box">
                        <div className="warning-icon">⚠️</div>
                        <div className="warning-content">
                            <strong>Important:</strong> There is no key recovery. If you lose your encryption key,
                            your data is permanently unrecoverable. This is a security feature, not a limitation.
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="final-cta">
                    <h2 className="cta-title">See It In Action</h2>
                    <p className="cta-text">
                        Experience the power of 1103-bit encryption firsthand.
                    </p>
                    <a href="/tool" className="cta-button large">
                        Launch Terminal
                    </a>
                </section>
            </div>
        </>
    );
}
