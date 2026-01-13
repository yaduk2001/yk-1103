'use client';

import { useState } from 'react';
import { generateKey, encrypt, decrypt } from '@/lib/yadu-core';

export default function ToolPage() {
    const [mode, setMode] = useState<'encrypt' | 'decrypt'>('encrypt');
    const [input, setInput] = useState('');
    const [keyInput, setKeyInput] = useState('');
    const [output, setOutput] = useState('');
    const [generatedKey, setGeneratedKey] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [copySuccess, setCopySuccess] = useState('');

    const handleAction = () => {
        setError(null);
        setGeneratedKey(null);
        setCopySuccess('');

        try {
            if (mode === 'encrypt') {
                const key = generateKey().raw;
                const result = encrypt(input, key);
                setOutput(result);
                setGeneratedKey(key);
            } else {
                if (!keyInput.trim()) {
                    setError("Decryption key is required.");
                    return;
                }
                const result = decrypt(input.trim(), keyInput.trim());
                if (result === null) {
                    setError("Decryption failed. The key is incorrect or the data is corrupted.");
                    setOutput('');
                } else {
                    setOutput(result);
                }
            }
        } catch {
            setError("An unexpected error occurred during processing.");
        }
    };

    const copyToClipboard = (text: string, label: string) => {
        navigator.clipboard.writeText(text);
        setCopySuccess(`${label} copied to clipboard!`);
        setTimeout(() => setCopySuccess(''), 3000);
    };

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
                    <div className="status-badge">u
                        <span className="status-dot"></span>
                        {mode === 'encrypt' ? 'ENCRYPTION MODE' : 's MODE'}
                    </div>
                    <h1 className="page-title">
                        {mode === 'encrypt' ? 'Encrypt Your Data' : 'Decrypt Your Data'}
                    </h1>
                    <p className="page-subtitle">
                        {mode === 'encrypt'
                            ? 'Secure your message with a unique 1103-bit encryption key'
                            : 'Recover your original message using your encryption key'}
                    </p>
                </section>

                {/* Tool Container */}
                <section className="tool-section">
                    <div className="tool-container">

                        {/* Mode Toggle */}
                        <div className="mode-toggle">
                            <button
                                onClick={() => { setMode('encrypt'); setOutput(''); setError(null); setGeneratedKey(null); }}
                                className={`mode-btn ${mode === 'encrypt' ? 'active' : ''}`}
                            >
                                <span className="mode-icon">🔒</span>
                                <span>Encrypt</span>
                            </button>
                            <button
                                onClick={() => { setMode('decrypt'); setOutput(''); setError(null); setGeneratedKey(null); }}
                                className={`mode-btn ${mode === 'decrypt' ? 'active' : ''}`}
                            >
                                <span className="mode-icon">🔓</span>
                                <span>Decrypt</span>
                            </button>
                        </div>

                        {/* Input Section */}
                        <div className="tool-card">
                            <div className="card-header">
                                <h3>{mode === 'encrypt' ? 'Plaintext Input' : 'Ciphertext Input'}</h3>
                                <span className="card-badge">REQUIRED</span>
                            </div>
                            <textarea
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                placeholder={mode === 'encrypt'
                                    ? 'Enter the message you want to encrypt...'
                                    : 'Paste the encrypted data here...'}
                                className="tool-textarea"
                                spellCheck={false}
                            />
                        </div>

                        {/* Key Input (Decrypt only) */}
                        {mode === 'decrypt' && (
                            <div className="tool-card">
                                <div className="card-header">
                                    <h3>Decryption Key</h3>
                                    <span className="card-badge warning">1103-BIT KEY</span>
                                </div>
                                <input
                                    type="text"
                                    value={keyInput}
                                    onChange={(e) => setKeyInput(e.target.value)}
                                    placeholder="Enter your encryption key..."
                                    className="tool-input"
                                    spellCheck={false}
                                />
                            </div>
                        )}

                        {/* Action Button */}
                        <button
                            onClick={handleAction}
                            disabled={!input.trim()}
                            className="action-btn"
                        >
                            <span className="action-icon">{mode === 'encrypt' ? '⚡' : '🔑'}</span>
                            <span>{mode === 'encrypt' ? 'Generate Key & Encrypt' : 'Decrypt Message'}</span>
                        </button>

                        {/* Error Message */}
                        {error && (
                            <div className="error-message">
                                <span className="error-icon">⚠️</span>
                                <span>{error}</span>
                            </div>
                        )}

                        {/* Output Section */}
                        {output && (
                            <div className="output-section">
                                <div className="tool-card success">
                                    <div className="card-header">
                                        <h3>{mode === 'encrypt' ? 'Encrypted Output' : 'Decrypted Message'}</h3>
                                        <button
                                            onClick={() => copyToClipboard(output, 'Output')}
                                            className="copy-button"
                                        >
                                            Copy
                                        </button>
                                    </div>
                                    <div className="output-content">
                                        {output}
                                    </div>
                                </div>

                                {/* Generated Key (Encrypt only) */}
                                {generatedKey && (
                                    <div className="key-card">
                                        <div className="key-header">
                                            <div className="key-warning">
                                                <span className="key-icon">🔑</span>
                                                <span>YOUR ENCRYPTION KEY</span>
                                            </div>
                                            <button
                                                onClick={() => copyToClipboard(generatedKey, 'Key')}
                                                className="copy-button key"
                                            >
                                                Copy Key
                                            </button>
                                        </div>
                                        <div className="key-content">
                                            {generatedKey}
                                        </div>
                                        <div className="key-notice">
                                            <strong>⚠️ CRITICAL:</strong> Save this key immediately. It will NOT be shown again.
                                            Without this key, your encrypted data is permanently unrecoverable.
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {/* Success Toast */}
                        {copySuccess && (
                            <div className="success-toast">
                                <span>✓</span> {copySuccess}
                            </div>
                        )}
                    </div>
                </section>

                {/* Info Section */}
                <section className="tool-info">
                    <div className="info-grid">
                        <div className="info-item">
                            <div className="info-icon">🔐</div>
                            <h4>1103-Bit Encryption</h4>
                            <p>Military-grade security with over 10^332 key possibilities</p>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">🖥️</div>
                            <h4>Client-Side Only</h4>
                            <p>Your data never leaves your browser</p>
                        </div>
                        <div className="info-item">
                            <div className="info-icon">🚫</div>
                            <h4>Zero Storage</h4>
                            <p>Keys exist only in memory, vanish on refresh</p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}
