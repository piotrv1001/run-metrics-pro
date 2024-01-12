import Logo from "@/components/logo";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { ArrowRightIcon, CheckCircleIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function LandingPage() {
  return (
    <>
      <div className="absolute w-full h-screen brightness-[.3] object-cover -z-10">
        <Image src="/road-bg.jpg" fill sizes="100vw" alt="Road background" />
      </div>
      <header className="fixed w-full p-4 bg-black/30">
        <nav>
          <ul className="flex items-center justify-between">
            <li>
              <Logo />
            </li>
            <li>
              <SignedIn>
                <UserButton afterSignOutUrl="/" />
              </SignedIn>
            </li>
          </ul>
        </nav>
      </header>
      <main className="p-4 flex justify-center items-center h-screen flex-col text-center">
        <div className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10 text-white uppercase italic">
          Run beyond limits
        </div>
        <div className="flex mb-10 gap-x-4 items-center justify-center">
          <CheckCircleIcon className="text-green-500" size={24} />
          <div className="text-base md:text-lg lg:text-xl font-bold items-center bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
            Precision Metrics for Peak Performance
          </div>
        </div>
        <p className="text-white/80 text-base font-medium max-w-[600px]">
          Elevate every run with precision metrics and personalized insights.
          Track your pace, analyze performance, and run smarter towards your
          personal best. Your journey to peak performance starts here.
        </p>
        <div className="flex gap-x-8 mt-20">
          <SignedIn>
            <Link href="/dashboard">
              <PrimaryButton text="Dashboard" />
            </Link>
          </SignedIn>
          <SignedOut>
            <Link href="/dashboard">
              <PrimaryButton text="View demo" />
            </Link>
            <Link href="/sign-in">
              <PrimaryButton text="Sign in" />
            </Link>
          </SignedOut>
        </div>
      </main>
    </>
  );
}

const PrimaryButton = ({ text }: { text: string }) => {
  return (
    <button className="min-w-[180px] rounded-lg bg-white/20 px-4 py-2 border-white border hover:bg-white/30 transition group flex items-center justify-around">
      <span>{text}</span>
      <ArrowRightIcon
        size={26}
        className="transition-transform group-hover:translate-x-1 motion-reduce:transform-none"
      />
    </button>
  );
};
