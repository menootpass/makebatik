"use client";

import { useState } from "react";
import AppShell from "../../components/AppShell";

const FAQ_ITEMS = [
  {
    q: "Bagaimana cara terbaik merawat kain Batik tulis agar warnanya tidak pudar?",
    a: "Kami menyarankan pencucian manual menggunakan sabun lerak atau sampo bayi yang lembut. Hindari penggunaan mesin cuci atau deterjen keras. Saat menjemur, pastikan kain diletakkan di tempat teduh dan tidak terkena sinar matahari langsung untuk menjaga integritas pigmen alami.",
  },
  {
    q: "Berapa lama estimasi pengiriman untuk karya Batik kustom (Pre-Order)?",
    a: "Setiap karya Pre-Order dikerjakan langsung oleh artisan kami dengan tingkat presisi tinggi. Proses pemilaman, pencantingan, dan pewarnaan memakan waktu antara 4 hingga 8 minggu tergantung pada kompleksitas motif. Kami akan memberikan pembaruan berkala mengenai progres pesanan Anda.",
  },
  {
    q: "Apakah Make Batik menerima pesanan korporat atau seragam eksklusif?",
    a: "Ya, kami menerima komisi khusus untuk korporat dengan minimum pemesanan tertentu. Tim desainer kami dapat memadukan identitas merek Anda dengan filosofi motif Batik tradisional untuk menciptakan seragam yang elegan dan bermakna.",
  },
  {
    q: "Apakah ada garansi keaslian untuk setiap kain Batik yang dibeli?",
    a: "Setiap helai kain Batik Tulis dan Cap dari koleksi kami dilengkapi dengan Sertifikat Keaslian yang ditandatangani oleh kepala studio kami. Sertifikat ini menjamin bahwa kain tersebut diproses menggunakan teknik malam dingin tradisional tanpa cetakan mesin.",
  },
];

function AccordionItem({ item, open, onToggle }) {
  return (
    <div
      className={`group border-b border-outline-variant py-6 cursor-pointer ${open ? "open" : ""}`}
      onClick={onToggle}
      onKeyDown={(e) => e.key === "Enter" && onToggle()}
      role="button"
      tabIndex={0}
    >
      <div className="flex justify-between items-start">
        <h3 className="font-body-lg text-body-lg text-primary group-hover:text-tertiary-container transition-colors duration-300 pr-8">
          {item.q}
        </h3>
        <span
          className={`material-symbols-outlined text-primary group-hover:text-tertiary-container transition-transform duration-300 mt-1 ${open ? "rotate-45" : ""}`}
        >
          add
        </span>
      </div>
      <div className={`accordion-content ${open ? "active" : ""}`}>
        <p className="font-body-md text-body-md text-on-surface-variant pt-4 pb-2">{item.a}</p>
      </div>
    </div>
  );
}

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <AppShell>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-24 pb-section-gap">
        <header className="mb-section-gap max-w-4xl">
          <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary mb-6">
            Pertanyaan &amp; Bantuan
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Kami mendedikasikan waktu untuk memastikan setiap karya seni Batik yang Anda miliki tetap abadi. Temukan panduan perawatan, informasi pengiriman, atau sapa tim artisan kami secara langsung.
          </p>
        </header>

        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter mb-section-gap">
          <div className="lg:col-span-7 pr-0 lg:pr-12">
            <h2 className="font-headline-md text-headline-md text-primary mb-8 pb-4 border-b border-primary">
              Pertanyaan Umum
            </h2>
            <div className="space-y-0 border-t border-primary">
              {FAQ_ITEMS.map((item, i) => (
                <AccordionItem
                  key={item.q}
                  item={item}
                  open={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 relative group h-fit">
            <div className="absolute inset-0 bg-surface-container-low transition-colors duration-500 group-hover:bg-surface-container" />
            <div className="relative z-10 p-8 md:p-12 border border-primary">
              <div className="mb-10">
                <h2 className="font-headline-md text-headline-md text-primary mb-2">Kirim Pesan</h2>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Hubungi konsultan gaya kami untuk permintaan khusus atau bantuan personal.
                </p>
              </div>
              <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                {[
                  { id: "name", label: "Nama Lengkap", type: "text", placeholder: "Cth: Raden Ajeng Kartini" },
                  { id: "email", label: "Alamat Email", type: "email", placeholder: "Cth: kartini@email.com" },
                ].map((field) => (
                  <div key={field.id} className="relative group/input">
                    <label
                      htmlFor={field.id}
                      className="block font-label-caps text-label-caps text-on-surface-variant mb-2 transition-colors group-focus-within/input:text-primary"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      type={field.type}
                      required
                      className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-2 font-body-md text-body-md text-primary focus:ring-0 focus:border-primary transition-colors placeholder:text-outline-variant/50"
                      placeholder={field.placeholder}
                    />
                  </div>
                ))}
                <div className="relative group/input">
                  <label
                    htmlFor="message"
                    className="block font-label-caps text-label-caps text-on-surface-variant mb-2 transition-colors group-focus-within/input:text-primary"
                  >
                    Pesan Anda
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    className="w-full bg-transparent border-0 border-b border-outline-variant px-0 py-2 font-body-md text-body-md text-primary focus:ring-0 focus:border-primary transition-colors resize-none placeholder:text-outline-variant/50"
                    placeholder="Tuliskan pertanyaan atau detail pesanan khusus Anda di sini..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full mt-4 bg-primary text-on-primary border border-primary py-4 px-6 font-label-caps text-label-caps uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Kirim Pesan</span>
                  <span className="material-symbols-outlined text-sm">arrow_right_alt</span>
                </button>
              </form>
            </div>
          </div>
        </section>

        <section className="w-full border border-primary relative overflow-hidden h-[400px] md:h-[500px] group">
          <div className="absolute inset-0 bg-surface-variant flex items-center justify-center">
            <iframe
              title="Make Batik Gallery Location"
              className="w-full h-full object-cover filter grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
              src="https://maps.google.com/maps?q=-7.846415239665258,110.37401413983129&z=15&output=embed"
              loading="lazy"
              allowFullScreen
            />
            <div className="absolute inset-0 bg-surface/30 mix-blend-overlay pointer-events-none" />
          </div>
          <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 bg-surface border border-primary p-6 md:p-8 max-w-sm">
            <div className="flex items-center space-x-3 mb-4">
              <span
                className="material-symbols-outlined text-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
              <h4 className="font-label-caps text-label-caps text-primary uppercase tracking-widest">
                Make Batik Studio
              </h4>
            </div>
            <p className="font-body-md text-body-md text-on-surface-variant mb-4 leading-relaxed">
              Ngoto, Bangunharjo
              <br />
              Kec. Sewon, Kab. Bantul
              <br />
              Daerah Istimewa Yogyakarta
            </p>
            <div className="pt-4 border-t border-outline-variant">
              <p className="font-label-caps text-label-caps text-on-surface-variant mb-1 uppercase">
                Jam Operasional
              </p>
              <p className="font-body-md text-body-md text-primary">Senin - Sabtu: 10.00 - 18.00 WIB</p>
            </div>
          </div>
        </section>
      </main>
    </AppShell>
  );
}
