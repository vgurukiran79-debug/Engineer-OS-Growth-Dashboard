# Engineer OS — My 2nd Year Growth

Engineer OS is a local-first engineering growth command center for VTU students to track attendance, academics, skills, DSA, projects, goals, and career readiness.

## Run & Operate

- `pnpm --filter @workspace/engineer-os run dev` — run the web app through its managed workflow
- `pnpm run typecheck` — full typecheck across all packages
- `PORT=23525 BASE_PATH=/ pnpm --filter @workspace/engineer-os run build` — local production build check
- Data is stored in the browser under the versioned `engineer-os:v2` localStorage key.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- React + Vite + TypeScript
- Tailwind CSS with local UI primitives
- Wouter routing, lucide-react icons, and Recharts-ready frontend dependencies
- No login, database, paid backend, or mandatory external service

## Where things live

- `artifacts/engineer-os/src/App.tsx` — app shell, navigation, route pages, and local interactions
- `artifacts/engineer-os/src/lib/os-store.ts` — versioned demo data, persistence, and attendance math
- `artifacts/engineer-os/src/index.css` — logo-derived dark theme and responsive visual tokens
- `artifacts/engineer-os/public/assets/engineer-os-logo.png` — supplied brand asset

## Architecture decisions

- Keep the MVP local-first so attendance and planning remain usable offline after load.
- Store user-owned data as one versioned snapshot to make export/import and future migrations straightforward.
- Calculate overall attendance from aggregate present/conducted counts, not an average of subject percentages.
- Keep AI explicitly graceful: local fallback text is never presented as model output.

## Product

The app includes a command-center dashboard plus dedicated surfaces for attendance, timetable, academics, growth, DSA, AI/ML, projects, goals, career, GitHub, analytics, agents, Guru AI, and settings. Demo data is clearly labeled, editable, exportable, and resettable.

## User preferences

- Use the supplied Engineer OS logo and keep the product dark-first, premium, technical, and recruiter-ready.

## Gotchas

- Vite build checks need `PORT` and `BASE_PATH`; the managed artifact workflow supplies them automatically.
- If the seed schema or demo model changes, bump the local storage version so existing browser sessions do not keep stale demo data.

## Pointers

- See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details
