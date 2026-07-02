"use client";

import Link from "next/link";
import AppShell from "../../components/AppShell";

export default function UnfinishPage() {
  return (
    <AppShell>
      <div className="max-w-2xl mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24">
        <div className="text-center">
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center">
              <span className="material-symbols-outlined text-6xl text-yellow-600">
                schedule
              </span>
            </div>
          </div>

          <h1 className="font-headline-lg text-headline-lg text-primary mb-4">
            Pembayaran Tertunda
          </h1>

          <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-xl mx-auto">
            Proses pembayaran Anda belum selesai. Silakan selesaikan pembayaran Anda untuk menyelesaikan pesanan.
          </p>

          <div className="bg-yellow-50 border border-yellow-300 p-6 rounded-lg mb-8 text-left">
            <p className="font-body-md text-body-md text-yellow-700 font-semibold mb-2">
              Apa yang harus saya lakukan?
            </p>
            <ol className="space-y-2 font-body-md text-body-md text-yellow-700 list-decimal list-inside">
              <li>Kembali ke halaman pembayaran dan selesaikan transaksi</li>
              <li>Jika sudah membayar, tunggu konfirmasi dari bank Anda (dapat memakan waktu hingga 24 jam)</li>
              <li>Jika masalah berlanjut, hubungi layanan pelanggan kami</li>
            </ol>
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
