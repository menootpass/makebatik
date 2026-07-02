"use client";

import { useState } from "react";
import { useCart } from "../context/CartContext";

export default function CheckoutModal() {
  const {
    cart,
    checkoutOpen,
    successOpen,
    successData,
    closeCheckout,
    submitOrder,
    closeSuccess,
    getTotal,
    formatRupiah,
  } = useCart();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName.value.trim();
    const email = form.email.value.trim();
    const phone = form.phone.value.trim();
    const address = form.address.value.trim();

    if (!name || !email || !phone || !address) {
      setError("Semua field wajib diisi.");
      return;
    }

    // Validasi email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Format email tidak valid.");
      return;
    }

    // Validasi nomor telepon (minimal 10 digit)
    const phoneRegex = /^[0-9]{10,}$/;
    const phoneDigits = phone.replace(/\D/g, "");
    if (!phoneRegex.test(phoneDigits)) {
      setError("Nomor HP harus minimal 10 digit.");
      return;
    }

    setError("");
    setLoading(true);
    try {
      console.log("[v0] Submitting order with customer data:", {
        name,
        email,
        phone,
        address,
        items: cart.length,
        total: getTotal(),
      });
      await submitOrder({ name, email, phone, address });
      // Redirect will happen from submitOrder, no need to set loading to false
    } catch (err) {
      console.error("[v0] Checkout error:", err);
      const errorMsg = err?.message || err?.toString() || "Terjadi kesalahan saat memproses pembayaran";
      setError(errorMsg.includes("401") ? "Kredensial Midtrans tidak valid" : errorMsg);
      setLoading(false);
    }
  };

  const total = getTotal();

  return (
    <>
      {checkoutOpen && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
          onClick={(e) => e.target === e.currentTarget && closeCheckout()}
        >
          <div
            className="bg-surface border border-primary w-full max-w-md p-8 relative"
            role="dialog"
            aria-modal="true"
            aria-labelledby="mb-modal-title"
          >
            <button
              type="button"
              onClick={closeCheckout}
              className="absolute top-4 right-4 text-primary hover:text-tertiary-container transition-colors"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <h2 id="mb-modal-title" className="font-headline-md text-headline-md text-primary mb-2">
              Detail Pesanan
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8">
              Lengkapi informasi pengiriman Anda.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit} noValidate>
              {[
                { id: "mb-cust-name", name: "fullName", label: "Nama Lengkap *", type: "text", placeholder: "Nama sesuai identitas" },
                { id: "mb-cust-email", name: "email", label: "Email *", type: "email", placeholder: "email@domain.com" },
                { id: "mb-cust-phone", name: "phone", label: "Nomor HP *", type: "tel", placeholder: "08xxxxxxxxxx" },
              ].map((field) => (
                <div key={field.id} className="relative">
                  <label
                    htmlFor={field.id}
                    className="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest"
                  >
                    {field.label}
                  </label>
                  <input
                    id={field.id}
                    name={field.name}
                    type={field.type}
                    required
                    className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-2 font-body-md text-body-md text-primary focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant/50"
                    placeholder={field.placeholder}
                  />
                </div>
              ))}
              <div className="relative">
                <label
                  htmlFor="mb-cust-addr"
                  className="block font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase tracking-widest"
                >
                  Alamat Pengiriman *
                </label>
                <textarea
                  id="mb-cust-addr"
                  name="address"
                  required
                  rows={2}
                  className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-2 font-body-md text-body-md text-primary focus:ring-0 focus:border-primary transition-colors resize-none placeholder:text-outline-variant/50"
                  placeholder="Jl. ...."
                />
              </div>
              {error && (
                <div className="text-sm text-red-600 font-label-caps">{error}</div>
              )}
              <div className="border-t border-surface-variant pt-4 space-y-1">
                {cart.map((item) => (
                  <div
                    key={`${item.id}-${item.variant}`}
                    className="flex justify-between font-body-md text-body-md text-on-surface-variant"
                  >
                    <span className="truncate max-w-[60%]">
                      {item.name} ×{item.qty}
                    </span>
                    <span className="text-primary font-semibold">
                      {formatRupiah(item.price * item.qty)}
                    </span>
                  </div>
                ))}
                <div className="flex justify-between font-headline-md text-headline-md text-primary border-t border-primary pt-3 mt-2">
                  <span>Total</span>
                  <span>{formatRupiah(total)}</span>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary text-on-primary border border-primary py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300 flex justify-center items-center gap-2 group disabled:opacity-60"
              >
                <span className="material-symbols-outlined text-[18px]">payment</span>
                <span>{loading ? "Memproses..." : "Bayar Sekarang"}</span>
                <span className="material-symbols-outlined text-[18px] transform group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </form>
          </div>
        </div>
      )}

      {successOpen && successData && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="bg-surface border border-primary w-full max-w-sm p-8 text-center">
            <div className="w-16 h-16 border border-tertiary-container flex items-center justify-center mx-auto mb-6">
              <span
                className="material-symbols-outlined text-4xl text-tertiary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                check_circle
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md text-primary mb-2">
              Pesanan Dikonfirmasi!
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-6">
              Terima kasih, {successData.name}! Order #{successData.orderId} sedang diproses.
              Konfirmasi akan dikirim via email.
            </p>
            <div className="text-left space-y-1 mb-6 border-t border-surface-variant pt-4">
              {successData.items.map((i) => (
                <div
                  key={i.id}
                  className="flex justify-between font-body-md text-body-md text-on-surface-variant"
                >
                  <span>
                    {i.name} ×{i.quantity}
                  </span>
                  <span>{formatRupiah(i.price * i.quantity)}</span>
                </div>
              ))}
            </div>
            <p className="font-headline-md text-headline-md text-primary mb-8">
              Total: {formatRupiah(successData.total)}
            </p>
            <button
              type="button"
              onClick={closeSuccess}
              className="w-full bg-primary text-on-primary border border-primary py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300"
            >
              Kembali Berbelanja
            </button>
          </div>
        </div>
      )}
    </>
  );
}
