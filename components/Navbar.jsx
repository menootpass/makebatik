"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/faq", label: "FAQ" },
  { href: "/products", label: "Produk" },
  { href: "/filosofi", label: "Filosofi" },
  { href: "/edukasi", label: "Edukasi" },
  { href: "/faq", label: "Hubungi Kami" },
];

function NavLink({ href, label, active }) {
  const base =
    "font-label-caps text-label-caps uppercase transition-colors duration-300";
  const activeClass =
    "text-primary border-b border-tertiary-container pb-1 opacity-80";
  const inactiveClass = "text-on-surface-variant hover:text-primary";

  return (
    <Link href={href} className={`${base} ${active ? activeClass : inactiveClass}`}>
      {label}
    </Link>
  );
}

export default function Navbar({ variant = "default" }) {
  const pathname = usePathname();
  const { openCart, getTotalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const count = getTotalItems();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const borderClass =
    variant === "home" ? "border-surface-variant" : "border-primary";

  return (
    <nav
      className={`w-full top-0 sticky bg-surface z-40 transition-all duration-300 border-b ${borderClass} ${
        scrolled ? "shadow-sm bg-opacity-95 backdrop-blur-md" : ""
      }`}
    >
      <div className="flex justify-between items-center h-20 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <Link
          href="/"
          className="font-headline-md text-headline-md text-primary tracking-tight flex items-center gap-4"
        >
          Make Batik.
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label + link.href}
              href={link.href}
              label={link.label}
              active={isActive(link.href)}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={openCart}
          aria-label="Cart"
          className="text-primary hover:text-tertiary-container transition-colors duration-300 relative group"
        >
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
            shopping_cart
          </span>
          {count > 0 && (
            <span className="absolute -top-1 -right-2 bg-primary text-on-primary font-label-caps text-[9px] w-4 h-4 flex items-center justify-center border border-primary">
              {count}
            </span>
          )}
        </button>
      </div>
    </nav>
  );
}
