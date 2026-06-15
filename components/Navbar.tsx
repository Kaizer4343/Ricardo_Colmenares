"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#certificates", label: "Certificates" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 flex items-center justify-between px-8 py-4 border-b border-purple-900/30 transition-all duration-300 ${
        scrolled ? "bg-[#0D0D0F]/90 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <span className="font-space font-bold text-lg text-purple-300 tracking-tight">
        rc.
      </span>
      <ul className="flex gap-6 flex-wrap">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-gray-400 hover:text-purple-300 transition-colors text-xs font-mono tracking-widest"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
