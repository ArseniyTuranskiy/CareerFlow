# CareerFlow

CareerFlow is a career management workspace for tracking job applications,
professional goals, tasks, skills, and progress in one place.

## Project status

**Current phase:** feature cards complete; “How it works” is next.

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
- Responsive dashboard preview with progress and weekly-focus data
- Responsive feature grid generated from structured product data
- Type checking, production build, and zero known npm vulnerabilities

### Next block

“How it works” process section with four clear product steps.

### Current implementation

The screenshot below shows the actual Day 5 application state, not the target UI
concept.

![CareerFlow Day 5 feature cards](docs/progress/day-05-features-section.png)

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
