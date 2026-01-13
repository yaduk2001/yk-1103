export default function CreatorPage() {
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
                        CREATOR PROFILE
                    </div>
                    <h1 className="page-title">YADU KRISHNAN</h1>
                    <p className="page-subtitle">
                        The Mind Behind YK-1103
                    </p>
                </section>

                {/* Bio Section */}
                <section className="content-section">
                    <div className="creator-bio">
                        <div className="bio-intro">
                            <p className="bio-lead">
                                MCA Graduate in Computer Science with an obsessive passion for building
                                intelligent systems that push the boundaries of what&apos;s possible.
                            </p>
                        </div>

                        {/* Skills Grid */}
                        <div className="skills-grid">
                            <div className="skill-card">
                                <div className="skill-icon">🤖</div>
                                <h3>Artificial Intelligence</h3>
                                <p>
                                    Architect of neural networks and deep learning models. Passionate about
                                    creating AI systems that learn, adapt, and solve complex real-world problems.
                                </p>
                            </div>

                            <div className="skill-card">
                                <div className="skill-icon">📊</div>
                                <h3>Machine Learning</h3>
                                <p>
                                    Expert in building predictive models, recommendation engines, and
                                    intelligent automation systems using cutting-edge ML algorithms.
                                </p>
                            </div>

                            <div className="skill-card">
                                <div className="skill-icon">🔐</div>
                                <h3>Cryptography</h3>
                                <p>
                                    Creator of custom encryption algorithms. YK-1103 is the culmination of
                                    years of research into secure, deterministic cryptographic systems.
                                </p>
                            </div>

                            <div className="skill-card">
                                <div className="skill-icon">💻</div>
                                <h3>Full-Stack Development</h3>
                                <p>
                                    From low-level system architecture to beautiful user interfaces—building
                                    complete solutions from the ground up.
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Philosophy */}
                <section className="content-section">
                    <h2 className="section-title">Philosophy</h2>
                    <div className="philosophy-quote">
                        <blockquote>
                            &ldquo;Technology should empower, not exploit. Every line of code I write
                            is driven by a belief that privacy is a fundamental right, not a feature.&rdquo;
                        </blockquote>
                    </div>
                    <div className="text-block" style={{ marginTop: '2rem' }}>
                        <p>
                            I designed YK-1103 not as a product, but as a personal standard for what
                            encryption should be. No cloud dependencies. No hidden data collection.
                            No keys stored in databases. Just pure, mathematical security that exists
                            only in the moment you need it.
                        </p>
                        <p>
                            In an era where every click is tracked and every message is analyzed,
                            I believe in building tools that give power back to individuals.
                            Technology should serve humanity, not surveil it.
                        </p>
                    </div>
                </section>

                {/* Technical Expertise */}
                <section className="content-section">
                    <h2 className="section-title">Technical Arsenal</h2>
                    <div className="tech-tags">
                        <span className="tech-tag">Python</span>
                        <span className="tech-tag">TensorFlow</span>
                        <span className="tech-tag">PyTorch</span>
                        <span className="tech-tag">JavaScript</span>
                        <span className="tech-tag">TypeScript</span>
                        <span className="tech-tag">React</span>
                        <span className="tech-tag">Next.js</span>
                        <span className="tech-tag">Node.js</span>
                        <span className="tech-tag">Cryptography</span>
                        <span className="tech-tag">Neural Networks</span>
                        <span className="tech-tag">Deep Learning</span>
                        <span className="tech-tag">Computer Vision</span>
                        <span className="tech-tag">NLP</span>
                        <span className="tech-tag">Data Science</span>
                        <span className="tech-tag">System Design</span>
                    </div>
                </section>

                {/* Mission */}
                <section className="content-section">
                    <h2 className="section-title">Mission</h2>
                    <div className="mission-statement">
                        <p>
                            To build intelligent systems that respect user privacy, leverage the power
                            of AI and machine learning for good, and push the boundaries of what technology
                            can achieve—one algorithm at a time.
                        </p>
                    </div>
                </section>

                {/* Status */}
                <section className="creator-status">
                    <div className="status-terminal">
                        <span className="terminal-prompt">&gt;&gt;</span>
                        <span className="terminal-text">STATUS: BUILDING THE FUTURE</span>
                        <span className="terminal-cursor">_</span>
                    </div>
                </section>
            </div>
        </>
    );
}
