'use client';

import { portfolioData } from '@/data/portfolio';
import { useEffect, useRef } from 'react';

export default function Projects() {
    const { projects } = portfolioData;
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

    return (
        <section className="section" id="projects" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title reveal">Projets</h2>
                <p className="section-subtitle reveal">
                    Découvrez quelques-uns de mes projets personnels et académiques
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <article
                            key={project.id}
                            className={`project-card reveal stagger-${(index % 3) + 1}`}
                        >
                            <div className="project-image">
                                {project.icon}
                            </div>
                            <div className="project-content">
                                <span className="project-number">0{project.id}</span>
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
