'use client';

import { portfolioData } from '@/data/portfolio';
import { useEffect, useState } from 'react';

export default function Hero() {
    const { personal } = portfolioData;
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const floatingIcons = ['⚛️', '🐳', '⚡', '🐍', '💚', '🎨'];

    return (
        <section className="hero" id="about">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1>
                        <span className="line1">Bonjour, je suis</span>
                        <span className="line2">{personal.name}</span>
                    </h1>
                    <p className="subtitle">
                        {personal.title}
                    </p>
                    <p className="description">
                        {personal.description}
                    </p>
                    <div className="hero-buttons">
                        <a href="#projects" className="btn btn-primary">
                            <span>🚀</span> Découvrir mes projets
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            <span>💬</span> Me contacter
                        </a>
                    </div>
                </div>

                <div className="hero-visual">
                    <div className="hero-avatar">
                        <div className="hero-avatar-ring"></div>
                        <div className="hero-avatar-ring"></div>
                        <div className="hero-avatar-ring"></div>
                        <div className="hero-avatar-inner">
                            👨‍💻
                        </div>
                        {mounted && floatingIcons.map((icon, index) => (
                            <div key={index} className="floating-icon">
                                {icon}
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="scroll-indicator-mouse">
                    <div className="scroll-indicator-wheel"></div>
                </div>
                <span>Scroll</span>
            </div>
        </section>
    );
}
