import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./mobile-sidebar";
import ThemeToggle from "./theme-toggle";

export default function Navbar() {
  return (
    <div className="flex items-center py-4">
      <MobileSidebar />
      <div className="flex w-full justify-end gap-x-4 items-center">
        <ThemeToggle />
          <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
