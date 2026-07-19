import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-night-900/10 bg-night-950 text-handloom-100">
      <div className="container-bunon grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-display text-lg font-semibold text-handloom-50">Bunon</span>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-handloom-100/60">
            Panjabis, kurtas and everyday staples, made from fabric first —
            designed second. Small batches, honest pricing.
          </p>
        </div>

        <div>
          <h3 className="eyebrow text-mustard-400">Shop</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-handloom-100/70">
            <li><Link to="/products" className="hover:text-handloom-50">All products</Link></li>
            <li><Link to="/products?category=Panjabi" className="hover:text-handloom-50">Panjabi</Link></li>
            <li><Link to="/products?category=Kurta" className="hover:text-handloom-50">Kurta</Link></li>
            <li><Link to="/cart" className="hover:text-handloom-50">Your cart</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-mustard-400">Help</h3>
          <ul className="mt-4 space-y-2.5 text-sm text-handloom-100/70">
            <li>Size guide</li>
            <li>Shipping & returns</li>
            <li>Track an order</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div>
          <h3 className="eyebrow text-mustard-400">Stay in the loop</h3>
          <p className="mt-4 text-sm text-handloom-100/60">
            New drops and restocks, a couple of times a month.
          </p>
          <form
            className="mt-3 flex"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Newsletter signup"
          >
            <input
              type="email"
              required
              placeholder="you@email.com"
              aria-label="Email address"
              className="w-full min-w-0 border border-white/15 bg-white/5 px-3 py-2 text-sm text-handloom-50 placeholder:text-handloom-100/40 focus:border-mustard-500"
            />
            <button
              type="submit"
              className="shrink-0 bg-mustard-500 px-4 text-sm font-semibold text-night-950 transition hover:bg-mustard-400"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10 py-5">
        <div className="container-bunon flex flex-col items-center justify-between gap-2 text-xs text-handloom-100/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Bunon. All rights reserved.</p>
          <p>Built with React &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
