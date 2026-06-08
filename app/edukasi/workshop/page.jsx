"use client";

import Link from "next/link";
import { useState } from "react";
import AppShell from "../../../components/AppShell";
import { WORKSHOPS } from "../../../data/workshops";

function JoinModal({ workshop, onClose }) {
  if (!workshop) return null;

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/40 backdrop-blur-sm px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="bg-surface border border-primary w-full max-w-md p-8 relative">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-primary hover:text-tertiary-container transition-colors"
          aria-label="Tutup"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        <span className="font-label-caps text-label-caps text-tertiary-container uppercase tracking-widest mb-3 block">
          Konfirmasi Pendaftaran
        </span>
        <h2 className="font-headline-md text-headline-md text-primary mb-4">
          {workshop.title}
        </h2>
        <div className="space-y-2 mb-8 font-body-md text-body-md text-on-surface-variant">
          <p>{workshop.date} · {workshop.time}</p>
          <p>{workshop.location}</p>
          <p className="text-primary font-semibold">{workshop.spots} kursi tersisa</p>
        </div>
        <p className="font-body-md text-body-md text-on-surface-variant mb-8">
          Tim kami akan menghubungi Anda dalam 1×24 jam untuk konfirmasi jadwal dan detail pembayaran.
        </p>
        <Link
          href="/faq"
          onClick={onClose}
          className="w-full inline-flex justify-center items-center gap-2 bg-primary text-on-primary border border-primary py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300"
        >
          Lanjut ke Kontak
          <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </Link>
      </div>
    </div>
  );
}

function WorkshopRow({ workshop, onJoin }) {
  return (
    <div className="group border border-primary bg-surface hover:bg-[#f9f9f9] transition-colors duration-500">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 p-8 md:p-10">
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="font-label-caps text-label-caps text-tertiary-container uppercase tracking-widest border border-tertiary-container px-3 py-1">
              {workshop.level}
            </span>
            <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
              {workshop.duration}
            </span>
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              · {workshop.spots} seats
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary mb-4 leading-snug">
            {workshop.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed max-w-2xl mb-5">
            {workshop.description}
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary">calendar_today</span>
              {workshop.date}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary">schedule</span>
              {workshop.time}
            </span>
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
              {workshop.location}
            </span>
          </div>
        </div>
        <button
          type="button"
          onClick={() => onJoin(workshop)}
          className="flex-shrink-0 self-start lg:self-center bg-primary text-on-primary border border-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300 flex items-center gap-2 group/btn whitespace-nowrap"
        >
          Join Workshop
          <span className="material-symbols-outlined text-[18px] transform group-hover/btn:translate-x-1 transition-transform">
            arrow_forward
          </span>
        </button>
      </div>
    </div>
  );
}

export default function WorkshopPage() {
  const [selected, setSelected] = useState(null);

  return (
    <AppShell>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-8">
        <Link
          href="/edukasi"
          className="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest mb-12 group"
        >
          <span className="material-symbols-outlined text-[18px] transform group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Kembali ke Edukasi
        </Link>

        <div className="max-w-3xl mb-section-gap">
          <span className="font-label-caps text-label-caps text-tertiary-container uppercase tracking-widest mb-6 block">
            Atelier Experience
          </span>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
            Workshop Schedule
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant">
            Sesi masterclass langsung di atelier Jakarta kami. Pelajari seni batik dari artisan berpengalaman dalam lingkungan yang intim dan premium.
          </p>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
        <div className="border-t border-primary space-y-0">
          {WORKSHOPS.map((workshop, i) => (
            <div key={workshop.id} className={i > 0 ? "border-t border-primary" : ""}>
              <WorkshopRow workshop={workshop} onJoin={setSelected} />
            </div>
          ))}
        </div>

        <div className="mt-16 border border-primary bg-surface-container-low p-10 md:p-14 text-center">
          <span className="material-symbols-outlined text-4xl text-tertiary-container mb-6 block">
            groups
          </span>
          <h2 className="font-headline-md text-headline-md text-primary mb-4">
            Private Group Booking
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto mb-8">
            Ingin mengadakan workshop eksklusif untuk tim atau komunitas? Hubungi kami untuk jadwal kustom.
          </p>
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary uppercase tracking-widest border-b border-primary pb-1 hover:text-tertiary-container hover:border-tertiary-container transition-colors"
          >
            Hubungi Kami
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </Link>
        </div>
      </section>

      <JoinModal workshop={selected} onClose={() => setSelected(null)} />
    </AppShell>
  );
}
