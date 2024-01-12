import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center pl-3">
      <div className="relative w-8 h-8 mr-4">
        <Image fill alt="Logo" src="/logo.png" priority />
      </div>
      <h1 className="text-2xl font-bold">RunMetricsPro</h1>
    </Link>
  );
}
