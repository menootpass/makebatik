"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/faq", label: "FAQ" },
  { href: "/produk", label: "Produk" },
  { href: "/filosofi", label: "Filosofi" },
  { href: "/edukasi", label: "Edukasi" },
  { href: "/faq", label: "Hubungi Kami" }, // Catatan: link ini sama dengan FAQ, kamu bisa ubah nanti ke /kontak jika perlu
];

function NavLink({ href, label, active, onClick }) {
  const base =
    "font-label-caps text-label-caps uppercase transition-colors duration-300 block py-2 md:py-0";
  const activeClass =
    "text-primary border-b border-tertiary-container pb-1 opacity-80";
  const inactiveClass = "text-on-surface-variant hover:text-primary";

  return (
    <Link 
      href={href} 
      className={`${base} ${active ? activeClass : inactiveClass}`}
      onClick={onClick}
    >
      {label}
    </Link>
  );
}

export default function Navbar({ variant = "default" }) {
  const pathname = usePathname();
  const { openCart, getTotalItems } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State untuk kontrol menu mobile
  const count = getTotalItems();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Menutup menu mobile otomatis jika route berubah
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

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
        
        {/* Tombol Hamburger (Hanya muncul di Mobile) */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-primary p-2 focus:outline-none"
          aria-label="Toggle Menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {isMenuOpen ? "close" : "menu"}
          </span>
        </button>

        {/* Logo */}
        <Link
          href="/"
          className="font-headline-md text-headline-md text-primary tracking-tight flex items-center gap-4"
        >
          Make Batik.
        </Link>

        {/* Menu Desktop */}
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

        {/* Keranjang Belanja */}
        <button
          type="button"
          onClick={openCart}
          aria-label="Cart"
          className="text-primary hover:text-tertiary-container transition-colors duration-300 relative group p-2"
        >
          <span className="material-symbols-outlined group-hover:scale-110 transition-transform">
            shopping_cart
          </span>
          {count > 0 && (
            <span className="absolute top-1 right-0 bg-primary text-on-primary font-label-caps text-[9px] w-4 h-4 flex items-center justify-center border border-primary rounded-full">
              {count}
            </span>
          )}
        </button>
      </div>

      {/* Menu Mobile (Dropdown Slide Down) */}
      <div
        className={`md:hidden bg-surface border-t ${borderClass} overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-screen opacity-100 py-4" : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col gap-4 px-margin-mobile">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label + link.href}
              href={link.href}
              label={link.label}
              active={isActive(link.href)}
              onClick={() => setIsMenuOpen(false)} // Tutup menu setelah diklik
            />
          ))}
        </div>
      </div>
    </nav>
  );
}