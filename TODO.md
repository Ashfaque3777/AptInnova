# Product Pagination Task - Progress Tracker

## Task
Add a navigation bar at the bottom of each product page (InnoVethic, A(i)MPACT Lab, ainsteins) to help users move between products: "← Previous product" on the left, "Next product →" on the right.

## Steps

### 1. Create reusable `ProductPagination` component ✅
- **File**: `src/components/sections/products/ProductPagination.jsx`
- Created a reusable component accepting `prev` and `next` props (each `{ name, path }` or `null`).
- Renders:
  - Left side: "← Previous product" + product name (links to `prev.path`)
  - Right side: "Next product →" + product name (links to `next.path`)
  - Uses `Link` from `react-router-dom`, `PageContainer`, and `useScrollReveal` for consistent animation.

### 2. Add pagination styles ✅
- **File**: `src/styles/products.css`
- Added `.product-pagination` styles:
  - Section with `border-top`, `background: var(--color-surface)`.
  - Flex layout with `justify-content: space-between`.
  - Card-style links with hover lift, border highlight, and arrow animations.
  - Responsive stacked layout for mobile (`@media max-width: 560px`).

### 3. Add `ProductPagination` to each product page ✅
- **InnoVethic** (`src/pages/InnoVethic.jsx`): `next` → A(i)MPACT Lab (first product, no previous)
- **A(i)MPACT Lab** (`src/pages/AimpactLab.jsx`): `prev` → InnoVethic, `next` → ainsteins (middle product, both)
- **ainsteins** (`src/pages/Ainsteins.jsx`): `prev` → A(i)MPACT Lab (last product, no next)

### 4. Verify ✅
- User confirmed everything is working correctly.

## Product Order (from `src/components/sections/home/ProductsSection.jsx`)
1. InnoVethic → `/products/innovethic/`
2. A(i)MPACT Lab → `/products/aimpact-lab/`
3. ainsteins → `/products/ainsteins/`

## Notes
- User chose **no wrap-around**: first/last product pages show only one link.

