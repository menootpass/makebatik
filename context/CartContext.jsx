"use client";

import { createContext, useCallback, useContext, useEffect, useState } from "react";
import { formatRupiah } from "../lib/format";

const STORAGE_KEY = "makebatik_cart";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [checkoutOpen, setCheckoutOpen] = useState(false);
  const [successOpen, setSuccessOpen] = useState(false);
  const [successData, setSuccessData] = useState(null);
  const [toast, setToast] = useState({ visible: false, name: "" });
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setCart(JSON.parse(stored));
    } catch {
      setCart([]);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(cart));
  }, [cart, hydrated]);

  const showToast = useCallback((name) => {
    setToast({ visible: true, name });
    const timer = setTimeout(() => setToast({ visible: false, name: "" }), 2500);
    return () => clearTimeout(timer);
  }, []);

  const addToCart = useCallback(
    (product) => {
      setCart((prev) => {
        const existing = prev.find(
          (item) => item.id === product.id && item.variant === (product.variant || "")
        );
        if (existing) {
          return prev.map((item) =>
            item.id === product.id && item.variant === (product.variant || "")
              ? { ...item, qty: item.qty + 1 }
              : item
          );
        }
        return [...prev, { ...product, variant: product.variant || "", qty: 1 }];
      });
      showToast(product.name);
    },
    [showToast]
  );

  const removeFromCart = useCallback((id, variant) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.variant === (variant || "")))
    );
  }, []);

  const updateQty = useCallback((id, variant, delta) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id && item.variant === (variant || "")) {
          return { ...item, qty: Math.max(1, item.qty + delta) };
        }
        return item;
      })
    );
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const getTotal = useCallback(
    () => cart.reduce((sum, item) => sum + item.price * item.qty, 0),
    [cart]
  );

  const getTotalItems = useCallback(
    () => cart.reduce((sum, item) => sum + item.qty, 0),
    [cart]
  );

  const openCart = useCallback(() => setCartOpen(true), []);
  const closeCart = useCallback(() => setCartOpen(false), []);

  const initiateCheckout = useCallback(() => {
    if (cart.length === 0) {
      alert("Keranjang Anda kosong. Tambahkan produk terlebih dahulu.");
      return;
    }
    setCartOpen(false);
    setCheckoutOpen(true);
  }, [cart.length]);

  const closeCheckout = useCallback(() => setCheckoutOpen(false), []);

  const submitOrder = useCallback(
    async ({ name, email, phone, address }) => {
      if (cart.length === 0) throw new Error("Keranjang kosong.");
      const orderId = "MB-" + Date.now();
      const total = getTotal();
      const items = cart.map((i) => ({
        id: i.id,
        name: i.name,
        price: i.price,
        quantity: i.qty,
      }));

      await new Promise((r) => setTimeout(r, 600));

      setCheckoutOpen(false);
      setSuccessData({ orderId, total, name, email, items });
      setSuccessOpen(true);
    },
    [cart, getTotal]
  );

  const closeSuccess = useCallback(() => {
    setSuccessOpen(false);
    setSuccessData(null);
    clearCart();
  }, [clearCart]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") {
        if (successOpen) closeSuccess();
        else if (checkoutOpen) closeCheckout();
        else if (cartOpen) closeCart();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [cartOpen, checkoutOpen, successOpen, closeCart, closeCheckout, closeSuccess]);

  useEffect(() => {
    const locked = cartOpen || checkoutOpen || successOpen;
    document.body.style.overflow = locked ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [cartOpen, checkoutOpen, successOpen]);

  return (
    <CartContext.Provider
      value={{
        cart,
        cartOpen,
        checkoutOpen,
        successOpen,
        successData,
        toast,
        addToCart,
        removeFromCart,
        updateQty,
        clearCart,
        getTotal,
        getTotalItems,
        formatRupiah,
        openCart,
        closeCart,
        initiateCheckout,
        closeCheckout,
        submitOrder,
        closeSuccess,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
