import { Link, useLocation } from "wouter";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({ children }: Props) {
  const [, navigate] = useLocation();

  function handleLogout() {
    localStorage.removeItem("adminToken");
    navigate("/admin/login");
  }
  return (
    <div className="min-h-screen flex bg-slate-950 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6">
        <h1 className="text-2xl font-bold text-yellow-400 mb-10">
          Celestial Compass
        </h1>

        <nav className="space-y-4">
          <Link href="/admin/dashboard">
            <div className="cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-800">
              📊 Dashboard
            </div>
          </Link>

          <div className="cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-800">
            👥 Consultations
          </div>

          <div className="cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-800">
            📈 Analytics
          </div>

          <div className="cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-800">
            ⚙ Settings
          </div>

          <div
            onClick={handleLogout}
            className="cursor-pointer rounded-lg px-4 py-3 hover:bg-red-600"
          >
            🚪 Logout
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-slate-950">{children}</main>
    </div>
  );
}
