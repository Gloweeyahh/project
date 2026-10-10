import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function RouteScroll() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      const target = hash ? document.getElementById(hash.slice(1)) : null;
      if (target) {
        target.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    });
    return () => cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
