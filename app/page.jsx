"use client";

import Link from "next/link";
import { useEffect } from "react";
import AppShell from "../components/AppShell";

const FAQ_ITEMS = [
  {
    q: "What is 'Batik Tulis'?",
    a: "Batik Tulis is the highest form of Batik artistry, where the intricate patterns are drawn entirely by hand using a 'canting' (a traditional copper pen filled with hot wax). This meticulous process ensures no two pieces are exactly alike, embodying true artisanal exclusivity.",
  },
  {
    q: "How should I care for my Make Batik garments?",
    a: "To preserve the rich dyes and delicate fibers, we recommend dry cleaning only for our silk pieces. For cotton blends, gentle hand washing in cold water using a mild, specialized lerak detergent is advised. Never dry in direct sunlight.",
  },
  {
    q: "Do you offer international shipping?",
    a: "Yes, we cater to a global clientele. We offer secure, tracked express shipping worldwide via our premium courier partners to ensure your piece arrives safely.",
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
      <section className="relative min-h-[90vh] flex items-center justify-center bg-primary overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-60">
          <img
            alt="Make Batik Luxury Campaign"
            className="w-full h-full object-cover object-center"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAVcgZ1lJ6hWRNQJW-26CJcRXEqeWPbBmKyatlYL1tvnD3vUBOgzp4BwiPfqKPLVNVygGJ-X8osVr6clraApasW6meam5MwaubgGwmWc-37tJNQ_W1uO4AqsfTxKSPU-IcwS84Qv8ZV8FPv8j7UyAKkhLdQYk96K-y49c0KApDX9cdBXex9etWXmoCvJM2V_Z6d5IQpQyHjbCodVF82Rf96BmXcvdIVT2UTV2AbpGQCN4vXbBz_5q84TTfhEE4EfMZpuAOaGCYHDrym"
          />
        </div>
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-primary via-primary/50 to-transparent" />
        <div className="relative z-10 text-center px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto fade-up">
          <p className="font-label-caps text-label-caps text-tertiary-fixed-dim uppercase tracking-[0.2em] mb-6">
            Indonesian Heritage, Reimagined.
          </p>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-on-primary mb-8 max-w-4xl mx-auto leading-tight">
            The Art of Quiet Luxury in Every Thread.
          </h1>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12">
            <Link
              href="/produk"
              className="px-8 py-4 bg-on-primary text-primary font-label-caps text-label-caps uppercase border border-on-primary hover:bg-transparent hover:text-on-primary transition-all duration-300 w-full sm:w-auto"
            >
              Explore Collection
            </Link>
            <Link
              href="/filosofi"
              className="px-8 py-4 bg-transparent text-on-primary font-label-caps text-label-caps uppercase border border-on-primary hover:border-tertiary-fixed-dim hover:text-tertiary-fixed-dim transition-all duration-300 w-full sm:w-auto"
            >
              Discover Our Philosophy
            </Link>
          </div>
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-background">
        <div className="mb-16 text-center fade-up">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Curated Elegance</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">
            Discover pieces that bridge the gap between ancestral artistry and contemporary high fashion.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter auto-rows-[300px] md:auto-rows-[400px]">
          <Link
            href="/produk"
            className="group relative block md:col-span-8 row-span-1 overflow-hidden border border-surface-variant fade-up bg-surface"
          >
            <img
              alt="Batik Blazer"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwKshLRV3omZlOb75YbP6WexylRvFmGCjafr5A2O8-hpmlz8-LaSKP7I_MzaYkWdyKqzr2ni-ByWTC1IMFkYzVpflBlTr3sudWgtxMcem3fQoi2mk2-xmm4n5NOh2BGWoU9q5Qidb1ea-CPKhYr_YPfM7w9AI6V4DrlTn4HmVlxhm3EPTTA9dqRJACafX4d190p97olaa05Hkz_ztUMQP1vNSFe_O4uNueKUMuzDGhag9jwuAxTayhEGQqt0OCVuHI49VGPGWtmrJc"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-primary/80 to-transparent text-on-primary">
              <h3 className="font-headline-md text-headline-md mb-2">The Monorome Series</h3>
              <p className="font-label-caps text-label-caps uppercase tracking-widest opacity-80">
                View Collection
              </p>
            </div>
          </Link>
          <Link
            href="/edukasi"
            className="group relative block md:col-span-4 row-span-1 overflow-hidden border border-surface-variant fade-up bg-surface"
          >
            <img
              alt="Batik Process"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCC23Fy9mPRCbbHgyMVmlWgRb3kEt9jSKePzaicFSE0FV9dILan-m4vmttbPClPPIy4Hf5dJ_QCy0NKnJInor80e5KU-TlyyjK1Ct4rsQDuAAaclkrds7d09VCdPWhmzk6lTCutJZTeE45FGZzE9j8KnMZwN9Z6QKymLUvd9uFvpdShqgphO9sqbZTvKkov3I9xdJxPCHnosxXEr8KMLKIkCXRZ9T39sQKGNY0iOK3_4AA_JUnrZULZXELcVD1TJOxHWAxZHafet3G_"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/80 to-transparent text-on-primary">
              <h3 className="font-body-lg text-body-lg mb-1">The Craft</h3>
              <p className="font-label-caps text-label-caps uppercase tracking-widest opacity-80">
                Our Process
              </p>
            </div>
          </Link>
          <div className="group relative block md:col-span-4 row-span-1 overflow-hidden border border-surface-variant fade-up bg-surface">
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-surface-container-lowest group-hover:bg-surface-container-low transition-colors duration-500">
              <span className="material-symbols-outlined text-4xl text-tertiary-container mb-4">diamond</span>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">Bespoke</h3>
              <p className="font-body-md text-body-md text-on-surface-variant mb-6">
                Commission a unique piece tailored to your exact measurements and aesthetic preferences.
              </p>
              <Link
                href="/faq"
                className="font-label-caps text-label-caps text-primary border-b border-primary pb-1 group-hover:text-tertiary-container group-hover:border-tertiary-container transition-colors"
              >
                Inquire Now
              </Link>
            </div>
          </div>
          <Link
            href="/produk"
            className="group relative block md:col-span-8 row-span-1 overflow-hidden border border-surface-variant fade-up bg-surface"
          >
            <img
              alt="Earth Tones Collection"
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

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-3xl mx-auto bg-background" id="faq">
        <div className="text-center mb-16 fade-up">
          <span className="font-label-caps text-label-caps text-tertiary-container uppercase tracking-widest mb-4 block">
            Inquiries
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
            View All FAQs
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </div>
      </section>
    </AppShell>
  );
}
