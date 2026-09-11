# Repository Rules

These are the operating rules for this repo.

## Architecture rules

1. Keep the project as a single npm package.
2. Keep production code in `src/`.
3. Keep tests in `tests/` and benchmarks in `tests/bench/`.
4. Keep `dist/` generated only.
5. Keep `src/index.ts` as the public export surface.

## Code rules

1. Preserve the fixed-height virtualization approach unless the user asks for a different model.
2. Keep `VirtualList` as the component wrapper and `useVirtualizer` as the core calculation logic.
3. Keep TypeScript strict and type-driven.
4. Avoid adding unnecessary abstractions, classes, or layers.
5. Prefer small, reviewable edits that match the existing style.

## Dependency rules

1. Keep React as a `peerDependency`.
2. Do not add production dependencies without a clear reason.
3. Use dev dependencies only for build, test, or benchmark tooling.
4. Avoid package additions that complicate publishing or consumer installs.

## Validation rules

1. Run `npm test` after test-related changes.
2. Run `npm run bench` after performance-related changes.
3. Run `npm run typecheck` after TypeScript or API changes.
4. Run `npm run build` before release or publish changes.
5. Do not rely on `dist/` as the source of truth.

## Documentation rules

1. Update `README.md` when the public API or benchmark expectations change.
2. Keep package metadata in `package.json` aligned with the published surface.
3. Keep benchmark numbers labeled as local results and note that they vary by machine.

## AI behavior rules

1. Make the smallest change that solves the task.
2. Do not remove user changes unless explicitly asked.
3. Do not convert the repo into a monorepo unless the project clearly needs it.
4. Do not create example apps unless requested.
5. Prefer repository-specific guidance in this file over generic assumptions.