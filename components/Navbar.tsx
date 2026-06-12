"use client";
import { useState } from "react";
import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useAuth } from "@/context/AuthProvider";

const links = [
  { label: "Home", href: "/" },
  { label: "Series", href: "/series" },
  { label: "Movies", href: "/movies" },
  { label: "Yeni Eklenenler", href: "/new" },
  { label: "My List", href: "/my-list" },
];

export function Navbar() {
  const pathname = usePathname();
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);

  if (pathname === "/login") return null;

  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-black/80 to-transparent">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-4 md:px-10">
        <div className="flex items-center gap-8">
          <Link href="/" className="text-xl font-bold text-red-600 md:text-2xl">
            HECEFLIX
          </Link>
          {/* Desktop links — hidden on mobile */}
          <ul className="hidden gap-6 text-sm text-gray-300 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition hover:text-white">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <Link href="/search" className="text-gray-300 transition hover:text-white">
            <Search size={20} />
          </Link>
          {/* Desktop Sign Out */}
          {user && (
            <button
              onClick={logout}
              className="hidden text-sm text-gray-300 transition hover:text-white md:block"
            >
              Sign Out
            </button>
          )}
          {/* Profile avatar */}
          {user && (
            <div
              title={user.email}
              aria-label={`Signed in as ${user.email}`}
              className="flex h-8 w-8 items-center justify-center rounded bg-red-600 text-sm font-semibold text-white"
            >
              {user.email.charAt(0).toUpperCase()}
            </div>
          )}
          {/* Hamburger — mobile only */}
          <button
            onClick={() => setOpen((o) => !o)}
            aria-label="Toggle menu"
            className="text-gray-300 transition hover:text-white md:hidden"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="flex flex-col gap-1 bg-black/95 px-4 py-2 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded px-2 py-2 text-gray-300 transition hover:bg-neutral-800 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          {user && (
            <button
              onClick={() => {
                setOpen(false);
                logout();
              }}
              className="rounded px-2 py-2 text-left text-gray-300 transition hover:bg-neutral-800 hover:text-white"
            >
              Sign Out
            </button>
          )}
        </div>
      )}
    </nav>
  );
}
