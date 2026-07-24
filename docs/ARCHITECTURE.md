# CareerFlow project structure

This document explains the responsibility of each project file. It should be
updated whenever the structure or development workflow changes.

## Application files

### `app/layout.tsx`

The root layout wraps every page in the application. It currently:

- creates the shared `<html>` and `<body>` elements;
- loads the global stylesheet once;
- defines the default browser title and description;
- renders the active page through the `children` prop.

Shared UI such as global providers may be added here later. Page-specific content
should not be placed in the root layout.

### `app/page.tsx`

The homepage for the `/` route. It composes the shared site header, hero, feature
overview, and “How it works” process as separate components.

### `app/globals.css`

Global styles shared by the whole application. It currently contains:

- design tokens stored as CSS custom properties;
- the global `box-sizing` rule;
- body background, text, and font defaults;
- smooth section-anchor navigation;
- a reduced-motion fallback for users who disable animation.

Reusable component styles will stay close to their components once the component
structure is introduced.

## Shared components

### `components/site-footer/site-footer.tsx`

The shared landing-page footer. Product anchors are stored in one local array,
while external project resources use a separate array and open safely in a new
tab. The footer also identifies the public project owner and current technology
stack.

### `components/site-footer/site-footer.module.css`

Local styles for the three-column footer grid, link states, bottom metadata bar,
and the two responsive layouts used on tablet and mobile.

### `components/final-cta/final-cta.tsx`

The landing page's closing call to action. Its `start` anchor completes the
navigation path used by the header and hero buttons, while the secondary action
returns the user to the feature overview.

### `components/final-cta/final-cta.module.css`

Local styles for the green CTA panel, decorative gradient, action states, and the
stacked mobile button layout.

### `components/how-it-works-section/how-it-works-section.tsx`

The four-step process that explains how a user moves from choosing a direction to
reviewing measurable progress. Step content lives in one array and is rendered as
an ordered list so its sequence remains meaningful without the visual styling.

### `components/how-it-works-section/how-it-works-section.module.css`

Local styles for the desktop split layout, numbered process rows, sticky heading,
and the single-column tablet and mobile layouts.

### `components/features-section/features-section.tsx`

The landing-page overview of the four core CareerFlow workflows. Feature content
is stored in one array and mapped into semantic article cards, keeping repeated
markup consistent and making future content changes small.

### `components/features-section/features-section.module.css`

Local styles for the section heading, white feature surfaces, icon treatments,
hover feedback, and the responsive `4 → 2 → 1` column grid.

### `components/dashboard-preview/dashboard-preview.tsx`

A static visual preview of the future authenticated workspace. It contains a
navigation rail, weekly progress ring, application and goal metrics, and a focused
task list. The data is intentionally local and read-only until the dashboard data
model is implemented in a separate feature.

### `components/dashboard-preview/dashboard-preview.module.css`

Local presentation rules for the white dashboard surface, metric grid, CSS conic
progress ring, task rows, and responsive mobile layout. At smaller widths the rail
is simplified and the progress metric spans both columns.

### `components/hero-section/hero-section.tsx`

The landing-page hero composition. It combines the product message and actions
with `DashboardPreview`. The two heading spans create an intentional desktop line
break while still allowing natural wraps on narrow screens.

### `components/hero-section/hero-section.module.css`

Local styles for the two-column hero grid, responsive typography, CTA states, and
mobile stacking. Below 68rem the dashboard preview moves under the hero content.

### `components/site-header/site-header.tsx`

The landing-page header component. It owns the CareerFlow wordmark, primary
navigation data, login action, and start action. Navigation items are rendered
from an array so labels and targets can be maintained in one place. On smaller
screens it also owns the mobile-menu state. The menu can be closed by selecting a
link, pressing the toggle again, or pressing `Escape`; ARIA attributes expose its
state to assistive technology.

### `components/site-header/site-header.module.css`

Styles that belong only to the header. The module defines the desktop grid,
interactive hover and keyboard-focus states, primary action styling, and the
smaller mobile layout. Below 48rem the desktop actions are replaced by a burger
button and an expandable navigation panel. CSS Modules keep these class names
local to the component.

## Configuration files

### `package.json`

Defines the project name, npm scripts, and dependency versions.

- `npm run dev` starts the local development server.
- `npm run build` creates and validates a production build.
- `npm run start` serves an existing production build.
- `npm run typecheck` checks TypeScript without generating files.

The `postcss` override keeps the transitive dependency on a patched version.

### `package-lock.json`

Records the exact dependency tree installed by npm. This makes local development,
CI, and deployment use reproducible package versions. It is generated by npm and
should not be edited manually.

### `tsconfig.json`

Configures TypeScript. Strict mode is enabled so unsafe values and incorrect prop
types are caught before runtime. Next.js also uses this file to generate route and
build types. The `@/*` alias provides clear imports from the project root.

### `.gitignore`

Prevents generated or machine-specific files from entering Git, including
`node_modules`, `.next`, logs, environment files, and TypeScript caches.

## Product documentation

### `docs/PRODUCT.md`

Defines the product purpose, intended user, planned pages, first release, and the
ordered development blocks.

### `docs/WIREFRAME.md`

Contains the text wireframes and visual rules for the landing page and dashboard.
It describes layout intent without tying it to implementation details.

### `docs/mockups/careerflow-landing-concept.png`

The high-fidelity design reference generated before implementation. It guides the
visual direction but is not a pixel-perfect contract; accessibility and responsive
behavior take priority during implementation.

### `docs/progress/`

Contains screenshots of the application as it actually existed at the end of a
development block. These images are implementation evidence and must not be
confused with the target designs stored in `docs/mockups/`.

### `docs/WORKFLOW.md`

Defines the feature-branch naming and review process used to keep `main` stable.

## Generated directories

### `node_modules/`

Installed third-party packages. Generated by `npm install` and excluded from Git.

### `.next/`

Development and production output generated by Next.js. It can be recreated at any
time and is excluded from Git.
