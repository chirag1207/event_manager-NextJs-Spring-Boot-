// /app/dashboard/layout.tsx
"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const menuItems = [
  { name: "All Events", href: "/dashboard/events" },
  { name: "My Events", href: "/dashboard/my-events" },
  { name: "My Profile", href: "/dashboard/profile" },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    if (!userId) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <div className="d-flex vh-100">
      <aside className="bg-dark text-white p-3 d-flex flex-column justify-content-between" style={{ width: "240px" }}>
        <div>
          <h4 className="mb-4">Member Dashboard</h4>
          <nav className="nav flex-column">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`nav-link text-white ${pathname === item.href ? "fw-bold bg-secondary rounded px-2" : ""}`}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>

        <button onClick={handleLogout} className="btn btn-outline-light mt-4">
          Logout
        </button>
      </aside>

      <main className="flex-grow-1 p-4 bg-light overflow-auto">{children}</main>
    </div>
  );
}
