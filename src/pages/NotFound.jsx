import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container-bunon flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <span className="font-display text-6xl text-night-900/15">404</span>
      <h1 className="mt-3 font-display text-2xl text-night-950">Page not found</h1>
      <p className="mt-2 max-w-sm text-sm text-ink/60">
        The page you're looking for doesn't exist, or the link may be broken.
      </p>
      <Link
        to="/"
        className="mt-7 inline-flex items-center rounded-sm bg-night-950 px-6 py-2.5 text-sm font-semibold text-handloom-50 transition hover:bg-night-800"
      >
        Back to home
      </Link>
    </div>
  );
}
