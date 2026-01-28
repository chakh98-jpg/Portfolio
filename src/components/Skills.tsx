'use client';

import { portfolioData } from '@/data/portfolio';
import { useEffect, useRef } from 'react';

export default function Skills() {
    const { skills, languages } = portfolioData;
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

    // Fixed skill levels (no Math.random() to avoid hydration issues)
    const skillLevels: Record<string, number> = {
        'Java': 85,
        'Python': 90,
        'JavaScript': 95,
        'TypeScript': 88,
        'C/C++/C#': 80,
        'HTML5/CSS': 95,
        'React': 92,
        'Angular': 85,
        'Next.js': 88,
        'Node.js': 90,
        'SQL/PLSQL': 85,
        'Docker': 82,
        'Bash': 78,
        'MongoDB': 80,
        'PostgreSQL': 82,
    };

    // Group skills by category
    const skillCategories = [
        {
            name: 'Langages de programmation',
            skills: skills.filter(s => ['Java', 'Python', 'JavaScript', 'TypeScript', 'C/C++/C#'].includes(s.name)),
        },
        {
            name: 'Frontend & Frameworks',
            skills: skills.filter(s => ['HTML5/CSS', 'React', 'Angular', 'Next.js'].includes(s.name)),
        },
        {
            name: 'Backend & DevOps',
            skills: skills.filter(s => ['Node.js', 'SQL/PLSQL', 'Docker', 'Bash', 'MongoDB', 'PostgreSQL'].includes(s.name)),
        },
    ];

    return (
        <section className="section skills" id="skills" ref={sectionRef}>
            <div className="container">
                <h2 className="section-title reveal">Compétences</h2>
                <p className="section-subtitle reveal">
                    Technologies et outils que je maîtrise pour créer des applications modernes
                </p>

                <div className="skills-container">
                    {skillCategories.map((category, catIndex) => (
                        <div key={category.name} className={`skills-category reveal stagger-${catIndex + 1}`}>
                            <h3>{category.name}</h3>
                            <div className="skills-grid">
                                {category.skills.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="skill-card"
                                        style={{ transitionDelay: `${index * 100}ms` }}
                                    >
                                        <span className="skill-icon">{skill.icon}</span>
                                        <span className="skill-name">{skill.name}</span>
                                        <div className="skill-level">
                                            <div
                                                className="skill-level-bar"
                                                style={{ width: `${skillLevels[skill.name] || 80}%` }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-category reveal stagger-4" style={{ marginTop: '60px' }}>
                    <h3>Langues</h3>
                    <div className="skills-grid" style={{ maxWidth: '500px' }}>
                        {languages.map((lang) => (
                            <div key={lang.name} className="skill-card">
                                <span className="skill-icon">🌍</span>
                                <span className="skill-name">{lang.name}</span>
                                <div style={{
                                    color: 'var(--primary)',
                                    marginTop: '8px',
                                    fontWeight: 600,
                                    fontSize: '0.9rem'
                                }}>
                                    Niveau {lang.level}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
