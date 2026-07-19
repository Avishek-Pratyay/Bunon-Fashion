import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import EmptyState from "../components/EmptyState";
import { useProducts } from "../hooks/useProducts";
import { categories } from "../data/products";

const SORT_OPTIONS = [
  { value: "featured", label: "Featured" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

export default function Products() {
  const { products, isLoading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [filtersOpen, setFiltersOpen] = useState(false);

  const activeCategory = searchParams.get("category") || "All";
  const query = searchParams.get("q") || "";
  const sort = searchParams.get("sort") || "featured";

  const setParam = (key, value) => {
    const next = new URLSearchParams(searchParams);
    if (!value || value === "All" || value === "featured") {
      next.delete(key);
    } else {
      next.set(key, value);
    }
    setSearchParams(next, { replace: true });
  };

  const filtered = useMemo(() => {
    let list = [...products];

    if (activeCategory !== "All") {
      list = list.filter((p) => p.category === activeCategory);
    }

    if (query.trim()) {
      const q = query.trim().toLowerCase();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    switch (sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return list;
  }, [products, activeCategory, query, sort]);

  useEffect(() => {
    setFiltersOpen(false);
  }, [activeCategory]);

  return (
    <div className="container-bunon py-10 sm:py-12">
      <div className="mb-8 flex flex-col gap-2 border-b border-night-900/10 pb-8">
        <span className="eyebrow">
          {activeCategory === "All" ? "Full collection" : activeCategory}
        </span>
        <h1 className="font-display text-3xl text-night-950">
          {query ? `Results for "${query}"` : "Shop all products"}
        </h1>
        {!isLoading && (
          <p className="text-sm text-ink/50">
            {filtered.length} item{filtered.length === 1 ? "" : "s"}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-8 lg:flex-row lg:gap-12">
        {/* Filters — sidebar on desktop, collapsible on mobile */}
        <aside className="lg:w-56 lg:shrink-0">
          <button
            type="button"
            onClick={() => setFiltersOpen((v) => !v)}
            className="mb-4 flex w-full items-center justify-between border border-night-900/15 px-4 py-2.5 text-sm font-medium lg:hidden"
            aria-expanded={filtersOpen}
          >
            Filter by category
            <svg
              viewBox="0 0 20 20"
              className={`h-4 w-4 transition-transform ${filtersOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="m5 7 5 6 5-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className={`${filtersOpen ? "block" : "hidden"} lg:block`}>
            <h2 className="mb-3 hidden text-sm font-semibold text-night-950 lg:block">
              Category
            </h2>
            <ul className="space-y-1">
              {["All", ...categories].map((cat) => (
                <li key={cat}>
                  <button
                    type="button"
                    onClick={() => setParam("category", cat)}
                    className={`w-full rounded-sm px-2.5 py-2 text-left text-sm transition ${
                      activeCategory === cat
                        ? "bg-night-950 text-handloom-50"
                        : "text-ink/70 hover:bg-handloom-100"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>

        {/* Product grid */}
        <div className="flex-1">
          <div className="mb-6 flex items-center justify-end">
            <label className="flex items-center gap-2 text-sm text-ink/60">
              Sort by
              <select
                value={sort}
                onChange={(e) => setParam("sort", e.target.value)}
                className="rounded-sm border border-night-900/15 bg-white py-1.5 pl-2 pr-7 text-sm text-ink focus:border-night-700"
              >
                {SORT_OPTIONS.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </label>
          </div>

          {isLoading ? (
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <ProductCardSkeleton key={i} />
              ))}
            </div>
          ) : filtered.length === 0 ? (
            <EmptyState
              title="No products match your search"
              message="Try a different keyword or clear the category filter."
              actionLabel="Clear filters"
              actionTo="/products"
            />
          ) : (
            <div className="grid grid-cols-2 gap-x-5 gap-y-10 sm:grid-cols-3">
              {filtered.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
