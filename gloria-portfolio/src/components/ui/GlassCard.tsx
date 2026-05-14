type Props = {
  children: React.ReactNode;
};

export default function GlassCard({ children }: Props) {
  return (
    <div
      className="rounded-3xl border border-white/10 backdrop-blur-xl p-8"
      style={{ background: "var(--glass)" }}
    >
      {children}
    </div>
  );
}

