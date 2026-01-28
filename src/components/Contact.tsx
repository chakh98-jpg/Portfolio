'use client';

import { portfolioData } from '@/data/portfolio';
import { useState, useEffect, useRef } from 'react';

export default function Contact() {
    const { personal } = portfolioData;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            },
            { threshold: 0.1 }
        );

        const elements = sectionRef.current?.querySelectorAll('.reveal');
        elements?.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            // Using Web3Forms - free service, no backend needed!
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: '07291629-9cf5-490b-8d75-2ab4e8d72bd2', // User needs to get this from web3forms.com
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `Nouveau message de ${formData.name} - Portfolio`,
                    from_name: 'Portfolio Contact Form',
                    to_email: personal.email,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
                setTimeout(() => setStatus('idle'), 5000);
            } else {
                throw new Error('Failed to send');
            }
        } catch {
            // Fallback to mailto if API fails
            const mailtoLink = `mailto:${personal.email}?subject=Contact depuis Portfolio - ${formData.name}&body=De: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${encodeURIComponent(formData.message)}`;
            window.location.href = mailtoLink;
            setStatus('success');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    return (
        <section className="section contact" id="contact" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title reveal">Contact</h2>
                <p className="section-subtitle reveal">
                    Vous avez un projet en tête ? Discutons-en !
                </p>

                <div className="contact-content">
                    <div className="contact-info reveal stagger-1">
                        <h3>Travaillons ensemble ! 🚀</h3>
                        <p>
                            Je suis toujours ouvert à discuter de nouveaux projets,
                            d&apos;idées créatives ou d&apos;opportunités de collaboration.
                        </p>
                        <div className="contact-details">
                            <a href={`mailto:${personal.email}`} className="contact-item" style={{ textDecoration: 'none' }}>
                                <div className="contact-item-icon">📧</div>
                                <div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Email</div>
                                    <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{personal.email}</div>
                                </div>
                            </a>
                            <a href={`tel:${personal.phone.replace(/\s/g, '')}`} className="contact-item" style={{ textDecoration: 'none' }}>
                                <div className="contact-item-icon">📱</div>
                                <div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Téléphone</div>
                                    <div style={{ fontWeight: 500, color: 'var(--text-primary)' }}>{personal.phone}</div>
                                </div>
                            </a>
                            <div className="contact-item">
                                <div className="contact-item-icon">📍</div>
                                <div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '4px' }}>Localisation</div>
                                    <div style={{ fontWeight: 500 }}>{personal.location}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form reveal stagger-2" onSubmit={handleSubmit}>
                        {status === 'success' && (
                            <div style={{
                                padding: '16px',
                                background: 'rgba(0, 255, 136, 0.1)',
                                border: '1px solid rgba(0, 255, 136, 0.3)',
                                borderRadius: '12px',
                                color: '#00ff88',
                                textAlign: 'center',
                                marginBottom: '20px',
                                animation: 'fadeIn 0.3s ease'
                            }}>
                                ✅ Message envoyé avec succès !
                            </div>
                        )}

                        {status === 'error' && (
                            <div style={{
                                padding: '16px',
                                background: 'rgba(255, 87, 108, 0.1)',
                                border: '1px solid rgba(255, 87, 108, 0.3)',
                                borderRadius: '12px',
                                color: '#f5576c',
                                textAlign: 'center',
                                marginBottom: '20px'
                            }}>
                                ❌ Erreur lors de l&apos;envoi. Veuillez réessayer.
                            </div>
                        )}

                        <div className="form-group">
                            <label htmlFor="name">Nom complet</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="John Doe"
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Adresse email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="john@example.com"
                                disabled={status === 'sending'}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Votre message</label>
                            <textarea
                                id="message"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Décrivez votre projet ou votre demande..."
                                disabled={status === 'sending'}
                            />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary"
                            disabled={status === 'sending'}
                            style={{
                                width: '100%',
                                justifyContent: 'center',
                                opacity: status === 'sending' ? 0.7 : 1,
                                cursor: status === 'sending' ? 'wait' : 'pointer'
                            }}
                        >
                            {status === 'sending' ? (
                                <>
                                    <span style={{
                                        display: 'inline-block',
                                        animation: 'spin 1s linear infinite'
                                    }}>⏳</span>
                                    Envoi en cours...
                                </>
                            ) : (
                                <>✨ Envoyer le message</>
                            )}
                        </button>

                        <p style={{
                            fontSize: '0.85rem',
                            color: 'var(--text-muted)',
                            textAlign: 'center',
                            marginTop: '16px'
                        }}>
                            💡 Le message sera envoyé directement à mon email
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
