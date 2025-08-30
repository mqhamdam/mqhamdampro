# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with Vite
- `npm run build` - Build for production (TypeScript compilation + Vite build)
- `npm run lint` - Run ESLint linting
- `npm run preview` - Preview production build

## Project Architecture

This is a React + TypeScript portfolio website built with Vite, using:

- **Frontend Framework**: React 19+ with TypeScript
- **Routing**: React Router v7 (createBrowserRouter)
- **Styling**: Tailwind CSS v4 with Ant Design components
- **Icons**: HugeIcons React package
- **Build Tool**: Vite with alias `@` pointing to `/src`

### Key Structure

- `src/app/app.router.tsx` - Main router configuration with routes for home and projects pages
- `src/ui/pages/` - Page components (home.page.tsx, projects.page.tsx)
- `src/assets/` - Static assets organized by type (social_icons, country_icons, tech_logo, cert)

### Routing Pattern

Routes are defined using React Router's declarative approach:
- Routes use JSX Route elements stored in variables (e.g., `_HomePageRoute`)
- Router created with `createBrowserRouter` and `createRoutesFromChildren`

### Component Patterns

- Uses inline component definitions within page files
- Ant Design components (Tooltip, Divider) integrated with custom styling
- Assets imported as modules and used in img src attributes
- Custom CSS properties used for theming (e.g., `--primary-color`, `--card-background-light`)

### Asset Management

Assets are well-organized and imported as ES modules:
- Technology logos as SVG files
- Social/country icons as PNG files  
- Certification images as PNG files
- Video content (webm format for memoji)