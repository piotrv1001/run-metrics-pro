import { UserButton, auth } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import ThemeToggle from "./theme-toggle";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const { userId } = auth();
  return (
    <div className="flex items-center py-4">
      <MobileSidebar />
      <div
        className={cn("flex w-full justify-end items-center", {
          "gap-x-4": userId,
        })}
      >
        <ThemeToggle />
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
