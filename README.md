# 🌐 Manuel's Portfolio

A modern, interactive portfolio website built with Next.js 16, featuring stunning liquid glass effects, smooth scroll-triggered animations, and a warm cream-to-salmon color palette.

![Next.js](https://img.shields.io/badge/Next.js-16.1.2-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.2.3-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-FF0055?style=flat-square&logo=framer)

## ✨ Features

- **🔮 Liquid Glass Effects** - Glassmorphism cards with backdrop blur and subtle animations
- **🌊 Wavy Background** - Dynamic animated wavy patterns using simplex noise
- **📜 Scroll Animations** - Bidirectional scroll-triggered animations with Framer Motion
- **🎭 Linear Modal** - Smooth shared element transitions for project details
- **🎨 Custom UI Components** - Marquee, randomized text effects, and more
- **🌙 Theme Support** - Light/dark mode with next-themes
- **📱 Fully Responsive** - Optimized for all device sizes

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS v4 |
| **Animations** | Framer Motion |
| **UI Utilities** | clsx, tailwind-merge, class-variance-authority |
| **Icons** | Lucide React |

## 📂 Project Structure

```
src/
├── app/                    # Next.js App Router
├── components/
│   ├── icons/             # Custom icon components
│   ├── layout/            # Layout components (Navbar, Footer)
│   ├── providers/         # Context providers (Theme)
│   ├── sections/          # Page sections
│   │   ├── HeroSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── TechnologiesSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   └── EducationSection.tsx
│   └── ui/                # Reusable UI components
│       ├── LiquidGlassCard.tsx
│       ├── LinearModal.tsx
│       ├── WavyBackground.tsx
│       ├── Marquee.tsx
│       ├── RandomizedTextEffect.tsx
│       └── ThemeToggle.tsx
└── lib/                   # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/MesshM/Portfolio.git
   cd Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with Turbopack |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🎨 Color Palette

The portfolio uses a warm, modern color scheme:

| Color | Hex | Usage |
|-------|-----|-------|
| Cream | `#fffcf2` | Background, light elements |
| Salmon | `#f4a261` | Accents, highlights |
| Coffee | `#5c4033` | Text, dark elements |

## 🔧 Key Components

### LiquidGlassCard
A glassmorphism card component with backdrop blur, subtle borders, and hover effects.

### WavyBackground
Animated wavy patterns created with simplex noise, adding visual depth to sections.

### LinearModal
A modal component with shared element transitions for smooth project detail views.

### Marquee
An infinite scrolling component for displaying technologies and skills.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **GitHub**: [https://github.com/MesshM/Portfolio](https://github.com/MesshM/Portfolio)
- **LinkedIn**: [https://linkedin.com/in/messhm](https://linkedin.com/in/manuel-meza-h)

---

<p align="center">
  Built with ❤️ by <a href="https://github.com/MesshM">Manuel</a>
</p>
