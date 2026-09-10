# Locked Decisions

## LOCK-001
GitHub main is the approved source of truth.

## LOCK-002
All implementation work must be done on a task branch.

## LOCK-003
Antigravity is the implementation executor only.

## LOCK-004
Antigravity must not independently change requirements,
architecture, business logic, or major technical decisions.

## LOCK-005
Antigravity must not merge into main.

## LOCK-006
Only the Product Owner or ChatGPT Manager may approve completed work.

## LOCK-007
The product is a personal income and expense tracking web application with user accounts and server-side persistent storage.

## LOCK-008
MVP supports exactly two transaction types: `INCOME` and `EXPENSE`.

## LOCK-009
Persisted transactions are the financial source of truth. Dashboard and summary values must be derived from transactions rather than from a separately editable balance.

## LOCK-010
MVP uses Thai Baht (`THB`) as the single currency.

## LOCK-011
Each user's finance data is private to that authenticated user. Cross-user access to transactions or personal categories is not allowed.

## LOCK-012
Transaction amounts are stored as positive values; transaction type determines whether the amount contributes to income or expense totals.

## LOCK-013
A transaction category must have the same type as the transaction: income categories for income and expense categories for expense.

## LOCK-014
MVP does not include wallets/accounts, inter-account transfers, bank integrations, OCR, AI finance analysis, shared finance spaces, multi-currency, investments, or business accounting unless the Product Owner and Manager explicitly approve a future requirement change.

## LOCK-015
The MVP application framework is Next.js App Router with TypeScript. npm is the package manager and dependency versions are pinned through `package-lock.json`.

## LOCK-016
Authentication and persistent database services are Supabase Auth and Supabase-hosted PostgreSQL. Row Level Security is mandatory for user-owned finance tables.

## LOCK-017
MVP authentication uses email and password with the current official Supabase Next.js server-side/cookie session integration. Application code must not implement its own password storage.

## LOCK-018
The MVP UI stack uses Tailwind CSS. Zod is the application-boundary validation library and Recharts is the approved chart library.

## LOCK-019
No ORM is used in MVP. Database structure is controlled through versioned SQL migrations and application access uses the Supabase client with generated database types.

## LOCK-020
Protected initial reads should use server-side Next.js data access. Internal create/update/delete workflows use Next.js Server Actions. MVP does not expose a separate public REST API.

## LOCK-021
Default categories are materialized as per-user category rows. Category ownership and transaction/category type compatibility must be enforced at database level in addition to application validation.

## LOCK-022
Persisted monetary values use an exact PostgreSQL numeric type with two decimal places, never a floating-point database type. Transaction calendar dates use PostgreSQL `date`.

## LOCK-023
Normal user-facing finance operations must use the authenticated user's database context and must not bypass RLS with Supabase service-role credentials.

## LOCK-024
The target production deployment is Vercel for the Next.js application and Supabase Cloud for Auth/PostgreSQL.

## LOCK-025
The approved testing direction is Vitest for unit tests, React Testing Library where component testing is appropriate, Playwright for critical end-to-end workflows, and database/RLS tests for user isolation and integrity constraints.

## LOCK-026
MVP user-facing interface language is Thai. Source code, database identifiers, and technical documentation use English.
