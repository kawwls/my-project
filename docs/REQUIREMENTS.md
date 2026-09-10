# Requirements

## Status
APPROVED_V1.0

## Product
Personal Finance Tracker

## Product Goal
Provide a simple personal finance web application where each user can securely record income and expenses, review transaction history, and understand monthly cash flow across devices.

## Product Scope
- Personal finance tracking for one person per user account.
- Each authenticated user owns and can access only their own finance data.
- The MVP records income and expense transactions, organizes them by category, and summarizes the results.
- Currency for MVP is Thai Baht (THB).

## Functional Requirements

### REQ-001 — Account Registration
The system must allow a new user to create an account using an email address and an approved authentication method.

Acceptance criteria:
- A valid new account can be created.
- Duplicate account identifiers are rejected.
- Raw passwords must never be stored by application code.

### REQ-002 — Authentication
The system must allow a registered user to sign in and sign out.

Acceptance criteria:
- Valid credentials create an authenticated session.
- Invalid credentials do not grant access.
- Signing out ends the active session.

### REQ-003 — User Data Isolation
A user must never be able to read, create, update, or delete another user's categories or transactions.

Acceptance criteria:
- Every protected finance operation is scoped to the authenticated user.
- Requests for another user's data are denied or return no accessible record.

### REQ-004 — Create Transaction
An authenticated user must be able to create an income or expense transaction.

Required transaction fields:
- type: `INCOME` or `EXPENSE`
- amount
- transaction date
- category

Optional fields:
- note

Acceptance criteria:
- Amount must be greater than zero.
- A valid category is required.
- A saved transaction persists after refresh and after signing in on another supported device.

### REQ-005 — Edit Transaction
An authenticated user must be able to edit their own transaction.

Acceptance criteria:
- The same validation rules used for transaction creation apply to edits.
- Updated values are reflected in history, dashboard totals, and monthly summaries.

### REQ-006 — Delete Transaction
An authenticated user must be able to delete their own transaction.

Acceptance criteria:
- Deleted transactions no longer appear in transaction history.
- Dashboard and summaries recalculate from the remaining transactions.

### REQ-007 — Transaction Types
The system must support exactly two transaction types in MVP: `INCOME` and `EXPENSE`.

Acceptance criteria:
- Transactions cannot use any other type.
- Amount values remain positive; type determines whether a transaction contributes to income or expense totals.

### REQ-008 — Categories
The system must provide useful default categories and allow a user to create personal categories.

Default expense categories should include:
- Food
- Transport
- Shopping
- Education
- Entertainment
- Bills
- Health
- Other

Default income categories should include:
- Salary
- Family Support
- Side Income
- Other Income

Acceptance criteria:
- A category has one type: `INCOME` or `EXPENSE`.
- User-created categories belong only to that user.

### REQ-009 — Category Type Validation
A transaction may use only a category whose type matches the transaction type.

Acceptance criteria:
- `INCOME` cannot use an `EXPENSE` category.
- `EXPENSE` cannot use an `INCOME` category.
- Invalid combinations are rejected before persistence.

### REQ-010 — Transaction History
The system must provide a transaction history for the authenticated user.

Acceptance criteria:
- History shows transaction date, type, amount, category, and note when present.
- Users can access edit and delete actions for their own records.

### REQ-011 — Transaction Filtering
The user must be able to filter transaction history by useful finance dimensions.

MVP filters:
- date or date range
- month
- transaction type
- category

Acceptance criteria:
- Filters return only matching transactions owned by the signed-in user.
- Filters can be cleared to restore the normal history view.

### REQ-012 — Dashboard
The dashboard must summarize the selected month, defaulting to the current month.

It must show at minimum:
- total income
- total expense
- net cash flow
- highest-spending expense category when expense data exists
- recent transactions

Acceptance criteria:
- `net cash flow = total income - total expense`.
- Values update after transaction create, edit, or delete operations.
- Empty states are shown when no data exists.

### REQ-013 — Monthly Summary
The system must provide a monthly summary of the authenticated user's finance data.

Acceptance criteria:
- The user can view income, expense, and net cash flow for a selected month.
- Summary values are calculated from persisted transactions.

### REQ-014 — Charts
The MVP must provide simple visual summaries.

Required visualizations:
- expense distribution by category
- income versus expense for the selected month

Acceptance criteria:
- Charts use the same underlying transaction data as numeric summaries.
- Charts handle empty datasets without errors.

### REQ-015 — Financial Source of Truth
Persisted transactions are the source of truth for financial totals.

Acceptance criteria:
- Dashboard and summary totals are derived from transactions.
- The application must not maintain a manually editable duplicate balance that can drift from transaction data.

### REQ-016 — Currency
The MVP uses Thai Baht (`THB`) as the single application currency.

Acceptance criteria:
- Money is displayed consistently as THB.
- Multi-currency conversion is not part of MVP.

### REQ-017 — Cross-Device Persistence
A user's persisted finance data must remain available when the same account signs in from another supported browser or device.

Acceptance criteria:
- Finance data is stored in a server-side persistent database rather than only in local browser storage.

### REQ-018 — Responsive User Interface
Core workflows must be usable on both desktop and mobile-sized screens.

Core workflows:
- register/sign in
- dashboard
- add transaction
- transaction history
- monthly summary

Acceptance criteria:
- No core action requires desktop-only interaction.
- Forms and primary actions remain usable at common mobile widths.

### REQ-019 — Form Validation and Error Handling
The system must provide clear validation and recoverable error states.

Acceptance criteria:
- Invalid required fields are identified before or during submission.
- Failed saves do not silently appear successful.
- Loading, empty, and error states are represented for primary data views.

### REQ-020 — Basic Accessibility
Core forms and actions must be keyboard-usable and have understandable text labels.

Acceptance criteria:
- Form controls have accessible labels.
- Primary actions are reachable without requiring pointer-only interaction.

## Business Rules
- BR-001: Every transaction belongs to exactly one authenticated user.
- BR-002: Every personal category belongs to exactly one authenticated user.
- BR-003: Transaction amount must be greater than zero.
- BR-004: Transaction type is `INCOME` or `EXPENSE` only.
- BR-005: Transaction category type must match transaction type.
- BR-006: Transaction note is optional.
- BR-007: Editing or deleting a transaction must affect all derived summaries consistently.
- BR-008: Financial totals are derived from persisted transactions.
- BR-009: "Net cash flow" means recorded income minus recorded expense. It is not claimed to be the user's actual bank-account balance.

## MVP Out of Scope
The following are explicitly excluded from v1 unless the Product Owner and Manager approve a later requirement change:
- bank account integrations
- OCR or receipt/slip scanning
- AI financial analysis
- budgets and spending limits
- savings goals
- debt or installment management
- investments or cryptocurrency tracking
- multiple currencies
- shared wallets, family groups, or multi-user finance spaces
- transfers between multiple financial accounts/wallets
- business accounting features

## Quality Priorities
In order of importance:
1. Correct user data isolation.
2. Correct financial calculations.
3. Reliable persistence.
4. Fast and simple transaction entry.
5. Clear mobile and desktop usability.
6. Maintainable implementation that follows approved architecture.
