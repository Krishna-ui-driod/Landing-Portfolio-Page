# Redesign 3D Portfolio Page

A modern, 3D-styled portfolio website template built with Vite and React. This project demonstrates a polished portfolio layout with interactive 3D visuals, responsive design, Tailwind-based styles, and reusable UI components.

## Features

- 3D and motion-driven UI elements and assets
- Component-driven layout with reusable UI primitives
- Tailwind + Radix UI primitives for accessibility
- Vite-powered dev experience and fast builds

## Tech stack

- Vite
- React (TSX entry: [src/main.tsx](src/main.tsx))
- Tailwind CSS
- Radix UI primitives and several UI helpers (see `src/app/components/`)
- MUI icons and utility libraries

## Quickstart

Prerequisites: Node.js (>=18) and a package manager (`pnpm`, `npm`, or `yarn`). This repo contains a `pnpm-workspace.yaml` so `pnpm` is recommended.

Install dependencies (pnpm):

```bash
pnpm install
```

Or with npm:

```bash
npm install
```

Start the dev server:

```bash
pnpm dev
# or
npm run dev
```

Build for production:

```bash
pnpm build
# or
npm run build
```

Preview the production build (after `build`):

```bash
npx vite preview
```

## Project structure (high level)

- [src/main.tsx](src/main.tsx) — App entry
- [src/app/App.tsx](src/app/App.tsx) — Root app component
- [src/app/Layout.tsx](src/app/Layout.tsx) — Page layout & navigation
- [src/app/components/] — Visual components (Hero, ProjectsGrid, About, Contact, etc.)
- [src/styles/] — Tailwind and theme styles
- public/ — Static assets
- ATTRIBUTIONS.md — Third-party assets & credits

Refer to the components folder to inspect assets and UI primitives used throughout the site.

## Development notes

- Design system: Many small UI files live in `src/app/components/ui/` and wrap Radix primitives for consistent behavior.
- Motion and interactions: Check `CursorGlow.tsx`, `FloatingAsset.tsx`, and `TiltCard.tsx` for custom interaction logic.
- If adding dependencies, prefer `pnpm` to keep the monorepo workspace behavior consistent.

## Contributing

1. Create an issue describing the change or feature.
2. Open a branch with a clear name: `feat/your-feature` or `fix/description`.
3. Run lint/tests (if any) and ensure the local dev server builds.
4. Create a pull request with a descriptive title and summary.

## Credits & Attributions

See [ATTRIBUTIONS.md](ATTRIBUTIONS.md) for third-party assets and licenses.

## License

This repository has no license specified. Add a `LICENSE` file if you want to make the project open source.

---

If you'd like, I can also:

- Add a short demo GIF or screenshot to the README
- Add CI or a deployment example (Netlify/Vercel)
- Generate a smaller CONTRIBUTING.md with contribution guidelines

Tell me which of those you'd like next.
  