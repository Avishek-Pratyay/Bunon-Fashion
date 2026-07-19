import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// React Router doesn't reset scroll position between route changes by
// default, which reads oddly when going from a long listing page to a
// short one. This keeps navigation feeling intentional.
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
