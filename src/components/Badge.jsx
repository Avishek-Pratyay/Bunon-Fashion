const variants = {
  new: "bg-night-900 text-handloom-50",
  sale: "bg-brick-500 text-handloom-50",
  out: "bg-handloom-200 text-ink/60",
};

export default function Badge({ variant = "new", children }) {
  return (
    <span
      className={`inline-flex items-center rounded-sm px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide ${variants[variant]}`}
    >
      {children}
    </span>
  );
}
