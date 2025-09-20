# Vite + React — Starter Template

A minimal, fast starter template for building React applications with Vite. This project includes a recommended developer setup with ESLint, a sensible project structure, and example components/pages to help you get started quickly.

Key technologies

- Vite — fast build tool with HMR (Hot Module Replacement)
- React — UI library
- ESLint — linting and code quality

If you prefer TypeScript, use the Vite React TypeScript template to add type-aware linting and configuration.

## Features

- Fast development server with HMR
- Minimal, production-ready build with Vite
- ESLint configuration for consistent code style
- Example components, pages and static assets to demonstrate structure

## Prerequisites

- Node.js 14.18+ or 16+
- npm (or Yarn / pnpm)

# 🛍️ E-Como — Responsive E-Commerce UI

A modern, mobile-first, responsive e-commerce front-end built with **React (Vite)** and **Tailwind CSS**. This project demonstrates a polished product grid with ratings, discount badges, pagination, and brand filters — useful as a UI prototype or starting point for a storefront.

---

## 🚀 Live Demo

> 🔗 https://e-como.vercel.app/

---

## ✨ Features

- 📱 Mobile-first responsive design
- ⭐ Product cards with ratings, discount badges, and price
- 🏷️ Brand filter (single-select)
- 📑 Pagination support
- 🎨 Modern UI styled with Tailwind CSS
- ⚡ Built with React + Vite for fast development and builds
- 🌐 Deployed on Vercel (production preview)

---

## 🔧 Tech Stack

- React (Vite)
- Tailwind CSS
- Vercel (deployment)

---

## 🧭 Project Structure

```
E-Como/
├── public/             # Static assets (images, icons)
├── src/
│   ├── Components/     # Reusable UI components
│   ├── Pages/          # Page-level components
│   ├── data/           # Product/brand data and mocks
│   ├── App.jsx         # Root React component
│   ├── main.jsx        # App entry (ReactDOM)
│   └── index.css       # Global styles
├── package.json        # Dependencies & scripts
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

---

## 🔧 Setup & Run

Clone the repository and run locally:

```bash
git clone https://github.com/AsadArmanKhan/E-Como.git
cd E-Como
npm install
npm run dev
```

Build and preview a production bundle:

```bash
npm run build
npm run preview
```

Notes for Windows PowerShell users:

```powershell
# remove node_modules and reinstall
Remove-Item -Recurse -Force node_modules; npm install
```

---

## 📦 Available Scripts (from `package.json`)

- `dev` — start the Vite dev server with HMR
- `build` — build production assets
- `preview` — preview the production build locally
- `lint` — run ESLint (if configured)

Replace `npm` with `yarn` or `pnpm` if you prefer an alternative package manager.

---

## 🧪 Notes & Tips

- Tailwind CSS makes it easy to keep components consistent and responsive; extend the theme in `tailwind.config.js` as needed.
- For larger projects, consider adding TypeScript, unit tests (Jest / React Testing Library), and end-to-end tests (Cypress).
- Add `Husky` + `lint-staged` to enforce linting and formatting on commit.

---

## 👨‍💻 Author

**Asad Arman Khan**

- GitHub: https://github.com/AsadArmanKhan
- LinkedIn: https://www.linkedin.com/in/asad-arman-khan-a62b5134b/

---

## 📄 License

This repository does not include a license file by default. Add a `LICENSE` (for example, MIT) if you plan to publish or share this project publicly.

---
