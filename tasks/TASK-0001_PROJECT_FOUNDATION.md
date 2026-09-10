# TASK-0001 — Project Foundation

## Goal
Create the approved Next.js/TypeScript application foundation for the Personal Finance Tracker so future tasks can implement authentication, database schema, transactions, dashboard, and summaries on a stable, testable base.

This task is foundation-only. It must not implement product business behavior yet.

## Branch
`feat/task-0001-project-foundation`

Before modifying files:
1. sync local `main` with `origin/main`;
2. create or switch to the exact task branch above from the latest `main`;
3. verify the current branch before implementation.

## Context
Read and respect before implementation:
- `.agents/rules/executor-governance.md`
- `docs/REQUIREMENTS.md`
- `docs/ARCHITECTURE.md`
- `docs/LOCKED_DECISIONS.md`
- `docs/PROJECT_STATE.md`
- this task file

Approved stack relevant to this task:
- Next.js App Router
- TypeScript with strict type checking
- npm
- Tailwind CSS
- Supabase JavaScript client and official Next.js SSR integration
- Zod
- Recharts
- Vitest
- React Testing Library
- Playwright

Initial stable package versions compatible with each other may be selected during this foundation task. The resulting dependency versions must be pinned by `package-lock.json`. Do not add technologies outside the approved architecture.

## In Scope
- Initialize the Next.js application in the repository root using the App Router and `src/` directory.
- Configure TypeScript strict mode.
- Configure Tailwind CSS using the conventions of the selected stable Next.js/Tailwind versions.
- Install only the approved runtime and test/tooling dependencies needed by the architecture.
- Create the minimal application shell and a simple Thai-language landing page proving the application renders.
- Create a clean source structure consistent with `docs/ARCHITECTURE.md` where useful for an empty foundation.
- Configure linting, type checking, unit testing, and Playwright test discovery.
- Add at least one small automated smoke/unit test that proves the test runner is operational.
- Add `.gitignore` appropriate for Node.js/Next.js, local environment files, build artifacts, coverage, common editor/OS files, and test artifacts.
- Add `.env.example` containing variable names only for the future Supabase integration:
  - `NEXT_PUBLIC_SUPABASE_URL=`
  - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=`
- Preserve all existing governance, requirements, architecture, task, and report files.
- Remove `src/README.md` only if required because `src/` becomes the real application source directory.

## Out of Scope
- Do not create a Supabase project.
- Do not add real Supabase credentials or secrets.
- Do not implement Supabase client initialization beyond what is strictly necessary to satisfy build configuration; preferred behavior is to leave actual connection setup for a later task.
- Do not implement registration, sign-in, sign-out, sessions, route protection, or authentication behavior.
- Do not create database tables, SQL migrations, RLS policies, functions, triggers, or seed data.
- Do not implement categories or default-category bootstrap logic.
- Do not implement transaction CRUD.
- Do not implement dashboard, financial calculations, monthly summaries, filtering, or charts.
- Do not deploy to Vercel or Supabase.
- Do not create CI workflows in this task.
- Do not edit Manager-owned files under `docs/`, task definitions under `tasks/`, governance rules under `.agents/`, or the PR template.
- Do not add an ORM, state-management framework, alternate UI framework, alternate auth provider, or unrelated dependency.
- Do not perform unrelated cleanup or refactoring.

## Requirements
1. The repository must become a valid Next.js App Router project that uses TypeScript and npm.
2. The application must use the `src/` directory and maintain an organization compatible with the approved architecture.
3. TypeScript strict mode must be enabled.
4. Tailwind CSS must be configured and demonstrably applied to the minimal landing page.
5. The user-facing landing page must be Thai-first and contain no fake finance data or unimplemented-product claims.
6. The foundation must include the approved package categories needed for upcoming work, without introducing unapproved framework or infrastructure choices.
7. `package-lock.json` must be committed.
8. `.gitignore` must exclude at minimum `node_modules`, Next.js build output, coverage/test artifacts, and local `.env*` files while allowing `.env.example` to remain tracked.
9. `.env.example` must contain only placeholder variable names and no credential values.
10. The repository must expose clear npm scripts for development, production build, linting, type checking, unit tests, and Playwright test invocation/listing.
11. At least one automated test must execute successfully.
12. No authentication, database schema, finance behavior, or deployment behavior may be implemented in this task.

## Expected Foundation Shape
The exact generated files may vary with current stable framework conventions, but the result should resemble:

```text
my-project/
├── .agents/
├── .github/
├── docs/
├── reports/
├── tasks/
├── public/
├── src/
│   ├── app/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   ├── features/
│   ├── lib/
│   └── types/
├── tests/
├── .env.example
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── framework/tool configuration files as required
```

Empty architectural directories do not need placeholder files unless Git tracking or a concrete configuration requires them. Do not create unnecessary empty structure merely to match the diagram.

## Package / Dependency Authority
This task explicitly authorizes installation of packages from these approved categories only:
- Next.js, React, React DOM
- TypeScript and required type packages
- Tailwind CSS and its required build integration
- `@supabase/supabase-js`
- the current official Supabase Next.js SSR package/integration
- Zod
- Recharts
- Vitest and required Vitest integration
- React Testing Library and closely required test support packages
- Playwright
- ESLint and Next.js-compatible lint support

If successful initialization requires a package outside these categories, do not install it silently. Report `BLOCKED` with the package name, reason, alternatives, and impact.

## Acceptance Criteria
- AC01: `npm install` completes successfully from the committed manifests/lockfile.
- AC02: the app starts in development mode and the root page renders without runtime error.
- AC03: the root page is visibly styled through the approved Tailwind setup and uses Thai user-facing copy.
- AC04: `npm run build` succeeds.
- AC05: `npm run lint` succeeds.
- AC06: `npm run typecheck` succeeds with TypeScript strict mode enabled.
- AC07: the configured unit test command executes and passes at least one real test.
- AC08: Playwright is installed/configured sufficiently that its test command can be discovered/listed without adding product E2E behavior yet.
- AC09: `.env.example` contains no real credentials and local `.env*` files are ignored.
- AC10: no authentication behavior, database schema, migrations, RLS, transaction logic, dashboard logic, summaries, or charts are implemented.
- AC11: Manager-owned governance/specification files are unchanged by the implementation.
- AC12: only approved dependency categories are introduced.

## Required Tests / Checks
Run and report the exact results of at least:

```text
npm install
npm run lint
npm run typecheck
npm run test:run
npm run build
npm run test:e2e -- --list
```

If the final scripts use slightly different test-script names because of valid tooling conventions, document the exact commands and explain the mapping. Do not claim any command passed unless it actually ran successfully.

Also inspect Git status/diff before completion to confirm that Manager-owned files were not modified.

## Completion
Commit and push the completed task branch.

Return the executor completion report required by `.agents/rules/executor-governance.md` with:
- TASK
- STATUS (`READY_FOR_REVIEW`, `BLOCKED`, or `TESTS_FAILED`)
- BRANCH
- COMMIT
- FILES_CHANGED
- IMPLEMENTATION
- TESTS_EXECUTED
- TEST_RESULTS
- DEVIATIONS
- DISCOVERED_ISSUES
- BLOCKERS

`READY_FOR_REVIEW` is not approval. Do not merge into `main` and do not declare the work approved, stable, production-ready, or release-ready.
