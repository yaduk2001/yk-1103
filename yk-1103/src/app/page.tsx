import Link from 'next/link';
import SystemStatus from '../components/SystemStatus';

export default function LandingPage() {
  return (
    <>
      {/* Animated Background */}
      <div className="bg-animation">
        <div className="floating-shape shape-1"></div>
        <div className="floating-shape shape-2"></div>
        <div className="floating-shape shape-3"></div>
      </div>

      {/* Particles */}
      <div className="particles">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="landing-container">
        <div className="hero-section">
          <div className="status-badge">
            <span className="status-dot"></span>
            SECURE PROTOCOL ACTIVE
          </div>

          <h1 className="hero-title">YK-1103</h1>

          <p className="hero-subtitle-text">
            Military-Grade Client-Side Encryption
          </p>

          <p className="hero-description-text">
            A zero-knowledge cryptographic system powered by 1103-bit ephemeral keys.
            Your data never leaves your browser. No servers. No logs. No trace.
          </p>

          <div className="cta-group">
            <Link href="/tool" className="cta-button">
              Launch Encryption Terminal
            </Link>
            <Link href="/how-it-works" className="cta-secondary">
              View Technical Specs →
            </Link>
          </div>
        </div>
      </div>

      {/* System Status Indicators - Live Dynamic */}
      <SystemStatus />

      {/* Features Section */}
      <section className="features-section">
        <div className="features-grid">
          <div className="feature-item">
            <div className="feature-icon">🔐</div>
            <h3 className="feature-title">1103-Bit Key Space</h3>
            <p className="feature-desc">
              Over 10^332 possible key combinations. Brute force attacks would take longer than the age of the universe.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🖥️</div>
            <h3 className="feature-title">Client-Side Only</h3>
            <p className="feature-desc">
              All encryption happens in your browser. Zero data transmission. Complete offline capability.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🔄</div>
            <h3 className="feature-title">Deterministic Algorithm</h3>
            <p className="feature-desc">
              YADU encryption ensures identical outputs for the same key-message pair. Mathematically reversible.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🚫</div>
            <h3 className="feature-title">Zero Storage</h3>
            <p className="feature-desc">
              No cookies. No localStorage. No database. Keys exist only in memory and vanish on page refresh.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">⚡</div>
            <h3 className="feature-title">Instant Processing</h3>
            <p className="feature-desc">
              Sub-millisecond encryption speed. Process megabytes of data in the blink of an eye.
            </p>
          </div>

          <div className="feature-item">
            <div className="feature-icon">🛡️</div>
            <h3 className="feature-title">Integrity Verification</h3>
            <p className="feature-desc">
              Built-in tamper detection. Invalid keys or corrupted ciphertext are immediately rejected.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number">1103</div>
            <div className="stat-label">Bit Encryption</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">0</div>
            <div className="stat-label">Data Stored</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">100%</div>
            <div className="stat-label">Client-Side</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">∞</div>
            <div className="stat-label">Key Possibilities</div>
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="specs-section">
        <h2 className="section-title">Technical Specifications</h2>
        <div className="specs-list">
          <div className="spec-row">
            <span className="spec-key">Algorithm</span>
            <span className="spec-value">YADU (Substitution-Permutation Network)</span>
          </div>
          <div className="spec-row">
            <span className="spec-key">Key Length</span>
            <span className="spec-value">1103 bits (138 bytes)</span>
          </div>
          <div className="spec-row">
            <span className="spec-key">Key Generation</span>
            <span className="spec-value">Cryptographically Secure Random (Web Crypto API)</span>
          </div>
          <div className="spec-row">
            <span className="spec-key">Integrity Check</span>
            <span className="spec-value">YADU Magic Header Verification</span>
          </div>
          <div className="spec-row">
            <span className="spec-key">Encoding</span>
            <span className="spec-value">Base64 Output Ciphertext</span>
          </div>
          <div className="spec-row">
            <span className="spec-key">Platform</span>
            <span className="spec-value">Browser-Native JavaScript</span>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <h2 className="cta-title">Ready to Secure Your Data?</h2>
        <p className="cta-text">
          No signup. No download. No installation. Just pure encryption.
        </p>
        <Link href="/tool" className="cta-button large">
          Start Encrypting Now
        </Link>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>YK-1103 Encryption System © 2026 | Zero-Knowledge Cryptography</p>
      </footer>
    </>
  );
}
