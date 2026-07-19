import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useProduct } from "../hooks/useProducts";
import { useCart } from "../context/CartContext";
import { useToast } from "../context/ToastContext";
import RatingStars from "../components/RatingStars";
import QuantityStepper from "../components/QuantityStepper";
import Badge from "../components/Badge";
import EmptyState from "../components/EmptyState";
import { formatTaka } from "../components/ProductCard";

function GallerySkeleton() {
  return (
    <div className="grid gap-3 sm:grid-cols-[80px_1fr] sm:gap-4" aria-hidden="true">
      <div className="order-2 flex gap-2 sm:order-1 sm:flex-col">
        {[0, 1].map((i) => (
          <div key={i} className="h-16 w-16 shrink-0 animate-pulse rounded-sm bg-handloom-200 sm:h-20 sm:w-20" />
        ))}
      </div>
      <div className="order-1 aspect-[4/5] animate-pulse rounded-sm bg-handloom-200 sm:order-2" />
    </div>
  );
}

export default function ProductDetails() {
  const { id } = useParams();
  const { product, isLoading } = useProduct(id);
  const { addItem } = useCart();
  const { showToast } = useToast();

  const [activeImage, setActiveImage] = useState(0);
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [sizeError, setSizeError] = useState(false);

  useEffect(() => {
    if (product) {
      setActiveImage(0);
      setSize(null);
      setColor(product.colors?.[0] ?? null);
      setQuantity(1);
      setSizeError(false);
    }
  }, [product]);

  if (isLoading || product === undefined) {
    return (
      <div className="container-bunon py-10 sm:py-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <GallerySkeleton />
          <div className="space-y-4" aria-hidden="true">
            <div className="h-3 w-24 animate-pulse rounded bg-handloom-200" />
            <div className="h-8 w-3/4 animate-pulse rounded bg-handloom-200" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-handloom-200" />
            <div className="h-24 w-full animate-pulse rounded bg-handloom-200" />
          </div>
        </div>
      </div>
    );
  }

  if (product === null) {
    return (
      <div className="container-bunon">
        <EmptyState
          title="Product not found"
          message="This item may have sold out permanently or the link is outdated."
          actionLabel="Back to shop"
          actionTo="/products"
        />
      </div>
    );
  }

  const images = product.gallery?.length ? product.gallery : [product.image];

  const handleAddToCart = () => {
    if (product.sizes?.length && !size) {
      setSizeError(true);
      return;
    }
    addItem(product, { size, color, quantity });
    showToast(`Added ${product.name} to cart`);
  };

  return (
    <div className="container-bunon py-10 sm:py-12">
      <nav className="mb-6 flex items-center gap-1.5 text-xs text-ink/50">
        <Link to="/" className="hover:text-night-900">Home</Link>
        <span>/</span>
        <Link to="/products" className="hover:text-night-900">Shop</Link>
        <span>/</span>
        <span className="text-ink/70">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Gallery */}
        <div className="grid gap-3 sm:grid-cols-[80px_1fr] sm:gap-4">
          <div className="order-2 flex gap-2 overflow-x-auto sm:order-1 sm:flex-col sm:overflow-visible">
            {images.map((src, i) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(i)}
                className={`h-16 w-16 shrink-0 overflow-hidden rounded-sm border-2 transition sm:h-20 sm:w-20 ${
                  activeImage === i ? "border-mustard-500" : "border-transparent opacity-70 hover:opacity-100"
                }`}
                aria-label={`View image ${i + 1}`}
                aria-current={activeImage === i}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
          <div className="relative order-1 aspect-[4/5] overflow-hidden rounded-sm bg-handloom-100 sm:order-2">
            <img
              key={activeImage}
              src={images[activeImage]}
              alt={product.name}
              className="h-full w-full animate-[fade-in_0.3s_ease-out] object-cover"
            />
            <div className="absolute left-3 top-3 flex flex-col gap-1.5">
              {product.isNew && <Badge variant="new">New</Badge>}
              {product.oldPrice && <Badge variant="sale">Sale</Badge>}
            </div>
          </div>
        </div>

        {/* Details */}
        <div>
          <p className="text-xs uppercase tracking-wide text-ink/50">{product.category}</p>
          <h1 className="mt-1.5 font-display text-3xl text-night-950 sm:text-[2.1rem]">
            {product.name}
          </h1>

          <div className="mt-3">
            <RatingStars rating={product.rating} reviews={product.reviews} size="lg" />
          </div>

          <div className="mt-4 flex items-baseline gap-3">
            <span className="text-2xl font-semibold text-night-900">
              {formatTaka(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-base text-ink/40 line-through">
                {formatTaka(product.oldPrice)}
              </span>
            )}
          </div>

          <p className="mt-5 max-w-md text-[15px] leading-relaxed text-ink/70">
            {product.description}
          </p>

          {/* Color */}
          {product.colors?.length > 0 && (
            <div className="mt-7">
              <p className="mb-2.5 text-sm font-medium text-night-950">
                Color{color ? `: ${color}` : ""}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setColor(c)}
                    className={`rounded-sm border px-3.5 py-2 text-sm transition ${
                      color === c
                        ? "border-night-950 bg-night-950 text-handloom-50"
                        : "border-night-900/20 text-ink/70 hover:border-night-900/50"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Size */}
          {product.sizes?.length > 0 && (
            <div className="mt-6">
              <p className="mb-2.5 text-sm font-medium text-night-950">
                Size{size ? `: ${size}` : ""}
              </p>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setSize(s);
                      setSizeError(false);
                    }}
                    className={`h-10 min-w-[2.5rem] rounded-sm border px-3 text-sm font-medium transition ${
                      size === s
                        ? "border-night-950 bg-night-950 text-handloom-50"
                        : "border-night-900/20 text-ink/70 hover:border-night-900/50"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
              {sizeError && (
                <p className="mt-2 text-xs font-medium text-brick-500">
                  Pick a size before adding to cart.
                </p>
              )}
            </div>
          )}

          {/* Quantity + Add to cart */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <QuantityStepper quantity={quantity} onChange={setQuantity} />
            <button
              type="button"
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="flex-1 rounded-sm bg-night-950 px-6 py-3 text-sm font-semibold text-handloom-50 transition hover:bg-night-800 disabled:cursor-not-allowed disabled:bg-handloom-200 disabled:text-ink/40 sm:flex-none sm:min-w-[220px]"
            >
              {product.inStock ? "Add to Cart" : "Out of Stock"}
            </button>
          </div>

          <div className="mt-8 space-y-1.5 border-t border-night-900/10 pt-6 text-xs text-ink/50">
            <p>Free delivery inside Dhaka on orders over ৳2,000.</p>
            <p>Exchange within 7 days of delivery, tags attached.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
