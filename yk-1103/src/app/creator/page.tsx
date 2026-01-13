export default function CreatorPage() {
    return (
        <div className="container-tight" style={{ textAlign: 'center', paddingTop: '6rem' }}>

            <div className="fade-in-delayed-1" style={{ marginBottom: '2rem' }}>
                <h1 style={{ fontSize: '1.5rem', fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--text-main)' }}>YK / Yadu</h1>
                <div style={{
                    fontSize: '0.7rem',
                    fontFamily: 'var(--font-mono)',
                    color: 'var(--text-dim)',
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    marginTop: '0.5rem'
                }}>
                    Software Developer · System Designer · Encryption Engineer
                </div>
            </div>

            <div className="card fade-in-delayed-2" style={{ margin: '0 auto', textAlign: 'left', border: 'none', maxWidth: '600px' }}>
                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem', fontWeight: 300 }}>
                    I designed YK-1103 not as a product, but as a personal standard.
                    It rejects the black-box opacity of modern tools in favor of mathematical transparency.
                </p>

                <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: 1.8, fontWeight: 300 }}>
                    There is no cloud here. No metrics. No keys saved to a database.
                    Just a deterministic 1103-bit state machine that does exactly what it is engineered to do.
                </p>

                <div style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: '1px solid var(--border-subtle)' }}>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', fontFamily: 'var(--font-mono)' }}>
                        &gt;&gt; SYSTEM_STATUS: OPERATIONAL
                    </p>
                </div>
            </div>

        </div>
    );
}
