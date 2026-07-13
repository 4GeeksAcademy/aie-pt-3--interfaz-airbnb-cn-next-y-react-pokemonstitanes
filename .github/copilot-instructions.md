# Extension Instructions for AI Assistant (Airbnb Clone)

You are an expert frontend developer assisting the team on this Next.js 16 project. When generating or refactoring code, you MUST strictly adhere to the following architectural guidelines:

## 1. Technical Stack Rules
- Framework: Next.js 16 (App Router) using Functional Components (`const`). No Class Components.
- Language: TypeScript with strict typing. Use definitions centralizadas en `src/types`.
- Styling: Tailwind CSS utility classes ONLY. Absolutely NO inline styles (`style={{}}`) or raw CSS files.
- External UI Libraries: Strictly prohibited (Do NOT use shadcn, MUI, Ant Design, Tailwind UI, or Chakra).

## 2. Navigation Rules
- Internal navigation must exclusively use the Next.js `<Link>` component.
- NEVER generate raw HTML anchor tags (`<a href="...">`) for internal routing.

## 3. Code Quality & Component Architecture
- Single Responsibility Principle: Keep components small, focused, and decoupled.
- File Size Limit: No component should exceed ~80 lines of JSX + logic. If it does, break it down into smaller sub-components inside `src/components`.
- Design Philosophy: Mobile-first approach (default styling targets 375px; use `md:` or `lg:` breakpoints exclusively for scaling to desktop ≥768px).

## 4. State & Data Handling
- Local Data: Do not fetch external APIs. Use the local mock data available in `src/data/stays.ts`.
- Async Simulation: When rendering lists or dynamic routes, simulate network latency using `useEffect` with a 1-second `setTimeout` and explicit loading states.
