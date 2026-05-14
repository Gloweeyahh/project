type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function Section({ children, className = "" }: Props) {
  return (
    <section className={`px-6 lg:px-16 py-24 lg:py-40 ${className}`}>
      {children}
    </section>
  );
}
