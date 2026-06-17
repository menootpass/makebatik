"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import AppShell from "../../../components/AppShell";

export default function SuccessPage() {
  const [orderData, setOrderData] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("pending_order");
    if (stored) {
      setOrderData(JSON.parse(stored));
      localStorage.removeItem("pending_order");
    }
  }, []);

  return (
    <AppShell>
      <div className="max-w-2xl mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-green-600">
                check_circle
              </span>
            </div>
          </div>

          <h1 className="font-headline-lg text-headline-lg text-primary mb-4">
            Pembayaran Berhasil!
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
            Terima kasih telah berbelanja di Make Batik. Pesanan Anda sedang diproses dan akan segera dikirimkan.
          </p>

          {orderData && (
            <div className="bg-surface-container-low border border-primary p-6 rounded-lg mb-8 text-left">
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">
                    Order ID
                  </p>
                  <p className="font-body-lg text-body-lg text-primary font-semibold">
                    {orderData.orderId}
                  </p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-1">
                    Total Pembayaran
                  </p>
                  <p className="font-body-lg text-body-lg text-primary font-semibold">
                    Rp {orderData.total.toLocaleString("id-ID")}
                  </p>
                </div>
              </div>

              <div>
                <p className="font-label-caps text-label-caps text-on-surface-variant mb-2">
                  Detail Pengiriman
                </p>
                <p className="font-body-md text-body-md text-primary">
                  {orderData.name}
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {orderData.email}
                </p>
              </div>

              {orderData.items && orderData.items.length > 0 && (
                <div className="mt-4 pt-4 border-t border-primary">
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-3">
                    Produk
                  </p>
                  <ul className="space-y-2">
                    {orderData.items.map((item) => (
                      <li
                        key={item.id}
                        className="flex justify-between font-body-md text-body-md text-primary"
                      >
                        <span>
                          {item.name} × {item.quantity}
                        </span>
                        <span className="font-semibold">
                          Rp {(item.price * item.quantity).toLocaleString("id-ID")}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            Kami akan mengirimkan notifikasi email dengan rincian pelacakan pesanan Anda.
          </p>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/produk"
              className="px-8 py-4 border border-primary bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:bg-transparent hover:text-primary transition-colors flex items-center justify-center gap-2"
            >
              Lanjut Belanja
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
            <Link
              href="/"
              className="px-8 py-4 border border-primary bg-surface text-primary font-label-caps text-label-caps uppercase hover:bg-primary hover:text-on-primary transition-colors flex items-center justify-center gap-2"
            >
              Kembali ke Beranda
              <span className="material-symbols-outlined">home</span>
            </Link>
          </div>
        </div>
      </div>
    </AppShell>
  );
}
