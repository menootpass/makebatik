"use client";

import Link from "next/link";
import AppShell from "../../../components/AppShell";

export default function ErrorPage() {
  return (
    <AppShell>
      <div className="max-w-2xl mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-red-600">
                error
              </span>
            </div>
          </div>

          <h1 className="font-headline-lg text-headline-lg text-primary mb-4">
            Pembayaran Gagal
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
            Sayangnya, pembayaran Anda tidak berhasil diproses. Silakan coba lagi dengan metode pembayaran yang berbeda atau hubungi layanan pelanggan kami.
          </p>

          <div className="bg-red-50 border border-red-300 p-6 rounded-lg mb-8 text-left">
            <p className="font-body-md text-body-md text-red-700">
              Jika Anda mengalami masalah, silakan hubungi tim support kami melalui:
            </p>
            <ul className="mt-3 space-y-2 font-body-md text-body-md text-red-700">
              <li>Email: support@makebatik.com</li>
              <li>WhatsApp: +62 XXX XXXX XXXX</li>
            </ul>
          </div>

          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/produk"
              className="px-8 py-4 border border-primary bg-primary text-on-primary font-label-caps text-label-caps uppercase hover:bg-transparent hover:text-primary transition-colors flex items-center justify-center gap-2"
            >
              Kembali ke Belanja
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
