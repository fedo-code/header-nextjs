import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { label: "Buy A Franchise", href: "#", hasDropdown: true },
  { label: "News & Features", href: "#", hasDropdown: true },
  { label: "Franchise Resources", href: "#", hasDropdown: true },
  { label: "For Franchisors", href: "#", hasDropdown: true },
  { label: "1851 Services", href: "#", hasDropdown: true },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-2">
        {/* Logo and Franchise text */}
        <div className="flex items-center">
          <Image
            src="/logos/1851 Logomark.png"
            alt="1851 Logo"
            width={32}
            height={32}
            className="mr-2"
            priority
          />
          <span className="font-extrabold text-lg tracking-tight text-[#1A2B49]">FRANCHISE</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex flex-1 items-center ml-8">
          {navLinks.map((link) => (
            <div key={link.label} className="relative group">
              <Link
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-[#1A2B49] flex items-center"
              >
                {link.label}
                {link.hasDropdown && (
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </Link>
            </div>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden lg:flex items-center space-x-3">
          <button className="p-2">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" />
              <path d="M21 21l-4.35-4.35" />
            </svg>
          </button>
          <Link href="#" className="text-sm text-gray-700 hover:text-[#1A2B49]">Contact</Link>
          <Link href="#" className="text-sm text-gray-700 hover:text-[#1A2B49]">Login</Link>
          <Link href="#" className="ml-2 px-4 py-2 rounded bg-[#FF4EDB] text-white font-bold text-sm hover:opacity-90 transition">BUY A FRANCHISE</Link>
          <Link href="#" className="ml-1 px-4 py-2 rounded bg-[#1A2B49] text-white font-bold text-sm hover:opacity-90 transition">GROW A FRANCHISE</Link>
        </div>

        {/* Hamburger for Mobile */}
        <button
          className="lg:hidden flex items-center ml-auto"
          aria-label="Open menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg className="w-7 h-7 text-[#1A2B49]" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Optionally: Mobile menu can be added here if needed */}
    </header>
  );
}
