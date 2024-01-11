"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { routes } from "@/lib/constants";

export default function Sidebar() {
  const pathName = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="Logo" src="/logo.png" priority />
          </div>
          <h1 className="text-2xl font-bold">RunMetricsPro</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-accent-foreground hover:bg-accent rounded-lg transition",
                pathName === route.href
                  ? "text-accent-foreground bg-accent"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
