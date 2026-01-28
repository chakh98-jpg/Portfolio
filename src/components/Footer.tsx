'use client';

import { portfolioData } from '@/data/portfolio';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { personal } = portfolioData;

    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="footer-text">
                    © {currentYear} <a href="#about">{personal.name}</a>.
                </p>
                <div className="footer-socials">
                    <a
                        href={`mailto:${personal.email}`}
                        className="social-link"
                        aria-label="Email"
                        title="Envoyer un email"
                    >
                        📧
                    </a>
                    <a
                        href="https://github.com/chakh98-jpg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="GitHub"
                        title="Voir mon GitHub"
                    >
                        💻
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="LinkedIn"
                        title="Voir mon LinkedIn"
                    >
                        💼
                    </a>
                </div>
            </div>
        </footer>
    );
}
