"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "../context/CartContext";

function CartItem({ item, onRemove, onUpdateQty, formatRupiah }) {
  const [removing, setRemoving] = useState(false);

  const handleRemove = () => {
    setRemoving(true);
    setTimeout(() => onRemove(item.id, item.variant), 220);
  };

  return (
    <div
      className={`flex gap-4 group pb-5 border-b border-surface-variant last:border-0 last:pb-0 transition-all duration-200 ${
        removing ? "opacity-0 translate-x-5" : ""
      }`}
    >
      <div className="w-20 h-24 border border-primary overflow-hidden flex-shrink-0 bg-surface-container-low">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="flex flex-col justify-between flex-1 py-0.5">
        <div>
          <h3 className="font-body-md text-body-md text-primary font-semibold leading-snug line-clamp-2">
            {item.name}
          </h3>
          {item.variant && (
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-0.5">
              {item.variant}
            </p>
          )}
        </div>
        <div>
          <div className="flex items-center justify-between mt-2">
            <span className="font-label-caps text-label-caps text-primary tracking-wider">
              {formatRupiah(item.price * item.qty)}
            </span>
            <div className="flex items-center gap-2">
              <div className="flex items-center border border-primary">
                <button
                  type="button"
                  onClick={() => onUpdateQty(item.id, item.variant, -1)}
                  className="w-7 h-7 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors text-base leading-none"
                  aria-label="Kurangi"
                >
                  −
                </button>
                <span className="px-2 font-label-caps text-label-caps text-primary min-w-[1.5rem] text-center">
                  {item.qty}
                </span>
                <button
                  type="button"
                  onClick={() => onUpdateQty(item.id, item.variant, 1)}
                  className="w-7 h-7 flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-on-primary transition-colors text-base leading-none"
                  aria-label="Tambah"
                >
                  +
                </button>
              </div>
              <button
                type="button"
                onClick={handleRemove}
                className="text-on-surface-variant hover:text-red-600 transition-colors"
                aria-label="Hapus"
              >
                <span className="material-symbols-outlined text-[18px]">delete</span>
              </button>
            </div>
          </div>
          <p className="font-label-caps text-label-caps text-on-surface-variant mt-1 text-[10px]">
            {formatRupiah(item.price)} × {item.qty}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function CartSidebar() {
  const {
    cart,
    cartOpen,
    closeCart,
    removeFromCart,
    updateQty,
    getTotal,
    getTotalItems,
    formatRupiah,
    initiateCheckout,
    toast,
  } = useCart();

  const total = getTotal();
  const totalItems = getTotalItems();
  const isEmpty = cart.length === 0;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm z-40 transition-opacity duration-400 ease-in-out ${
          cartOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeCart}
        aria-hidden={!cartOpen}
      />

      <aside
        aria-label="Keranjang Belanja"
        className={`fixed right-0 top-0 h-full w-full sm:w-[420px] z-50 bg-surface border-l border-primary flex flex-col shadow-2xl transform transition-transform duration-500 ease-in-out ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-start px-6 pt-6 pb-5 border-b border-primary flex-shrink-0">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary leading-none">
              Keranjang Belanja
            </h2>
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-1 uppercase tracking-widest">
              Exclusive Batik Collection
            </p>
          </div>
          <button
            type="button"
            onClick={closeCart}
            className="text-primary hover:text-tertiary-container transition-colors p-1 -mr-1 mt-1"
            aria-label="Tutup"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {!isEmpty && (
          <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
            {cart.map((item) => (
              <CartItem
                key={`${item.id}-${item.variant}`}
                item={item}
                onRemove={removeFromCart}
                onUpdateQty={updateQty}
                formatRupiah={formatRupiah}
              />
            ))}
          </div>
        )}

        {isEmpty && (
          <div className="flex-1 flex flex-col items-center justify-center px-6 text-center py-12">
            <span
              className="material-symbols-outlined text-5xl text-outline mb-4"
              style={{ fontVariationSettings: "'FILL' 0,'wght' 200" }}
            >
              shopping_bag
            </span>
            <p className="font-body-lg text-body-lg text-primary mb-2">Keranjang Kosong</p>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Tambahkan produk dari halaman koleksi untuk mulai berbelanja.
            </p>
            <Link
              href="/produk"
              onClick={closeCart}
              className="mt-6 inline-flex items-center gap-2 bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest px-6 py-3 hover:bg-transparent hover:text-primary border border-primary transition-all duration-300"
            >
              Lihat Koleksi
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </Link>
          </div>
        )}

        {!isEmpty && (
          <div className="flex-shrink-0 px-6 pt-5 pb-6 border-t border-primary bg-surface">
            <div className="flex justify-between items-baseline mb-1 font-body-md text-body-md text-on-surface-variant">
              <span>
                Subtotal ({totalItems} item)
              </span>
              <span className="text-primary font-semibold">{formatRupiah(total)}</span>
            </div>
            <p className="font-label-caps text-label-caps text-on-surface-variant mb-5 uppercase tracking-widest text-[10px]">
              Ongkos kirim dihitung saat checkout
            </p>
            <button
              type="button"
              onClick={initiateCheckout}
              disabled={isEmpty}
              className="w-full bg-primary text-on-primary border border-primary py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300 flex justify-center items-center gap-2 group disabled:opacity-40 disabled:cursor-not-allowed"
            >
              <span className="material-symbols-outlined text-[18px]">payment</span>
              Checkout via Midtrans
              <span className="material-symbols-outlined text-[18px] transform group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        )}
      </aside>

      <div
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest px-5 py-3 flex items-center gap-3 transition-all duration-300 ease-out shadow-lg ${
          toast.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <span
          className="material-symbols-outlined text-[16px]"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          check_circle
        </span>
        <span>
          <span>{toast.name}</span> ditambahkan ke keranjang
        </span>
      </div>
    </>
  );
}
