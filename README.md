# 🌐 Portfolio - Luca Fuster

This repository contains the source code for my personal portfolio website.  
The website is built with **Astro**, **TailwindCSS**, and **TypeScript**, featuring a modern, tech-inspired design with gold accents.

## 🚀 About

This portfolio showcases:

* My background and technical skills
* My personal and professional experiences
* My projects and achievements
* A way to contact me easily

### Main sections

* **Home** – Introduction and overview with animated tech background
* **About** – Personal information, experiences, and education
* **Projects** – List and details of my work (coming soon)

## 🧰 Technologies

* **Astro** – Modern, component-based framework for fast static sites
* **TailwindCSS** – Utility-first CSS framework for rapid UI development
* **TypeScript** – Type-safe JavaScript for better code quality
* **GitHub Pages** – For hosting and deployment (optional)

## 🎨 Design Features

* **Tech-inspired background** – Animated grid with circuit-like lines
* **Gold accents** – Elegant gold highlights throughout the design
* **Rounded corners** – Modern, friendly aesthetic
* **Smooth animations** – Subtle entrance animations and hover effects
* **Responsive design** – Optimized for all screen sizes
* **Bilingual** – French and English support

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment

The website can be deployed to various platforms:

* **GitHub Pages** – Using GitHub Actions (see `.github/workflows`)
* **Vercel** – Automatic deployments from GitHub
* **Netlify** – Connect your repository for instant deployments

### GitHub Pages Setup

1. Push your code to a GitHub repository
2. Enable GitHub Pages in repository settings
3. The GitHub Action will automatically deploy on push to `main`

## 🧑‍💻 Author

Developed and maintained by **Luca Fuster**.

## 📄 License

This project is licensed under the **Creative Commons Attribution - NonCommercial - NoDerivatives (CC BY-NC-ND)** license.

You are free to:
* **Share** – Copy and redistribute the material
* **Attribution** – You must give appropriate credit

Under the following terms:
* **NonCommercial** – You may not use the material for commercial purposes
* **NoDerivatives** – You may not distribute modified versions

For more information, see the full license: [CC BY-NC-ND 4.0](https://creativecommons.org/licenses/by-nc-nd/4.0/)

---

## 📝 Project Structure

```
/
├── public/          # Static assets (images, favicon, etc.)
├── src/
│   ├── components/  # Reusable Astro components
│   ├── layouts/     # Page layouts
│   ├── pages/       # Route pages (en/fr for i18n)
│   ├── styles/      # Global styles and Tailwind config
│   └── i18n/        # Internationalization files
├── .github/
│   └── workflows/   # GitHub Actions for CI/CD
└── astro.config.mjs # Astro configuration
```
