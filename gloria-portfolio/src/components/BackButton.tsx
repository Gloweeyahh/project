import { useNavigate, useLocation } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();
  const location = useLocation();

  const onBack = () => {
    if (typeof window.history.state?.idx === "number" && window.history.state.idx > 0) {
      navigate(-1);
      return;
    }

    navigate("/", { replace: true });
  };

  return (
    <button
      type="button"
      onClick={onBack}
      className="back-button inline-flex items-center gap-2 rounded-xl border border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 px-4 py-2 text-sm font-semibold text-gray-900 dark:text-white/90 backdrop-blur hover:border-[#D4AF37] hover:bg-slate-50 dark:hover:bg-white/10 transition"
      aria-label="Go back"
      data-location={location.pathname}
    >
      <span aria-hidden>←</span>
      Back
    </button>
  );
}
