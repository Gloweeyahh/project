import clsx from "clsx";
import useMagnetic from "../../hooks/useMagnetic";


type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({ className, children, ...props }: Props) {
  const magnetic = useMagnetic();

  return (
    <button
      ref={magnetic.ref}
      className={clsx(
        "px-8 py-4 rounded-2xl font-bold transition-all duration-300",
        "shadow-[0_20px_60px_rgba(212,175,55,0.25)]",
        "hover:scale-105",
        className
      )}
      style={{
        background: "var(--gradient-gold)",
        color: "#000"
      }}
      {...props}
    >
      {children}
    </button>
  );
}


