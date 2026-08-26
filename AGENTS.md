# Repository Guidelines

## Project Structure & Module Organization

This repository is a Next.js App Router portfolio. Route files and global styles live in `app/`, reusable React components live in `components/`, and static assets live in `public/`. Keep focused unit tests near the modules they exercise when a test framework is introduced.

## Build, Test, and Development Commands

Use `npm install` for setup, `npm run dev` for local development, `npm run typecheck` for TypeScript validation, `npm run lint` for linting, and `npm run build` for a production build. Use `npm start` to serve the completed production build.

## Coding Style & Naming Conventions

Follow the standard formatting conventions of the implementation language and preserve the surrounding style when editing existing files. Use descriptive names, keep functions focused on one responsibility, and prefer straightforward control flow. Add and document formatter and linter configuration when the first implementation language is selected, then apply those tools consistently.

## Testing Guidelines

No test framework or coverage target has been established. New behavior should include readable tests that cover normal operation and meaningful edge cases. Name tests after the feature or behavior, using patterns such as `feature.test.*` only when compatible with the chosen framework; otherwise follow that framework's established convention. Document how to run tests when the framework is introduced.

## Commit & Pull Request Guidelines

There is no commit history from which to infer established conventions. Use concise, imperative commit subjects that describe the change. Pull requests should explain the purpose and scope, include validation notes, link relevant issues when applicable, and provide screenshots for visual changes.

## Security & Configuration

Never commit credentials, tokens, private keys, or other secrets. Keep sensitive values in environment variables or an approved secret store. Example environment files must contain obvious placeholders rather than real values, and new configuration requirements should be documented alongside the tooling that consumes them.

<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->
