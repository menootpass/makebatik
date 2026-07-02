"use client";

import Link from "next/link";
import { useEffect } from "react";
import AppShell from "../components/AppShell";

const FAQ_ITEMS = [
  {
    q: "Apa itu produk MAKE BATIK?",
    a: "MAKE BATIK adalah produk fashion premium yang dibuat dari limbah kertas semen dan bahan daur ulang lainnya, dihiasi dengan motif batik handmade tradisional Indonesia. Setiap produk merupakan karya unik yang menggabungkan keberlanjutan lingkungan dengan warisan budaya.",
  },
  {
    q: "Apakah produk ini benar-benar ramah lingkungan?",
    a: "Ya. Setiap produk MAKE BATIK menggunakan material limbah seperti kertas semen bekas yang diupcycle menjadi fashion berkualitas. Proses produksi kami menggunakan pewarna berbahan air (water-based), mengurangi limbah, dan mendukung ekonomi sirkular.",
  },
  {
    q: "Bagaimana cara memesan produk MAKE BATIK?",
    a: "Anda bisa langsung memesan melalui tombol 'Checkout' di keranjang belanja, yang akan menghubungkan Anda ke WhatsApp kami. Tim kami akan segera merespons dan membantu proses pemesanan Anda.",
  },
];

function FaqItem({ item }) {
  return (
    <details className="border-b border-surface-variant group">
      <summary className="w-full py-6 flex justify-between items-center text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
        <span className="font-body-lg text-body-lg text-primary group-hover:text-tertiary-container transition-colors duration-300 pr-8">
          {item.q}
        </span>
        <span className="material-symbols-outlined text-on-surface-variant transition-transform duration-300 group-open:rotate-45">
          add
        </span>
      </summary>
      <p className="pb-6 font-body-md text-body-md text-on-surface-variant leading-relaxed">
        {item.a}
      </p>
    </details>
  );
}

export default function HomePage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <AppShell navVariant="home">
      {/* ─── HERO ─── */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <img
            alt="Make Batik – Fashion dari Limbah untuk Bumi"
            className="w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVcgZ1lJ6hWRNQJW-26CJcRXEqeWPbBmKyatlYL1tvnD3vUBOgzp4BwiPfqKPLVNVygGJ-X8osVr6clraApasW6meam5MwaubgGwmWc-37tJNQ_W1uO4AqsfTxKSPU-IcwS84Qv8ZV8FPv8j7UyAKkhLdQYk96K-y49c0KApDX9cdBXex9etWXmoCvJM2V_Z6d5IQpQyHjbCodVF82Rf96BmXcvdIVT2UTV2AbpGQCN4vXbBz_5q84TTfhEE4EfMZpuAOaGCYHDrym"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto fade-up">
          <p className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-[0.2em] mb-6">
            From Waste to Worth. From Tradition to the Future.
          </p>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-primary mb-8 max-w-4xl mx-auto leading-tight">
            Fashion that Preserves Culture, Reduces Waste, and Creates Positive Impact.
          </h1>
          <p className="font-body-lg text-body-lg text-on-primary/80 max-w-2xl mx-auto mb-10">
            MAKE BATIK transforms recycled cement paper and plastic waste into premium handmade batik fashion through traditional craftsmanship.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link
              href="/produk"
              className="px-8 py-4 bg-on-primary text-primary font-label-caps text-label-caps uppercase border border-on-primary hover:bg-transparent hover:text-on-primary transition-all duration-300 w-full sm:w-auto"
            >
              Shop Now
            </Link>
            <Link
              href="/#filosofi"
              className="px-8 py-4 bg-transparent text-on-primary font-label-caps text-label-caps uppercase border border-on-primary hover:border-tertiary-fixed-dim hover:text-tertiary-fixed-dim transition-all duration-300 w-full sm:w-auto"
            >
              Explore Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CURATED GALLERY ─── */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-background">
        <div className="mb-16 text-center fade-up">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Koleksi Kami</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Fashion yang lahir dari limbah, ditenun oleh tangan artisan, dan bermotif batik tradisional Indonesia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px] md:auto-rows-[400px]">
          <Link
            href="/produk"
            className="group relative block md:col-span-8 row-span-1 overflow-hidden border border-surface-variant fade-up bg-surface"
          >
            <img
              alt="Koleksi MAKE BATIK"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwKshLRV3omZlOb75YbP6WexylRvFmGCjafr5A2O8-hpmlz8-LaSKP7I_MzaYkWdyKqzr2ni-ByWTC1IMFkYzVpflBlTr3sudWgtxMcem3fQoi2mk2-xmm4n5NOh2BGWoU9q5Qidb1ea-CPKhYr_YPfM7w9AI6V4DrlTn4HmVlxhm3EPTTA9dqRJACafX4d190p97olaa05Hkz_ztUMQP1vNSFe_O4uNueKUMuzDGhag9jwuAxTayhEGQqt0OCVuHI49VGPGWtmrJc"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent text-on-primary">
              <h3 className="font-headline-md text-headline-md mb-2">Koleksi Tas Batik</h3>
              <p className="font-label-caps text-label-caps uppercase tracking-widest opacity-80">
                Lihat Koleksi
              </p>
            </div>
          </Link>
          <Link
            href="/edukasi"
            className="group relative block md:col-span-4 row-span-1 overflow-hidden border border-surface-variant fade-up bg-surface"
          >
            <img
              alt="Proses Pembuatan Batik"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC23Fy9mPRCbbHgyMVmlWgRb3kEt9jSKePzaicFSE0FV9dILan-m4vmttbPClPPIy4Hf5dJ_QCy0NKnJInor80e5KU-TlyyjK1Ct4rsQDuAAaclkrds7d09VCdPWhmzk6lTCutJZTeE45FGZzE9j8KnMZwN9Z6QKymLUvd9uFvpdShqgphO9sqbZTvKkov3I9xdJxPCHnosxXEr8KMLKIkCXRZ9T39sQKGNY0iOK3_4AA_JUnrZULZXELcVD1TJOxHWAxZHafet3G_"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/80 to-transparent text-on-primary">
              <h3 className="font-body-lg text-body-lg mb-1">The Craft</h3>
              <p className="font-label-caps text-label-caps uppercase tracking-widest opacity-80">
                Proses Batik Kami
              </p>
            </div>
          </Link>
          <div className="group relative block md:col-span-4 row-span-1 overflow-hidden border border-surface-variant fade-up bg-surface">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-surface-container-lowest group-hover:bg-surface-container-low transition-colors duration-500">
              <span className="material-symbols-outlined text-4xl text-tertiary-container mb-4">recycling</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Eco Impact</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Setiap pembelian mengurangi limbah dan mendukung pengrajin lokal Indonesia.
              </p>
              <Link
                href="/faq"
                className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 group-hover:text-tertiary-container group-hover:border-tertiary-container transition-colors"
              >
                Tanya Kami
              </Link>
            </div>
          </div>
          <Link
            href="/produk"
            className="group relative block md:col-span-8 row-span-1 overflow-hidden border border-surface-variant fade-up bg-surface"
          >
            <img
              alt="Produk Daur Ulang MAKE BATIK"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0oPUqWOqfv9Tld6yd12RRVUQdgJDgpPm3o64Cooz1pjOjRnW5iddw9uNHTl3qav28c3NPOg1CaNDI65V_XyMCsBbAM-hmuQ_G5CNVWSxlhenSKYLhPwW2DVurd-mGHSMqehu-LtobEp7pdpbyQ_lBfWQWxOH_ejDt7eDeFoK7d1OQAhfqjy6Jgz4McsjsRSXMcghmeQgfusZbfug304hAaVyRfkFtsi7Vx3VdRQ2RPuvAtRh0BlIqAPWgodmjsjhpTe-373t9HfVe"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent text-on-primary">
              <h3 className="font-headline-md text-headline-md mb-2">Earth &amp; Origins</h3>
              <p className="font-label-caps text-label-caps uppercase tracking-widest opacity-80">
                New Arrivals
              </p>
            </div>
          </Link>
        </div>
      </section>

      {/* ─── WHY MAKE BATIK EXISTS ─── */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-background border-t border-outline-variant">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center fade-up">
          <div>
            <span className="font-label-caps text-label-caps text-tertiary-container uppercase tracking-widest mb-4 block">
              Why We Exist
            </span>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-6 leading-tight">
              Why MAKE BATIK Exists
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-8">
              Millions of tons of plastic, textile, and industrial waste are generated every year, while traditional batik continues to face challenges in reaching younger generations. MAKE BATIK combines environmental innovation with Indonesian cultural heritage by transforming waste materials into premium sustainable fashion.
            </p>
            <div className="space-y-4">
              {[
                "Reduces waste entering landfills.",
                "Extends the lifecycle of recycled materials.",
                "Supports local artisans and MSMEs.",
                "Preserves Indonesian batik heritage.",
                "Promotes sustainable fashion.",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[18px] text-tertiary-container flex-shrink-0">check_circle</span>
                  <p className="font-body-md text-body-md text-on-surface-variant">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "recycling", label: "Uses recycled materials", sub: "Circular economy" },
              { icon: "handyman", label: "Handmade craftsmanship", sub: "Artisan quality" },
              { icon: "batik", label: "Authentic batik", sub: "Cultural heritage" },
              { icon: "groups", label: "Supports local communities", sub: "UMKM support" },
              { icon: "eco", label: "Eco-friendly production", sub: "Low carbon footprint" },
              { icon: "star", label: "Unique & exclusive", sub: "Limited editions" },
            ].map((item) => (
              <div
                key={item.label}
                className="border border-outline-variant p-5 flex flex-col gap-2 hover:border-primary transition-colors duration-300 group"
              >
                <span className="material-symbols-outlined text-[24px] text-tertiary-container group-hover:scale-110 transition-transform">{item.icon}</span>
                <p className="font-body-md text-body-md text-primary font-semibold text-[13px] leading-snug">{item.label}</p>
                <p className="font-label-caps text-label-caps text-on-surface-variant text-[10px] uppercase tracking-wider">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── MATERIALS ─── */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-background border-t border-outline-variant">
        <div className="text-center mb-14 fade-up">
          <span className="font-label-caps text-label-caps text-tertiary-container uppercase tracking-widest mb-4 block">Bahan Baku</span>
          <h2 className="font-headline-lg text-headline-lg text-primary">Materials We Use</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px border border-primary fade-up">
          {[
            { name: "Recycled Cement Paper", description: "Processed into durable premium material.", icon: "inventory_2" },
            { name: "Recycled Plastic", description: "Repurposed into valuable fashion components.", icon: "delete_sweep" },
            { name: "Local Weaving Yarn", description: "Supporting Indonesian textile craftsmanship.", icon: "weaving" },
            { name: "Traditional Batik", description: "Handcrafted using authentic batik techniques.", icon: "brush" },
            { name: "Water-Based Top Coat", description: "Eco-friendly finishing for durability.", icon: "water_drop" },
          ].map((mat, i) => (
            <div
              key={mat.name}
              className="bg-surface p-8 flex flex-col gap-4 border-b border-r border-primary hover:bg-surface-container-low transition-colors duration-300 group"
            >
              <span className="material-symbols-outlined text-[32px] text-tertiary-container group-hover:scale-110 transition-transform">{mat.icon}</span>
              <h3 className="font-body-lg text-body-lg text-primary font-semibold leading-snug">{mat.name}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant text-[13px]">{mat.description}</p>
              <span className="font-label-caps text-label-caps text-tertiary-container text-[10px] uppercase tracking-widest">0{i + 1}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ─── FILOSOFI / OUR STORY ─── */}
      <section
        id="filosofi"
        className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-background border-t border-outline-variant scroll-mt-20"
      >
        {/* Philosophy Quote */}
        <div className="fade-up text-center mb-20">
          <span className="font-label-caps text-label-caps text-tertiary-container uppercase tracking-widest mb-4 block">
            Our Philosophy
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary max-w-4xl mx-auto leading-tight mb-6">
            &ldquo;Waste is not the end of a product&apos;s lifecycle—it is the beginning of a new story.&rdquo;
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mx-auto leading-relaxed">
            MAKE BATIK transforms discarded materials into meaningful fashion that combines sustainability, innovation, and Indonesian heritage.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 fade-up">
          <div className="border border-primary p-10 flex flex-col gap-4 relative overflow-hidden group hover:bg-primary hover:text-on-primary transition-all duration-500">
            <span className="material-symbols-outlined text-[32px] text-tertiary-container group-hover:text-on-primary transition-colors">target</span>
            <h3 className="font-headline-md text-headline-md text-primary group-hover:text-on-primary transition-colors">Our Mission</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-on-primary/80 transition-colors leading-relaxed">
              Transforming waste into premium batik fashion while preserving Indonesian culture and protecting the environment.
            </p>
          </div>
          <div className="border border-primary p-10 flex flex-col gap-4 relative overflow-hidden group hover:bg-primary hover:text-on-primary transition-all duration-500">
            <span className="material-symbols-outlined text-[32px] text-tertiary-container group-hover:text-on-primary transition-colors">visibility</span>
            <h3 className="font-headline-md text-headline-md text-primary group-hover:text-on-primary transition-colors">Our Vision</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant group-hover:text-on-primary/80 transition-colors leading-relaxed">
              Become Indonesia&apos;s leading sustainable fashion brand based on circular economy and traditional batik craftsmanship.
            </p>
          </div>
        </div>

        {/* MAKE BATIK vs Conventional Comparison */}
        <div className="fade-up mb-20">
          <h3 className="font-headline-md text-headline-md text-primary text-center mb-10">Why Choose MAKE BATIK</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 border border-primary overflow-hidden">
            {/* MAKE BATIK column */}
            <div>
              <div className="bg-primary text-on-primary px-8 py-5 flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px]" style={{ fontVariationSettings: "'FILL' 1" }}>eco</span>
                <span className="font-label-caps text-label-caps uppercase tracking-widest">MAKE BATIK</span>
              </div>
              {[
                "Uses recycled materials",
                "Handmade craftsmanship",
                "Authentic batik",
                "Supports local communities",
                "Eco-friendly production",
                "Unique and exclusive products",
              ].map((item, i) => (
                <div key={i} className="px-8 py-4 flex items-center gap-3 border-b border-outline-variant last:border-0 hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[16px] text-green-600" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                  <span className="font-body-md text-body-md text-primary">{item}</span>
                </div>
              ))}
            </div>
            {/* Conventional column */}
            <div className="border-l border-primary">
              <div className="bg-surface-container text-on-surface-variant px-8 py-5 flex items-center gap-3">
                <span className="material-symbols-outlined text-[20px]">factory</span>
                <span className="font-label-caps text-label-caps uppercase tracking-widest">Conventional Fashion</span>
              </div>
              {[
                "Uses virgin materials",
                "Mass production",
                "Printed designs",
                "Limited social impact",
                "Higher environmental footprint",
                "Uniform products",
              ].map((item, i) => (
                <div key={i} className="px-8 py-4 flex items-center gap-3 border-b border-outline-variant last:border-0 hover:bg-surface-container-low transition-colors">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant/40">close</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Traditional Batik Process + Environmental Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 fade-up">
          <div className="border border-outline-variant p-10">
            <span className="material-symbols-outlined text-[32px] text-tertiary-container mb-4 block">brush</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Traditional Batik Process</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Every product is handcrafted using authentic Indonesian batik techniques, ensuring exceptional quality, uniqueness, and cultural authenticity.
            </p>
          </div>
          <div className="border border-outline-variant p-10">
            <span className="material-symbols-outlined text-[32px] text-tertiary-container mb-4 block">volunteer_activism</span>
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Our Contribution</h3>
            <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              Every MAKE BATIK product contributes to reducing waste while supporting the circular economy. We do not simply create fashion—we create meaningful impact.
            </p>
          </div>
        </div>

        {/* Marketing messages ticker */}
        <div className="mt-20 border-t border-b border-primary py-6 overflow-hidden fade-up">
          <div className="flex gap-12 whitespace-nowrap animate-marquee">
            {[
              "Every Purchase Gives Waste a Second Life.",
              "Wear the Change.",
              "Fashion with Purpose.",
              "Choose Sustainability. Choose MAKE BATIK.",
              "Small Choices. Big Impact.",
              "Transforming Waste into Timeless Fashion.",
              "Every Purchase Gives Waste a Second Life.",
              "Wear the Change.",
              "Fashion with Purpose.",
              "Choose Sustainability. Choose MAKE BATIK.",
              "Small Choices. Big Impact.",
              "Transforming Waste into Timeless Fashion.",
            ].map((msg, i) => (
              <span key={i} className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest text-[11px] flex-shrink-0 flex items-center gap-6">
                {msg}
                <span className="text-tertiary-container">✦</span>
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20 fade-up">
          <h3 className="font-headline-lg text-headline-lg text-primary mb-4">Be Part of the Change</h3>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-10 max-w-2xl mx-auto">
            Fashion should not only look beautiful but also leave a positive impact for future generations.
          </p>
          <Link
            href="/produk"
            className="inline-flex items-center gap-3 bg-primary text-on-primary px-12 py-5 font-label-caps text-label-caps uppercase tracking-widest hover:bg-transparent hover:text-primary border border-primary transition-all duration-300"
          >
            <span className="material-symbols-outlined text-[18px]">shopping_bag</span>
            Explore Collection
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </section>

      {/* ─── SELLING POINTS STRIP ─── */}
      <section className="bg-primary text-on-primary border-t border-primary py-6 fade-up overflow-hidden">
        <div className="flex gap-12 whitespace-nowrap">
          {[
            "Handmade Premium Quality",
            "Traditional Batik Craftsmanship",
            "Circular Economy",
            "Eco Friendly",
            "Supports Local Artisans",
            "Indonesian Cultural Heritage",
            "Exclusive Limited Products",
            "Handmade Premium Quality",
            "Traditional Batik Craftsmanship",
            "Circular Economy",
            "Eco Friendly",
            "Supports Local Artisans",
            "Indonesian Cultural Heritage",
            "Exclusive Limited Products",
          ].map((sp, i) => (
            <span key={i} className="font-label-caps text-label-caps uppercase tracking-widest text-[11px] opacity-80 flex-shrink-0 flex items-center gap-8">
              {sp}
              <span className="text-tertiary-fixed-dim">✦</span>
            </span>
          ))}
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto bg-background" id="faq">
        <div className="text-center mb-16 fade-up">
          <span className="font-label-caps text-label-caps text-tertiary-container uppercase tracking-widest mb-4 block">
            Pertanyaan Umum
          </span>
          <h2 className="font-headline-lg text-headline-lg text-primary">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="space-y-4 fade-up">
          {FAQ_ITEMS.map((item) => (
            <FaqItem key={item.q} item={item} />
          ))}
        </div>
        <div className="mt-12 text-center fade-up">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary uppercase border-b border-primary pb-1 hover:text-tertiary-container hover:border-tertiary-container transition-colors duration-300"
          >
            Lihat Semua FAQ
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
