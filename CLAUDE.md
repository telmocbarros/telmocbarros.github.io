# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Astro 5.12.3, React 19, and Tailwind CSS 4.1.11. The site showcases professional background, projects, and contact information for a full-stack engineer.

## Development Commands

- `npm run dev` - Start development server (localhost:4321)
- `npm run build` - Build for production (outputs to ./dist/)
- `npm run preview` - Preview production build locally
- `npm run astro` - Access Astro CLI commands

## Architecture

### Component Strategy
- **Astro components** (.astro) for static content and layouts
- **React components** (.jsx) for interactive functionality
- Hybrid routing: index.astro redirects to Layout.astro with home.astro content

### Page Structure
- `src/pages/index.astro` - Entry point that routes to Layout
- `src/pages/home.astro` - Main landing page content
- `src/pages/projects.astro` - Project showcase
- `src/pages/contact.astro` - Contact form
- `src/layouts/Layout.astro` - Base layout with navigation

### Styling System
- **Primary approach**: Tailwind CSS utilities
- **Theme system**: CSS custom properties in `src/styles/global.css`
- **Color scheme**: Warm palette with orange primary (#D96F32), cream background (#F3E9DC)
- **Container pattern**: Use `Container.jsx` component for consistent layout constraints

### Key Configuration
- **TypeScript**: Strict mode enabled, React JSX support
- **Astro config**: React integration with Tailwind via Vite plugin
- **Static assets**: Place in `public/` directory
- **Build assets**: Use `src/assets/` for processed assets

## Current Implementation Status

### Completed
- Basic site structure and navigation
- Responsive layout system
- Design system with consistent theming
- Contact form UI (validation-ready)
- Projects page structure

### In Development
- Projects section uses placeholder data
- Contact form needs backend integration
- Social media links need real URLs