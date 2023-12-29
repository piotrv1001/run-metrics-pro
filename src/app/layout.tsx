import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import Sidebar from "@/components/sidebar";
import Navbar from "@/components/navbar";
import { ClerkProvider } from "@clerk/nextjs";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RunMetricsPro",
  description: "Keep track of your running progress",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={montserrat.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="h-full relative">
              <aside className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[40] border-r">
                <Sidebar />
              </aside>
              <main className="md:pl-[304px] px-4 max-w-screen-2xl mx-auto pb-4">
                <Navbar />
                {children}
              </main>
            </div>
            <Toaster />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
