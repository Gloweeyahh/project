import { Link } from "react-router-dom";

export default function SmartNav() {
  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex gap-4 bg-white/5 backdrop-blur px-6 py-3 rounded-full border border-white/10">
      <Link to="/">Home</Link>
      <Link to="/courses">Courses</Link>
      <Link to="/book">Book</Link>
      <Link to="/vault">Vault</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
}
