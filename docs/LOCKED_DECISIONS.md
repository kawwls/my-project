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
