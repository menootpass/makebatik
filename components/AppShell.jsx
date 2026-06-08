"use client";

import { useEffect } from "react";
import { CartProvider } from "../context/CartContext";
import CartSidebar from "./CartSidebar";
import CheckoutModal from "./CheckoutModal";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function AppShell({ children, footerVariant = "default", navVariant = "default" }) {
  useEffect(() => {
    // Load Midtrans Snap script
    const script = document.createElement("script");
    script.src = "https://app.midtrans.com/snap/snap.js";
    script.async = true;
    script.setAttribute("data-client-key", process.env.NEXT_PUBLIC_MIDTRANS_CLIENT_KEY || "");
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

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
