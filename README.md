# Bunon — Fashion Storefront

A frontend-only fashion e-commerce storefront built for the Oxivos Round 1 project task. "Bunon" (বুনন) means *weave* in Bengali — the brand leans into that, pairing handloom panjabis and kurtas with everyday staples.

**Live site:** _add your Vercel URL here_
**Repo:** _add your GitHub URL here_

## Stack

- **React 19 + Vite** — app shell and dev tooling
- **React Router v7** — client-side routing between all four pages
- **Tailwind CSS** — utility styling on top of a custom design token set (colors, fonts, spacing) defined in `tailwind.config.js`
- **Context API + `useReducer`** — cart state, persisted to `localStorage`
- No backend, no database — all product data lives in `src/data/products.js`

## Getting started

```bash
npm install
npm run dev       # start the dev server at http://localhost:5173
npm run build     # production build into dist/
npm run preview   # preview the production build locally
npm run lint      # oxlint
```

## Folder structure

```
src/
  components/     Reusable UI: Navbar, Footer, ProductCard, QuantityStepper,
                   RatingStars, Badge, EmptyState, skeleton loaders, Layout
  context/        CartContext (cart state + localStorage) and
                   ToastContext (add-to-cart / remove notifications)
  data/           products.js — the local dummy catalogue (12 products)
  hooks/          useProducts / useProduct — simulate an async data fetch
                   so loading states are real, not decorative
  pages/          Home, Products, ProductDetails, Cart, NotFound
```

## Pages

| Route            | Description                                                                              |
| ----------------- | ----------------------------------------------------------------------------------------- |
| `/`                | Hero, shop-by-category strip, featured products, brand story                              |
| `/products`        | Full catalogue with search (`?q=`), category filter (`?category=`), and sort (`?sort=`)   |
| `/products/:id`    | Product gallery, color/size selection, quantity, add-to-cart                              |
| `/cart`             | Line items with quantity controls, order summary, simulated checkout                      |

## Notable implementation details

- **Cart correctness** — a cart line is keyed by product + size + color, so adding the same shirt in two different sizes creates two separate lines instead of merging incorrectly.
- **Loading & empty states** — `useProducts`/`useProduct` simulate a short network delay so skeleton loaders are exercised on every page load, not just in theory. Empty states are handled for: no search results, an empty cart, and a missing product (bad `/products/:id`, direct 404).
- **Persistence** — the cart survives a refresh via `localStorage`, wrapped in try/catch so private browsing or storage errors don't crash the app.
- **Accessibility** — visible focus rings, `aria-label`s on icon-only buttons, `aria-live` on toasts, `prefers-reduced-motion` respected.

## Deploying to Vercel

1. Push this repo to GitHub.
2. In Vercel, "Add New Project" → import the repo.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist` (Vercel detects both automatically).
4. Deploy — no environment variables are needed since there's no backend.

## Credits

Product photography from [Unsplash](https://unsplash.com).
