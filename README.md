# CareerFlow

CareerFlow is a career management workspace for tracking job applications,
professional goals, tasks, skills, and progress in one place.

## Project status

**Current phase:** hero content complete; dashboard preview is next.

The Next.js application is running with strict TypeScript settings, shared design
tokens, and a minimal homepage. Development is split into small, reviewable blocks
so every feature can be understood before the next one is added.

### Implemented

- Product outline and initial landing/dashboard wireframes
- High-fidelity landing-page concept image
- Next.js App Router foundation with React and TypeScript
- Global color tokens and base page styles
- Responsive landing-page header and primary navigation
- Accessible mobile burger menu with keyboard support
- Responsive hero messaging and call-to-action controls
- Type checking, production build, and zero known npm vulnerabilities

### Next block

Hero dashboard preview that visualizes weekly career progress.

### Current implementation

The screenshot below shows the actual Day 3 application state, not the target UI
concept.

![CareerFlow Day 3 hero](docs/progress/day-03-hero.png)

## Planned stack

- Next.js and TypeScript
- Tailwind CSS
- PostgreSQL with Prisma
- Authentication
- Automated tests and GitHub Actions

## Documentation

- [Product outline](docs/PRODUCT.md)
- [Initial wireframe](docs/WIREFRAME.md)
- [Project structure](docs/ARCHITECTURE.md)
- [Development workflow](docs/WORKFLOW.md)

## Local development

```bash
npm install
npm run dev
```

Open `http://127.0.0.1:3000` in a browser.

Before completing a development block, run:

```bash
npm run typecheck
npm run build
```
