"use client";

export default function WhatsAppButton({ waMessage }) {
  return (
    <a
      href={`https://wa.me/6289606883082?text=${waMessage}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => {
        // Memanggil fungsi Meta Pixel saat tombol diklik
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Purchase');
        }
      }}
      className="flex-1 bg-primary text-on-primary border border-primary py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300 flex justify-center items-center gap-2"
    >
      <span className="material-symbols-outlined text-[18px]">chat</span>
      Beli via WhatsApp
    </a>
  );
}
