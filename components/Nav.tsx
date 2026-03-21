"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Research", href: "#research" },
  { label: "Thinking", href: "#thinking" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-14 h-[60px] transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(248,248,246,0.92)] backdrop-blur-[20px] border-b border-[#e8e8e4]"
          : "bg-transparent"
      }`}
    >
      {/* Logo */}
      <a
        href="#"
        className="font-mono text-[12px] text-teal tracking-[0.04em]"
      >
        ps<span className="text-muted2">{"//"}</span>pavelsolano.mx
      </a>

      {/* Links */}
      <ul className="flex gap-9 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-[13.5px] font-medium text-muted hover:text-ink transition-colors duration-200 tracking-[0.01em]"
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Badge */}
      <div className="flex items-center gap-[7px] text-[12px] font-semibold text-teal bg-[rgba(11,168,154,0.08)] border border-[rgba(11,168,154,0.2)] px-[14px] py-[6px] rounded-full tracking-[0.02em]">
        <span className="w-[6px] h-[6px] rounded-full bg-teal blink" />
        Available for projects
      </div>
    </nav>
  );
}
