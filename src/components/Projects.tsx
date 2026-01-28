import { portfolioData } from '@/data/portfolio';

export default function Projects() {
    const { projects } = portfolioData;

    return (
        <section className="section" id="projects">
            <div className="container">
                <h2 className="section-title">Projets</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <article key={project.id} className="project-card">
                            <div className="project-image">
                                {project.icon}
                            </div>
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                                <div className="project-tags">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="project-tag">{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
