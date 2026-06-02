import { useNavigate, useLocation } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const onBack = () => {
    // Prefer browser history if it exists.
    if (window.history.length > 1) {
      window.history.back();
      return;
    }

    // Fallback: go to /
    navigate("/" , { replace: true });
  };

  return (
    <button
      type="button"
      onClick={onBack}
      className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/10 transition"
      aria-label="Go back"
      data-location={location.pathname}
    >
      <span aria-hidden>←</span>
      Back
    </button>
  );
}

