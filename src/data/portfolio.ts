// Portfolio data based on Denis Chakhabov's CV
export const portfolioData = {
    personal: {
        name: "Denis Chakhabov",
        title: "Développeur Full Stack",
        email: "chakh98@hotmail.fr",
        phone: "0486 10 81 75",
        location: "4800 Verviers",
        birthDate: "10 août 1998",
        description: "Étudiant en informatique passionné par le développement d'applications web et la création de solutions innovantes. Je maîtrise un large éventail de technologies et j'aime relever de nouveaux défis.",
    },

    skills: [
        { name: "Java", icon: "☕" },
        { name: "Python", icon: "🐍" },
        { name: "JavaScript", icon: "⚡" },
        { name: "TypeScript", icon: "📘" },
        { name: "HTML5/CSS", icon: "🎨" },
        { name: "React", icon: "⚛️" },
        { name: "Angular", icon: "🅰️" },
        { name: "Next.js", icon: "▲" },
        { name: "Node.js", icon: "💚" },
        { name: "SQL/PLSQL", icon: "🗄️" },
        { name: "C/C++/C#", icon: "🔧" },
        { name: "Docker", icon: "🐳" },
        { name: "Bash", icon: "💻" },
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
    ],

    languages: [
        { name: "Français", level: "C2" },
        { name: "Anglais", level: "C1" },
        { name: "Russe", level: "C2" },
    ],

    education: {
        degree: "Bachelier en informatique",
        school: "IPEFA Sup Seraing",
        period: "de sept. 2021 à ce jour",
    },

    projects: [
        {
            id: 1,
            title: "Système de Gestion Scolaire",
            description: "Application de gestion administrative pour établissements scolaires. Automatisation des processus clés, gestion des unités d'enseignement, inscriptions, et suivi de l'assiduité avec une interface utilisateur intuitive.",
            technologies: ["Python", "WPF"],
            icon: "🎓",
        },
        {
            id: 2,
            title: "Mini Réseau Social",
            description: "Application web permettant de créer un compte, publier des vidéos et posts, liker et commenter. Intégration d'un système d'authentification JWT sécurisé et API REST complète.",
            technologies: ["Angular", "Node.js", "Express", "MongoDB"],
            icon: "👥",
        },
        {
            id: 3,
            title: "Application de Gestion de Tâches",
            description: "Application Kanban board collaborative pour la gestion de projets en équipe. Drag & drop, suivi de progression et notifications en temps réel via WebSockets.",
            technologies: ["React", "Node.js", "PostgreSQL", "Docker"],
            icon: "📋",
        },
        {
            id: 4,
            title: "Dashboard d'Analyse de Données",
            description: "Tableau de bord web pour visualiser et analyser des données SQL. Graphiques interactifs, filtres dynamiques et API REST pour récupération de données en temps réel.",
            technologies: ["Python", "Flask", "Chart.js", "SQL"],
            icon: "📊",
        },
        {
            id: 5,
            title: "Portfolio Personnel",
            description: "Site web personnel présentant mes projets, compétences et coordonnées. Design moderne avec optimisation SEO et déploiement Docker.",
            technologies: ["Next.js", "TypeScript", "CSS", "Docker"],
            icon: "🌐",
        },
    ],
};
