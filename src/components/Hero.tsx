import { portfolioData } from '@/data/portfolio';

export default function Hero() {
    const { personal } = portfolioData;

    return (
        <section className="hero" id="about">
            <div className="container hero-content">
                <div className="hero-text">
                    <h1 className="animate-fadeInUp">
                        Bonjour, je suis<br />
                        <span>{personal.name}</span>
                    </h1>
                    <p className="subtitle animate-fadeInUp animate-delay-100">
                        {personal.title}
                    </p>
                    <p className="description animate-fadeInUp animate-delay-200">
                        {personal.description}
                    </p>
                    <div className="hero-buttons animate-fadeInUp animate-delay-300">
                        <a href="#projects" className="btn btn-primary">
                            Voir mes projets
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Me contacter
                        </a>
                    </div>
                </div>
                <div className="hero-image animate-fadeInUp animate-delay-400">
                    <div className="hero-image-wrapper">
                        <div className="hero-image-inner">
                            👨‍💻
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
