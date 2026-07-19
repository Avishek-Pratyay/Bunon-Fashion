import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import QuantityStepper from "../components/QuantityStepper";
import EmptyState from "../components/EmptyState";
import { formatTaka } from "../components/ProductCard";

const FREE_SHIPPING_THRESHOLD = 2000;
const SHIPPING_FEE = 80;

export default function Cart() {
  const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
  const { showToast } = useToast();
  const [placingOrder, setPlacingOrder] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const shipping = items.length === 0 || subtotal >= FREE_SHIPPING_THRESHOLD ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;

  const handleRemove = (key, name) => {
    removeItem(key);
    showToast(`Removed ${name}`);
  };

  const handleCheckout = () => {
    setPlacingOrder(true);
    // This is a frontend-only demo — there's no payment backend to call, so
    // we simulate the round trip instead of pretending it's instant.
    window.setTimeout(() => {
      setPlacingOrder(false);
      setOrderPlaced(true);
      clearCart();
    }, 900);
  };

  if (orderPlaced) {
    return (
      <div className="container-bunon py-10 sm:py-12">
        <div className="mx-auto max-w-md py-16 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-night-950">
            <svg viewBox="0 0 20 20" className="h-6 w-6 text-mustard-400" fill="currentColor">
              <path d="M7.5 13.5 4 10l1.4-1.4 2.1 2.1 6.1-6.1L15 6z" />
            </svg>
          </div>
          <h1 className="font-display text-2xl text-night-950">Order placed</h1>
          <p className="mt-2 text-sm text-ink/60">
            This is a demo checkout, so nothing was actually charged — but in
            a live store you'd get a confirmation email right about now.
          </p>
          <Link
            to="/products"
            className="mt-7 inline-flex items-center rounded-sm bg-night-950 px-6 py-2.5 text-sm font-semibold text-handloom-50 transition hover:bg-night-800"
          >
            Continue shopping
          </Link>
        </div>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="container-bunon py-10 sm:py-12">
        <EmptyState
          title="Your cart is empty"
          message="Items you add will show up here, ready for checkout."
          actionLabel="Start shopping"
          actionTo="/products"
        />
      </div>
    );
  }

  return (
    <div className="container-bunon py-10 sm:py-12">
      <h1 className="font-display text-3xl text-night-950">Your cart</h1>
      <p className="mt-1 text-sm text-ink/50">
        {items.length} item{items.length === 1 ? "" : "s"}
      </p>

      <div className="mt-8 flex flex-col gap-10 lg:flex-row lg:gap-12">
        <ul className="flex-1 divide-y divide-night-900/10 border-y border-night-900/10">
          {items.map((item) => (
            <li key={item.key} className="flex gap-4 py-5 sm:gap-5">
              <Link
                to={`/products/${item.productId}`}
                className="h-24 w-20 shrink-0 overflow-hidden rounded-sm bg-handloom-100 sm:h-28 sm:w-24"
              >
                <img src={item.image} alt="" className="h-full w-full object-cover" />
              </Link>

              <div className="flex flex-1 flex-col justify-between">
                <div className="flex justify-between gap-3">
                  <div>
                    <Link
                      to={`/products/${item.productId}`}
                      className="font-display text-base text-night-950 hover:text-night-700"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1 text-xs text-ink/50">
                      {[item.color, item.size].filter(Boolean).join(" · ")}
                    </p>
                  </div>
                  <span className="shrink-0 font-medium text-night-900">
                    {formatTaka(item.price * item.quantity)}
                  </span>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <QuantityStepper
                    quantity={item.quantity}
                    onChange={(q) => updateQuantity(item.key, q)}
                    max={10}
                    size="sm"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemove(item.key, item.name)}
                    className="text-xs font-medium text-ink/50 underline underline-offset-2 hover:text-brick-500"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* Order summary */}
        <aside className="lg:w-80 lg:shrink-0">
          <div className="rounded-sm border border-night-900/10 bg-white p-6">
            <h2 className="font-display text-lg text-night-950">Order summary</h2>
            <dl className="mt-4 space-y-2.5 text-sm">
              <div className="flex justify-between text-ink/70">
                <dt>Subtotal</dt>
                <dd>{formatTaka(subtotal)}</dd>
              </div>
              <div className="flex justify-between text-ink/70">
                <dt>Shipping</dt>
                <dd>{shipping === 0 ? "Free" : formatTaka(shipping)}</dd>
              </div>
              {shipping > 0 && (
                <p className="text-xs text-mustard-600">
                  Add {formatTaka(FREE_SHIPPING_THRESHOLD - subtotal)} more for free shipping.
                </p>
              )}
            </dl>
            <div className="mt-4 flex justify-between border-t border-night-900/10 pt-4 text-base font-semibold text-night-950">
              <span>Total</span>
              <span>{formatTaka(total)}</span>
            </div>
            <button
              type="button"
              onClick={handleCheckout}
              disabled={placingOrder}
              className="mt-6 flex w-full items-center justify-center gap-2 rounded-sm bg-night-950 py-3 text-sm font-semibold text-handloom-50 transition hover:bg-night-800 disabled:opacity-70"
            >
              {placingOrder ? (
                <>
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                  </svg>
                  Placing order…
                </>
              ) : (
                "Checkout"
              )}
            </button>
            <Link
              to="/products"
              className="mt-3 block text-center text-xs font-medium text-ink/50 hover:text-night-900"
            >
              Continue shopping
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}
