import { portfolioData } from '@/data/portfolio';

export default function Footer() {
    const currentYear = new Date().getFullYear();
    const { personal } = portfolioData;

    return (
        <footer className="footer">
            <div className="container footer-content">
                <p className="footer-text">
                    © {currentYear} {personal.name}. Tous droits réservés.
                </p>
                <div className="footer-socials">
                    <a
                        href={`mailto:${personal.email}`}
                        className="social-link"
                        aria-label="Email"
                    >
                        📧
                    </a>
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="GitHub"
                    >
                        💻
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        aria-label="LinkedIn"
                    >
                        💼
                    </a>
                </div>
            </div>
        </footer>
    );
}
