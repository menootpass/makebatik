"use client";

import { CartProvider } from "../context/CartContext";
import CartSidebar from "./CartSidebar";
import CheckoutModal from "./CheckoutModal";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AppShell({ children, footerVariant = "default", navVariant = "default" }) {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-surface text-on-surface font-body-md antialiased">
        <Navbar variant={navVariant} />
        <main className="flex-grow">{children}</main>
        <Footer variant={footerVariant} />
        <CartSidebar />
        <CheckoutModal />
      </div>
    </CartProvider>
  );
}
