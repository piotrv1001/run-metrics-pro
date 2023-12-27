import MobileSidebar from "./mobile-sidebar";

export default function Navbar() {
  return (
    <div className="p-4 md:hidden">
      <MobileSidebar />
    </div>
  )
}