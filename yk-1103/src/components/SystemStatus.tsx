'use client';

import { useState, useEffect } from 'react';

export default function SystemStatus() {
    const [ping, setPing] = useState(12);
    const [encryptionStatus, setEncryptionStatus] = useState('YK-1103');

    // Dynamic Ping Simulation
    useEffect(() => {
        const interval = setInterval(() => {
            // Simulate realistic ping fluctuations (8ms - 45ms)
            const fluctuation = Math.floor(Math.random() * 10) - 3;
            setPing(prev => {
                const newPing = prev + fluctuation;
                return newPing < 8 ? 8 : newPing > 45 ? 45 : newPing;
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="status-grid-container" style={{ maxWidth: '1000px', margin: '3rem auto 2rem', padding: '0 1rem', position: 'relative', zIndex: 10 }}>
            <div className="status-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
                gap: '1rem',
            }}>
                {/* System Online */}
                <div className="status-card" style={{
                    background: 'rgba(0, 229, 255, 0.05)',
                    border: '1px solid rgba(0, 229, 255, 0.2)',
                    padding: '1rem',
                    borderRadius: '12px',
                    textAlign: 'center',
                    transition: 'all 0.3s ease'
                }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--accent-cyan)', marginBottom: '0.25rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-cyan)', boxShadow: '0 0 8px var(--accent-cyan)' }}></span>
                        SYSTEM
                    </div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>ONLINE</div>
                </div>

                {/* Encryption Standard */}
                <div className="status-card" style={{
                    background: 'rgba(196, 77, 255, 0.05)',
                    border: '1px solid rgba(196, 77, 255, 0.2)',
                    padding: '1rem',
                    borderRadius: '12px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--accent-purple)', marginBottom: '0.25rem' }}>ENCRYPTION</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>{encryptionStatus}</div>
                </div>

                {/* Network Security */}
                <div className="status-card" style={{
                    background: 'rgba(77, 121, 255, 0.05)',
                    border: '1px solid rgba(77, 121, 255, 0.2)',
                    padding: '1rem',
                    borderRadius: '12px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--accent-blue)', marginBottom: '0.25rem' }}>NETWORK</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold' }}>SECURE</div>
                </div>

                {/* Live Ping */}
                <div className="status-card" style={{
                    background: 'rgba(255, 255, 255, 0.05)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    padding: '1rem',
                    borderRadius: '12px',
                    textAlign: 'center'
                }}>
                    <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>LATENCY</div>
                    <div style={{ fontSize: '0.9rem', fontWeight: 'bold', fontFamily: 'monospace', color: ping < 20 ? '#00ff9d' : ping < 40 ? '#ffea00' : '#ff4d4d' }}>
                        {ping}ms
                    </div>
                </div>
            </div>
        </div>
    );
}
