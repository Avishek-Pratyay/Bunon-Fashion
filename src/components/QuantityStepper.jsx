export default function QuantityStepper({ quantity, onChange, min = 1, max = 10, size = "md" }) {
  const isSmall = size === "sm";

  const decrement = () => onChange(Math.max(min, quantity - 1));
  const increment = () => onChange(Math.min(max, quantity + 1));

  return (
    <div
      className={`inline-flex items-center border border-night-900/15 ${
        isSmall ? "h-8" : "h-11"
      }`}
    >
      <button
        type="button"
        onClick={decrement}
        disabled={quantity <= min}
        aria-label="Decrease quantity"
        className="flex h-full w-8 items-center justify-center text-ink/70 transition hover:bg-handloom-100 disabled:cursor-not-allowed disabled:opacity-30"
      >
        &minus;
      </button>
      <span
        className={`flex h-full w-9 items-center justify-center border-x border-night-900/15 font-medium ${
          isSmall ? "text-sm" : ""
        }`}
      >
        {quantity}
      </span>
      <button
        type="button"
        onClick={increment}
        disabled={quantity >= max}
        aria-label="Increase quantity"
        className="flex h-full w-8 items-center justify-center text-ink/70 transition hover:bg-handloom-100 disabled:cursor-not-allowed disabled:opacity-30"
      >
        +
      </button>
    </div>
  );
}
