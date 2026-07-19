import { Link } from "react-router-dom";

export default function EmptyState({ title, message, actionLabel, actionTo }) {
  return (
    <div className="flex flex-col items-center py-20 text-center">
      <svg
        viewBox="0 0 64 64"
        className="mb-5 h-14 w-14 text-night-900/25"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        aria-hidden="true"
      >
        <path d="M14 22h36l-3 26a4 4 0 0 1-4 3.5H21a4 4 0 0 1-4-3.5L14 22z" />
        <path d="M22 22v-4a10 10 0 0 1 20 0v4" />
      </svg>
      <h2 className="font-display text-xl text-night-950">{title}</h2>
      {message && <p className="mt-2 max-w-sm text-sm text-ink/60">{message}</p>}
      {actionLabel && actionTo && (
        <Link
          to={actionTo}
          className="mt-6 inline-flex items-center rounded-sm bg-night-950 px-6 py-2.5 text-sm font-semibold text-handloom-50 transition hover:bg-night-800"
        >
          {actionLabel}
        </Link>
      )}
    </div>
  );
}
