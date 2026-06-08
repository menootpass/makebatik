"use client";

import { useCart } from "../context/CartContext";
import CheckoutForm from "./CheckoutForm";

export default function CheckoutModal() {
  const {
    checkoutOpen,
    successOpen,
    successData,
    closeSuccess,
    getTotal,
    formatRupiah,
  } = useCart();

  return (
    <>
      {checkoutOpen && <CheckoutForm />}

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
