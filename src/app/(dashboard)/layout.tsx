import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  <div className="h-full relative">
    <aside className="hidden h-full md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[40] border-r">
      <Sidebar />
    </aside>
    <main className="md:pl-[304px] px-4 max-w-screen-2xl mx-auto pb-4">
      <Navbar />
      {children}
    </main>
  </div>;
}
