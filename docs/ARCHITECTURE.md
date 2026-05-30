# Architecture Overview

## Technology Stack

The Pingu's English Laos website is built using a modern frontend stack:
- **React (v19)**: Component-based UI library.
- **Vite**: Ultra-fast build tool and development server.
- **TypeScript**: Static typing for robustness and safety.
- **Tailwind CSS**: Utility-first styling framework.

## Project Structure

```
PingusEnglish-v1.0/
├── src/               # Application source code
│   ├── components/    # Reusable UI components
│   ├── App.tsx        # Root component
│   ├── main.tsx       # Entry point
│   ├── index.css      # Global styles & Tailwind imports
│   └── translations.ts# Multilingual content (English/Lao)
├── public/            # Static assets
│   ├── pingu-images/  # Optimized webp images
│   ├── robots.txt     # SEO configurations
│   └── sitemap.xml    # Sitemap
├── docs/              # Project documentation
├── .github/           # GitHub Actions workflows
├── dist/              # Production build output (git-ignored)
└── package.json       # Project dependencies & scripts
```

## CMS Integration

This project is prepared for **CloudCannon** CMS integration. CloudCannon automatically syncs with the `main` branch of the GitHub repository, executes the build command (`npm run build`), and serves the generated static files from the `dist` folder.
