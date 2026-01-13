export default function AboutPage() {
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
                        ABOUT THE SYSTEM
                    </div>
                    <h1 className="page-title">What is YK-1103?</h1>
                    <p className="page-subtitle">
                        A revolutionary approach to personal data encryption
                    </p>
                </section>

                {/* Mission Statement */}
                <section className="content-section">
                    <h2 className="section-title">Our Mission</h2>
                    <div className="text-block">
                        <p>
                            In an age where data breaches are commonplace and privacy is commoditized,
                            YK-1103 was created to give individuals absolute sovereignty over their sensitive information.
                        </p>
                        <p>
                            We believe that encryption should be accessible, transparent, and completely under your control.
                            No cloud servers. No subscription fees. No data collection. Just pure, mathematical security
                            that runs entirely in your browser.
                        </p>
                    </div>
                </section>

                {/* Philosophy Grid */}
                <section className="content-section">
                    <h2 className="section-title">Core Philosophy</h2>
                    <div className="philosophy-grid">
                        <div className="philosophy-card">
                            <div className="philosophy-number">01</div>
                            <h3>Zero Trust Architecture</h3>
                            <p>
                                We dont trust servers—not even our own. All cryptographic operations happen
                                exclusively in your browser. Your plaintext never leaves your device.
                            </p>
                        </div>
                        <div className="philosophy-card">
                            <div className="philosophy-number">02</div>
                            <h3>Ephemeral Keys</h3>
                            <p>
                                Keys exist only in volatile memory. The moment you close your browser tab,
                                the cryptographic context is destroyed. No traces. No recovery. Complete annihilation.
                            </p>
                        </div>
                        <div className="philosophy-card">
                            <div className="philosophy-number">03</div>
                            <h3>Deterministic Reversibility</h3>
                            <p>
                                Unlike hashing, YK-1103 encryption is fully reversible. The same key will always
                                decrypt the same ciphertext to the original message. Mathematical certainty.
                            </p>
                        </div>
                        <div className="philosophy-card">
                            <div className="philosophy-number">04</div>
                            <h3>Open Algorithm</h3>
                            <p>
                                Security through obscurity is a fallacy. The YADU algorithm is transparent.
                                Its strength lies in the mathematics, not in hidden implementations.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why 1103 bits */}
                <section className="content-section">
                    <h2 className="section-title">Why 1103 Bits?</h2>
                    <div className="highlight-box">
                        <div className="highlight-stat">
                            <span className="big-number">10<sup>332</sup></span>
                            <span className="stat-desc">Possible Key Combinations</span>
                        </div>
                        <div className="highlight-text">
                            <p>
                                Standard AES-256 uses 256-bit keys, providing approximately 10^77 combinations.
                                While already astronomical, YK-1103 pushes this boundary further with a 1103-bit key space.
                            </p>
                            <p>
                                The number 1103 is not arbitrary. It is derived from the YADU identity constants
                                (Y=89, A=65, D=68, U=85) through a specific mathematical transformation, creating
                                a cryptographic signature unique to this system.
                            </p>
                            <p>
                                To brute-force a 1103-bit key, an attacker would need more time than the estimated
                                remaining lifespan of the universe—by a factor of 10^250.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Use Cases */}
                <section className="content-section">
                    <h2 className="section-title">Who Is This For?</h2>
                    <div className="features-grid">
                        <div className="feature-item">
                            <div className="feature-icon">👤</div>
                            <h3 className="feature-title">Privacy Advocates</h3>
                            <p className="feature-desc">
                                Individuals who refuse to trust third-party services with their personal data.
                                Your secrets stay yours.
                            </p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">💼</div>
                            <h3 className="feature-title">Professionals</h3>
                            <p className="feature-desc">
                                Lawyers, doctors, journalists, and executives handling sensitive client or source information.
                            </p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🔬</div>
                            <h3 className="feature-title">Researchers</h3>
                            <p className="feature-desc">
                                Academics and scientists protecting proprietary research, unpublished findings, or confidential data.
                            </p>
                        </div>
                        <div className="feature-item">
                            <div className="feature-icon">🏢</div>
                            <h3 className="feature-title">Organizations</h3>
                            <p className="feature-desc">
                                Teams that need secure, offline-capable encryption without complex infrastructure setup.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Comparison */}
                <section className="content-section">
                    <h2 className="section-title">YK-1103 vs Traditional Methods</h2>
                    <div className="comparison-table">
                        <div className="comparison-header">
                            <span>Feature</span>
                            <span>Cloud Services</span>
                            <span>YK-1103</span>
                        </div>
                        <div className="comparison-row">
                            <span>Data Location</span>
                            <span className="negative">Remote Servers</span>
                            <span className="positive">Your Browser Only</span>
                        </div>
                        <div className="comparison-row">
                            <span>Key Management</span>
                            <span className="negative">Provider Controlled</span>
                            <span className="positive">You Control</span>
                        </div>
                        <div className="comparison-row">
                            <span>Offline Access</span>
                            <span className="negative">No</span>
                            <span className="positive">Yes</span>
                        </div>
                        <div className="comparison-row">
                            <span>Data Collection</span>
                            <span className="negative">Yes (Analytics)</span>
                            <span className="positive">Zero</span>
                        </div>
                        <div className="comparison-row">
                            <span>Subscription Cost</span>
                            <span className="negative">Monthly Fees</span>
                            <span className="positive">Free Forever</span>
                        </div>
                        <div className="comparison-row">
                            <span>Breach Risk</span>
                            <span className="negative">Server Vulnerabilities</span>
                            <span className="positive">None (No Server)</span>
                        </div>
                    </div>
                </section>

                {/* CTA */}
                <section className="final-cta">
                    <h2 className="cta-title">Experience True Privacy</h2>
                    <p className="cta-text">
                        No accounts. No tracking. No compromises.
                    </p>
                    <a href="/tool" className="cta-button large">
                        Try Encryption Now
                    </a>
                </section>
            </div>
        </>
    );
}
