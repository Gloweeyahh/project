type Props = {
  children: React.ReactNode;
};

export default function BrowserMockup({ children }: Props) {
  return (
    <div className="rounded-[28px] p-3 bg-[#111] shadow-2xl">
      <div className="rounded-[22px] overflow-hidden bg-[var(--bg-secondary)] min-h-[420px]">
        {children}
      </div>
    </div>
  );
}
