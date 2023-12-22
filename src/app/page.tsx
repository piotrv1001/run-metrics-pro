import ThemeToggle from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center gap-y-16">
      <div className="flex justify-end w-full">
        <ThemeToggle />
      </div>
      <h1 className="text-4xl font-bold">RunMetricsPro</h1>
      <Link href="/workouts">
        <Button>View Workouts</Button>
      </Link>
    </main>
  );
}
