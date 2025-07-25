# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is **neoblog**, a personal blog and portfolio site built with Astro, React, and Tailwind CSS. It's a modern static site featuring a dark theme, blog posts with MDX support, and a clean portfolio layout.

## Development Commands

### Core Commands

- `bun dev` - Start development server with hot reloading
- `bun build` - Build for production (outputs to `dist/`)
- `bun preview` - Preview production build locally

### Code Quality

- `prettier --write .` - Format all files using Prettier
- `prettier --check .` - Check formatting without making changes

No dedicated linting or testing commands are configured in this project.

## Architecture & Structure

### Tech Stack

- **Framework**: Astro 5.3.0 with React integration
- **Styling**: Tailwind CSS 4.0 with custom brand colors
- **Content**: MDX support for blog posts with content collections
- **Icons**: Lucide React + Simple Icons pack
- **Package Manager**: bun (managed via mise with Node 22)

### Key Directories

- `src/components/` - Reusable UI components
  - `blog/` - Blog-specific components (PostCard, LatestPosts, etc.)
  - `elements/` - UI primitives (Cta, Pill, PageHeading, etc.)
  - `search/` - Search functionality components
- `src/content/posts/` - Blog posts in Markdown/MDX format
- `src/layouts/` - Page layout templates (RootLayout, PageLayout)
- `src/pages/` - File-based routing structure
- `public/` - Static assets (images, favicon, etc.)

### Content Management

Blog posts use Astro's content collections system with:

- Zod schema validation for frontmatter
- Support for drafts (`isDraft`) and featured posts (`isFeatured`)
- Related posts functionality
- Tag-based organization
- RSS feed generation

### Styling Approach

- Tailwind CSS with custom brand color variables
- Dark theme as primary design
- Component-scoped styling using Astro and React patterns
- Typography plugin for markdown content rendering
- Responsive design with mobile-first approach

### Path Aliases

TypeScript path mapping configured with `@/*` pointing to `src/*` for clean imports.

### Site Configuration

Key constants defined in `src/consts.ts`:

- Site metadata (title, description, social links)
- Logo and branding assets
- Social media configuration

## Development Environment

Uses `mise.toml` for tool version management with Node 22 and bun.
