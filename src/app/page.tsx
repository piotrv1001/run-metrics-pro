import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-y-16">
      <div className="flex justify-end">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-bold">RunMetricsPro</h1>
    </main>
  );
}
