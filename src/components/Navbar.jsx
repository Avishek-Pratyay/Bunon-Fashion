import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Shop" },
];

export default function Navbar() {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  // Close the mobile menu on route change / resize back to desktop.
  useEffect(() => {
    setMenuOpen(false);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = query.trim();
    navigate(trimmed ? `/products?q=${encodeURIComponent(trimmed)}` : "/products");
    setMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-night-900/10 bg-handloom-50/90 backdrop-blur">
      <div className="container-bunon flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2 shrink-0" aria-label="Bunon home">
          <svg viewBox="0 0 64 64" className="h-8 w-8">
            <rect width="64" height="64" rx="14" fill="#12203B" />
            <path
              d="M14 20 L32 38 L50 20"
              stroke="#D4A017"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14 44 L32 26 L50 44"
              stroke="#EDEAE1"
              strokeWidth="4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="font-display text-lg font-semibold tracking-tight text-night-950">
            Bunon
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-night-950" : "text-ink/60 hover:text-night-900"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <form onSubmit={handleSearch} className="relative hidden max-w-xs flex-1 md:block">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            aria-label="Search products"
            className="w-full rounded-sm border border-night-900/15 bg-white py-2 pl-9 pr-3 text-sm text-ink placeholder:text-ink/40 focus:border-night-700"
          />
          <svg
            viewBox="0 0 20 20"
            className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <circle cx="9" cy="9" r="6" />
            <path d="m17 17-4-4" strokeLinecap="round" />
          </svg>
        </form>

        <div className="flex items-center gap-1">
          <Link
            to="/cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-sm text-night-950 transition hover:bg-handloom-100"
            aria-label={`Cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
              <path d="M6 6h15l-1.5 9h-12z" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6 5 2H2" strokeLinecap="round" strokeLinejoin="round" />
              <circle cx="9" cy="20" r="1.4" fill="currentColor" stroke="none" />
              <circle cx="18" cy="20" r="1.4" fill="currentColor" stroke="none" />
            </svg>
            {itemCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-mustard-500 px-1 text-[10px] font-bold text-night-950">
                {itemCount > 99 ? "99+" : itemCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-sm md:hidden"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              {menuOpen ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="border-t border-night-900/10 bg-handloom-50 px-5 py-4 md:hidden">
          <form onSubmit={handleSearch} className="relative mb-4">
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products…"
              aria-label="Search products"
              className="w-full rounded-sm border border-night-900/15 bg-white py-2.5 pl-9 pr-3 text-sm"
            />
            <svg
              viewBox="0 0 20 20"
              className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <circle cx="9" cy="9" r="6" />
              <path d="m17 17-4-4" strokeLinecap="round" />
            </svg>
          </form>
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `rounded-sm px-2 py-2.5 text-sm font-medium ${
                    isActive ? "bg-handloom-100 text-night-950" : "text-ink/70"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
