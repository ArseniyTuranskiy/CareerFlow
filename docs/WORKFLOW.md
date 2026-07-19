# Development workflow

CareerFlow is developed in small, reviewable feature branches. The `main` branch
represents the latest approved state of the project.

## Branch naming

- `feature/<name>` for new product functionality.
- `fix/<name>` for corrections to existing functionality.
- `docs/<name>` for documentation-only changes.

Branch names describe the product element directly and do not include tool or
assistant names. Examples: `feature/hero-section` and `fix/mobile-navigation`.

## Feature process

1. Update local `main` and create one focused branch.
2. Implement one reviewable product block.
3. Update README, product status, architecture notes, and real screenshots.
4. Run `npm run typecheck` and `npm run build`.
5. Commit and push the feature branch.
6. Review the code and rendered result before merging.
7. Merge into `main` only after approval.

Generated concepts must be labeled as target designs. Progress posts and README
status sections use screenshots of the implemented application.
