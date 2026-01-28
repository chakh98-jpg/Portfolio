# Portfolio Denis Chakhabov

Portfolio personnel moderne développé avec Next.js 15, TypeScript, et déployable avec Docker.

## 🚀 Technologies

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **CSS** - Design system personnalisé avec variables CSS
- **Docker** - Conteneurisation pour déploiement

## 📋 Prérequis

- Node.js 20 ou supérieur
- npm ou yarn
- Docker (pour le déploiement)

## 🛠️ Installation

```bash
# Installer les dépendances
npm install

# Lancer en développement
npm run dev

# Ouvrir http://localhost:3000
```

## 🐳 Déploiement avec Docker

### Sur votre machine locale

```bash
# Construire l'image
docker build -t portfolio .

# Lancer le conteneur
docker run -d -p 3000:3000 portfolio
```

### Sur Raspberry Pi

```bash
# Copier le projet sur le Pi (depuis Windows)
scp -r . chakh98@192.168.0.217:~/portfolio

# Sur le Pi
cd ~/portfolio
docker compose up -d
```

## 📁 Structure du projet

```
Portfolio/
├── src/
│   ├── app/
│   │   ├── globals.css      # Design system
│   │   ├── layout.tsx       # Layout principal
│   │   └── page.tsx         # Page d'accueil
│   ├── components/
│   │   ├── Navbar.tsx       # Navigation
│   │   ├── Hero.tsx         # Section présentation
│   │   ├── Skills.tsx       # Section compétences
│   │   ├── Projects.tsx     # Section projets
│   │   ├── Contact.tsx      # Section contact
│   │   └── Footer.tsx       # Pied de page
│   └── data/
│       └── portfolio.ts     # Données du portfolio
├── Dockerfile               # Image Docker
├── docker-compose.yml       # Orchestration
└── package.json
```

## 🎨 Personnalisation

Modifiez le fichier `src/data/portfolio.ts` pour mettre à jour :
- Informations personnelles
- Compétences
- Projets
- Langues

## 📄 License

MIT
