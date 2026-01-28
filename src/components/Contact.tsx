'use client';

import { portfolioData } from '@/data/portfolio';
import { useState } from 'react';

export default function Contact() {
    const { personal } = portfolioData;
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // For now, open mailto link
        const mailtoLink = `mailto:${personal.email}?subject=Contact depuis Portfolio&body=De: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0A${formData.message}`;
        window.location.href = mailtoLink;
    };

    return (
        <section className="section contact" id="contact">
            <div className="container">
                <h2 className="section-title">Contact</h2>
                <div className="contact-content">
                    <div className="contact-info">
                        <h3>Travaillons ensemble !</h3>
                        <p>
                            Vous avez un projet en tête ou souhaitez simplement discuter ?
                            N&apos;hésitez pas à me contacter.
                        </p>
                        <div className="contact-details">
                            <div className="contact-item">
                                <div className="contact-item-icon">📧</div>
                                <span>{personal.email}</span>
                            </div>
                            <div className="contact-item">
                                <div className="contact-item-icon">📱</div>
                                <span>{personal.phone}</span>
                            </div>
                            <div className="contact-item">
                                <div className="contact-item-icon">📍</div>
                                <span>{personal.location}</span>
                            </div>
                        </div>
                    </div>

                    <form className="contact-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="Votre nom"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="votre@email.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                required
                                value={formData.message}
                                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                placeholder="Votre message..."
                            />
                        </div>
                        <button type="submit" className="btn btn-primary">
                            Envoyer le message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
