'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import AppShell from '@/components/AppShell';

export default function CheckoutSuccessPage() {
  const [orderData, setOrderData] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const data = sessionStorage.getItem('lastOrderData');
    if (data) {
      try {
        setOrderData(JSON.parse(data));
        // Clear from session storage
        sessionStorage.removeItem('lastOrderData');
        sessionStorage.removeItem('lastOrderId');
      } catch (error) {
        console.error('[v0] Error parsing order data:', error);
      }
    }
  }, []);

  if (!mounted) return null;

  if (!orderData) {
    return (
      <AppShell>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 text-center">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-4">
            Pesanan Tidak Ditemukan
          </h1>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            Silakan periksa email Anda untuk detail pesanan atau hubungi customer service kami.
          </p>
          <Link
            href="/"
            className="inline-block bg-primary text-on-primary px-8 py-3 font-label-caps text-label-caps uppercase hover:opacity-90 transition-opacity"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20">
        {/* Success Icon */}
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center border-2 border-green-500">
            <span className="material-symbols-outlined text-green-500 text-5xl">check_circle</span>
          </div>
        </div>

        {/* Success Message */}
        <h1 className="font-headline-lg text-headline-lg text-primary text-center mb-4">
          Pembayaran Berhasil!
        </h1>
        <p className="font-body-md text-body-md text-on-surface-variant text-center mb-12 max-w-2xl mx-auto">
          Terima kasih telah berbelanja di Make Batik. Pesanan Anda telah kami terima dan segera diproses.
          Kami akan mengirimkan konfirmasi dan update pesanan ke email Anda.
        </p>

        {/* Order Details */}
        <div className="border border-primary p-8 max-w-2xl mx-auto mb-12">
          <h2 className="font-label-lg text-label-lg text-primary uppercase mb-6">Detail Pesanan</h2>

          <div className="space-y-6">
            {/* Order ID */}
            <div>
              <p className="font-label-md text-label-md text-on-surface-variant mb-2">Nomor Pesanan</p>
              <p className="font-headline-sm text-headline-sm text-primary break-all">{orderData.orderId}</p>
            </div>

            {/* Customer Info */}
            <div className="border-t border-surface-variant pt-6">
              <p className="font-label-md text-label-md text-on-surface-variant mb-2">Nama Pemesan</p>
              <p className="font-body-md text-body-md text-on-surface mb-6">{orderData.name}</p>

              <p className="font-label-md text-label-md text-on-surface-variant mb-2">Email</p>
              <p className="font-body-md text-body-md text-on-surface">{orderData.email}</p>
            </div>

            {/* Items */}
            <div className="border-t border-surface-variant pt-6">
              <p className="font-label-lg text-label-lg text-primary uppercase mb-4">Produk yang Dipesan</p>
              <div className="space-y-3">
                {orderData.items.map((item, idx) => (
                  <div key={idx} className="flex justify-between items-start pb-3 border-b border-surface-variant last:border-0">
                    <div className="flex-1">
                      <p className="font-body-md text-body-md text-on-surface">{item.name}</p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        Qty: {item.qty}
                      </p>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface font-semibold">
                      Rp {(item.price * item.qty).toLocaleString('id-ID')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Total */}
            <div className="border-t border-primary pt-6">
              <div className="flex justify-between items-center">
                <p className="font-headline-sm text-headline-sm text-on-surface">Total Pembayaran</p>
                <p className="font-headline-sm text-headline-sm text-primary">
                  Rp {orderData.total.toLocaleString('id-ID')}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="bg-surface-container-low border border-primary p-6 max-w-2xl mx-auto mb-12">
          <h3 className="font-label-lg text-label-lg text-primary uppercase mb-4">Apa Selanjutnya?</h3>
          <ul className="space-y-3 font-body-md text-body-md text-on-surface">
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary flex-shrink-0">check</span>
              <span>Kami akan mengirimkan konfirmasi pesanan ke email Anda dalam waktu singkat</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary flex-shrink-0">check</span>
              <span>Pesanan Anda akan dikemas dan siap dikirim dalam 2-3 hari kerja</span>
            </li>
            <li className="flex gap-3">
              <span className="material-symbols-outlined text-primary flex-shrink-0">check</span>
              <span>Anda akan menerima notifikasi tracking setelah pesanan dikirim</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center max-w-2xl mx-auto">
          <Link
            href="/products"
            className="flex-1 border border-primary p-4 font-label-caps text-label-caps uppercase text-primary text-center hover:bg-surface-variant transition-colors"
          >
            Lanjut Belanja
          </Link>
          <Link
            href="/"
            className="flex-1 bg-primary text-on-primary p-4 font-label-caps text-label-caps uppercase text-center hover:opacity-90 transition-opacity"
          >
            Kembali ke Beranda
          </Link>
        </div>
      </div>
    </AppShell>
  );
}
