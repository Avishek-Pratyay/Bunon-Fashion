import { Link } from "react-router-dom";
import RatingStars from "./RatingStars";
import Badge from "./Badge";

function formatTaka(amount) {
  return `৳${amount.toLocaleString("en-BD")}`;
}

export default function ProductCard({ product }) {
  const { id, name, category, price, oldPrice, image, rating, reviews, inStock, isNew } =
    product;

  return (
    <Link
      to={`/products/${id}`}
      className="group block outline-none"
      aria-label={`View ${name}`}
    >
      <div className="relative overflow-hidden rounded-sm bg-handloom-100 aspect-[4/5]">
        <img
          src={image}
          alt={name}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 500'%3E%3Crect width='400' height='500' fill='%23EDEAE1'/%3E%3C/svg%3E";
          }}
          className={`h-full w-full object-cover transition duration-700 ease-weave group-hover:scale-[1.06] ${
            inStock ? "" : "grayscale opacity-70"
          }`}
        />

        <div className="absolute left-2.5 top-2.5 flex flex-col gap-1.5">
          {isNew && <Badge variant="new">New</Badge>}
          {oldPrice && <Badge variant="sale">Sale</Badge>}
        </div>

        {!inStock && (
          <div className="absolute inset-x-0 bottom-0 bg-night-950/85 py-1.5 text-center text-[11px] font-semibold uppercase tracking-wide text-handloom-100">
            Out of stock
          </div>
        )}

        <span
          className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-mustard-500 transition-transform duration-500 ease-weave group-hover:scale-x-100"
          aria-hidden="true"
        />
      </div>

      <div className="mt-3 space-y-1">
        <p className="text-[11px] uppercase tracking-wide text-ink/50">{category}</p>
        <h3 className="font-display text-[15px] leading-snug text-night-950 group-hover:text-night-700">
          {name}
        </h3>
        <RatingStars rating={rating} reviews={reviews} />
        <div className="flex items-baseline gap-2 pt-0.5">
          <span className="font-semibold text-night-900">{formatTaka(price)}</span>
          {oldPrice && (
            <span className="text-xs text-ink/40 line-through">{formatTaka(oldPrice)}</span>
          )}
        </div>
      </div>
    </Link>
  );
}

export { formatTaka };
