import { portfolioData } from '@/data/portfolio';

export default function Skills() {
    const { skills, languages } = portfolioData;

    return (
        <section className="section skills" id="skills">
            <div className="container">
                <h2 className="section-title">Compétences</h2>
                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <div
                            key={skill.name}
                            className="skill-card"
                            style={{ animationDelay: `${index * 50}ms` }}
                        >
                            <div className="skill-icon">{skill.icon}</div>
                            <div className="skill-name">{skill.name}</div>
                        </div>
                    ))}
                </div>

                <h2 className="section-title" style={{ marginTop: '80px' }}>Langues</h2>
                <div className="skills-grid" style={{ maxWidth: '500px', margin: '0 auto' }}>
                    {languages.map((lang) => (
                        <div key={lang.name} className="skill-card">
                            <div className="skill-icon">🌍</div>
                            <div className="skill-name">{lang.name}</div>
                            <div style={{ color: 'var(--primary-light)', marginTop: '8px', fontWeight: 600 }}>
                                {lang.level}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
