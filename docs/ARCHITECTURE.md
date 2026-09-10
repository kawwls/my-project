# Architecture

## Status
APPROVED_V1.0

## Product
Personal Finance Tracker

## Architecture Goal
Build a simple, secure, maintainable personal finance web application that supports authenticated users, persistent cross-device data, correct financial calculations, and responsive desktop/mobile usage without introducing unnecessary backend or infrastructure complexity.

## Approved Architecture

```text
Browser
  |
  v
Next.js Web Application
(App Router + TypeScript)
  |
  | authenticated server-side data access
  v
Supabase
  |- Auth
  |- PostgreSQL
  `- Row Level Security (RLS)

Deployment target:
Vercel (Next.js) + Supabase Cloud (Auth/PostgreSQL)
```

## Technology Stack

### Application
- Next.js using the App Router.
- TypeScript with strict type checking.
- React through the Next.js-supported version.
- npm as the package manager.
- Stable dependency versions selected when the project is initialized and pinned through `package-lock.json`.

### UI
- Tailwind CSS for application styling.
- Responsive layout is required from the beginning.
- Server Components are the default.
- Client Components are used only where browser interaction is required, such as interactive forms and charts.
- MVP user-facing language is Thai; source code, database identifiers, and technical documentation remain English.

### Authentication
- Supabase Auth.
- MVP authentication method: email + password.
- Use the current official Supabase Next.js SSR integration with cookie-based sessions.
- Application code must never store or process raw passwords beyond submitting credentials to Supabase Auth.
- Authenticated routes must verify the session on the server.

### Database
- Supabase-hosted PostgreSQL.
- SQL migrations committed to the repository are the source of truth for database structure.
- No ORM is approved for MVP.
- Application database access uses the Supabase JavaScript client and generated database types.
- Row Level Security is mandatory for every table containing user-owned finance data.

### Validation
- Zod for application-boundary input validation.
- PostgreSQL constraints and RLS remain the final data-integrity and authorization boundary.
- Client-side validation may improve UX but must not be the only validation layer.

### Charts
- Recharts for MVP visualizations.
- Charts consume derived summary data and must not maintain an independent financial data source.

### Testing
- Vitest for unit tests.
- React Testing Library for component behavior where appropriate.
- Playwright for critical end-to-end flows.
- Database/RLS tests must verify user isolation and required database constraints.

### Deployment
- Vercel is the target host for the Next.js application.
- Supabase Cloud is the target managed Auth/PostgreSQL service.
- Secrets are supplied through environment variables and must never be committed.

## Why This Architecture Was Selected

Three practical directions were considered:

### Option A — Next.js + Supabase
Selected.

Advantages:
- One web application can provide UI, server rendering, authenticated actions, and routing.
- Supabase provides managed PostgreSQL and Auth without a custom authentication server.
- PostgreSQL fits transaction history, filtering, grouping, monthly summaries, and future reporting well.
- RLS provides a database-level user-isolation boundary.
- The architecture stays small enough for a focused MVP while preserving a path to future features.

### Option B — Next.js + Custom API Server + PostgreSQL
Not selected for MVP.

Reason:
- Adds a separate backend service, authentication implementation concerns, deployment surface, and more code before the product requires them.

### Option C — React SPA + Firebase
Not selected for MVP.

Reason:
- The product is naturally relational and reporting-oriented. PostgreSQL gives a clearer model for transaction/category relationships, constraints, aggregation, and future finance queries.

## Application Boundaries

### Public routes
- `/`
- `/auth/sign-in`
- `/auth/sign-up`

### Protected routes
- `/dashboard`
- `/transactions`
- `/transactions/new`
- `/categories`
- `/summary`

Unauthenticated access to protected routes must redirect to sign-in or otherwise deny access.

## Data Access Pattern

### Reads
- Prefer Server Components/server-side query modules for initial protected data loading.
- Queries must run in the authenticated user's session context.
- Every finance query must be scoped to the authenticated user even when RLS also protects the table.

### Mutations
- Use Next.js Server Actions for internal MVP create/update/delete workflows.
- Every Server Action must validate input, resolve the authenticated user, and operate using that user's Supabase session.
- Do not introduce a separate public REST API for MVP.
- A future public API requires explicit Manager approval.

### Elevated credentials
- Supabase secret/service-role credentials must never be exposed to the browser.
- Normal user-facing finance operations must not use service-role access to bypass RLS.
- Elevated access is reserved only for explicitly approved administrative/migration workflows.

## Database Model

### PostgreSQL enum: `transaction_type`
Allowed values:
- `INCOME`
- `EXPENSE`

### `categories`
Each category is owned by exactly one authenticated user, including seeded default categories.

Required conceptual fields:
- `id` — UUID primary key
- `user_id` — UUID, references `auth.users(id)`, not null
- `name` — text, not null
- `type` — `transaction_type`, not null
- `is_default` — boolean, not null, default false
- `created_at` — timestamptz, not null

Required integrity:
- category owner must exist
- category type must be valid
- category identity must support a composite reference from transactions using `id`, `user_id`, and `type`
- duplicate seeded/default categories for the same user must be prevented by an idempotent bootstrap strategy

### `transactions`
Required conceptual fields:
- `id` — UUID primary key
- `user_id` — UUID, references `auth.users(id)`, not null
- `category_id` — UUID, not null
- `type` — `transaction_type`, not null
- `amount` — exact PostgreSQL numeric value with two decimal places, not null
- `transaction_date` — PostgreSQL `date`, not null
- `note` — text, nullable
- `created_at` — timestamptz, not null
- `updated_at` — timestamptz, not null

Required integrity:
- `amount > 0`
- transaction owner must exist
- transaction category must belong to the same user
- transaction category type must equal transaction type
- use a composite foreign-key strategy so ownership/type consistency is enforced at database level, not only in UI code

## Financial Calculation Rules

- PostgreSQL exact numeric values are used for persisted money.
- Do not persist money using floating-point database types.
- Dashboard and monthly totals are derived from transactions.
- Source financial aggregation must preserve exact decimal behavior.
- `net_cash_flow = total_income - total_expense`.
- `transaction_date` is a date rather than a timestamp so normal expense dates do not move between calendar days because of timezone conversion.
- `created_at` and `updated_at` use timezone-aware timestamps for audit/order metadata.

## Default Category Strategy

Default categories are materialized as per-user category rows rather than globally shared editable rows.

On the user's first authenticated application bootstrap, the server must idempotently ensure the required default categories exist for that user.

Default expense categories:
- Food
- Transport
- Shopping
- Education
- Entertainment
- Bills
- Health
- Other

Default income categories:
- Salary
- Family Support
- Side Income
- Other Income

User-facing labels may be displayed in Thai while stable technical values remain suitable for application logic.

## Authorization and RLS

RLS must be enabled on `categories` and `transactions` before user-facing data access is considered complete.

Minimum policy intent for authenticated users:
- SELECT only rows where `user_id = auth.uid()`
- INSERT only rows where `user_id = auth.uid()`
- UPDATE only rows where `user_id = auth.uid()` and the resulting row remains owned by the user
- DELETE only rows where `user_id = auth.uid()`

Defense in depth:
- route/session check
- Server Action authorization check
- query scoped to authenticated user
- RLS policy
- database constraints/composite foreign keys

RLS is mandatory even if application code already filters by user ID.

## Application Structure

Target source organization after initialization:

```text
src/
  app/
    (public)/
    (auth)/
    (app)/
  components/
  features/
    auth/
    categories/
    transactions/
    dashboard/
    summary/
  lib/
    supabase/
    validation/
    finance/
  types/

tests/
  unit/
  integration/
  e2e/

supabase/
  migrations/
```

Exact local file organization may vary slightly where required by current Next.js conventions, but feature boundaries and architecture responsibilities must remain intact.

## Primary UX Flow

```text
Sign up / Sign in
      |
      v
Authenticated bootstrap
(ensure default categories)
      |
      v
Dashboard
  |        |          |
  v        v          v
Add       History    Monthly Summary
Transaction
  |
  v
Validate -> Persist -> Revalidate affected views
```

The Add Transaction action is a primary workflow and must remain easy to reach on both mobile and desktop.

## Error and State Handling

Primary data views must explicitly support:
- loading state
- empty state
- validation error state
- persistence/server error state
- successful completion state where feedback is useful

A failed mutation must never be presented as successful.

## Security Constraints

- Never commit `.env*` secret files.
- Track an `.env.example` containing variable names only.
- Do not expose Supabase secret/service-role keys to client code.
- Do not trust a client-supplied `user_id`; derive ownership from the authenticated session.
- Do not disable RLS to make development easier.
- Do not weaken authorization tests merely to make them pass.

## Performance Scope

MVP does not require caching infrastructure, queues, background workers, Redis, microservices, or a separate analytics database.

Use normal PostgreSQL indexes for user/date/category filtering. Initial index intent includes:
- transactions by `(user_id, transaction_date)`
- transactions by `(user_id, type)` where useful
- categories by `(user_id, type)`

Additional indexes require evidence from query patterns or performance measurements.

## Dependency Policy

Approved dependency categories are limited to what is needed for:
- Next.js/React/TypeScript
- Supabase client and official SSR integration
- Tailwind CSS
- Zod
- Recharts
- Vitest/testing libraries
- Playwright
- linting/type checking

Adding an ORM, state-management framework, alternate auth provider, alternate database client, backend framework, or major infrastructure dependency requires Manager approval.

## Architecture Change Rule

This architecture is approved for MVP v1.

Antigravity may make normal local implementation decisions that do not change requirements, public behavior, data contracts, security boundaries, or the approved stack.

Any change to authentication provider, database technology/schema strategy, RLS model, API boundary, framework, deployment architecture, or core dependency direction requires explicit Manager approval before implementation.
