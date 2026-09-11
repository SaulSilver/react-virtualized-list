# Agent Instructions

This repository is a single publishable React library package. Keep changes aligned with this layout:

- `src/` contains production library code only.
- `tests/` contains unit tests, component tests, and benchmarks.
- `tests/bench/` is for performance stress tests only.
- `dist/` is generated output and must not be edited by hand.

## Primary goals

- Preserve a clean package boundary for npm publishing.
- Keep the public API small and intentional.
- Prefer minimal, focused changes over broad refactors.
- Validate behavioral changes with tests, and performance changes with benchmarks.

## Source architecture

- Treat `src/index.ts` as the only public entrypoint.
- Keep reusable implementation details in `src/` and avoid exporting internals directly.
- Keep the current fixed-height virtualization model unless the user explicitly asks to expand the API.
- If new features are added, update the public types in `src/types.ts` and expose them only from `src/index.ts`.

## Testing and benchmarking

- Place new unit or component tests in `tests/`.
- Place new performance cases in `tests/bench/`.
- Do not put new test files under `src/`.
- Use `npm test` for unit and component coverage.
- Use `npm run bench` for stress and performance validation.
- Use `npm run typecheck` for TypeScript validation.
- Use `npm run build` before release-sensitive changes.

## Editing rules

- Do not edit `dist/` files directly.
- Do not add a monorepo layout, demo app, or examples package unless requested.
- Keep the dependency surface small; React should remain a peer dependency.
- Avoid introducing extra runtime dependencies unless they clearly solve a real need.
- Prefer concise, readable code over clever abstractions.

## When modifying behavior

- Update or add tests for the touched behavior.
- Add or update benchmark coverage only when performance-sensitive code changes.
- Keep README examples and package metadata in sync with any public API change.
- Re-run the narrowest useful validation first, then broader checks if needed.