type Props = {
  children: React.ReactNode;
};

export default function PageShell({ children }: Props) {
  return (
    <main
      style={{
        background: "var(--gradient-mesh)"
      }}
    >
      {children}
    </main>
  );
}
