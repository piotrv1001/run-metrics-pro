import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function LandingPage() {
  return (
    <div className="p-4">
      <div className="text-6xl font-bold mb-10">Landing page</div>
      <SignedOut>
        <div className="flex gap-x-4 items-center">
          <Link href="/sign-in">
            <Button>Login</Button>
          </Link>
          <Link href="/sign-up">
            <Button>Sign up</Button>
          </Link>
        </div>
      </SignedOut>
      <SignedIn>
        <div className="flex gap-x-4 items-center">
          <Link href="/dashboard">
            <Button>Dashboard</Button>
          </Link>
          <UserButton afterSignOutUrl="/" />
        </div>
      </SignedIn>
    </div>
  );
}
