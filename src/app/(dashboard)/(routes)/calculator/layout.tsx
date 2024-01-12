export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <h1 className="text-4xl font-bold mb-14">Calculator</h1>
      {children}
    </>
  );
}
