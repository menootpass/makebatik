import AppShell from "../../components/AppShell";
import ProductCard from "../../components/ProductCard";
import { PRODUCTS } from "../../data/products";

export const metadata = {
  title: "Make Batik - Produk",
};

export default function ProductsPage() {
  return (
    <AppShell footerVariant="products">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 mt-12 lg:mt-0 pr-0 lg:pr-12">
            <span className="font-label-caps text-label-caps text-tertiary-container mb-6 block">
              The Essence of Heritage
            </span>
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary leading-tight mb-8">
              Masterpieces in Every Thread.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              Discover the unparalleled craftsmanship of Make Batik. Every piece is a testament to our heritage, crafted with precision, patience, and a commitment to sustainable luxury.
            </p>
            <div className="space-y-6">
              {[
                { icon: "brush", title: "Hand-painted by Masters", desc: "Each motif is meticulously drawn using traditional canting tools." },
                { icon: "all_inclusive", title: "Premium Silk Canvas", desc: "Woven from the finest threads for an exquisite drape and feel." },
                { icon: "eco", title: "Eco-friendly Botanical Dyes", desc: "Sourced sustainably from nature, ensuring deep, lasting colors without harsh chemicals." },
              ].map((item, i) => (
                <div
                  key={item.title}
                  className={`flex items-start gap-4 border-t border-outline-variant pt-6 group ${i === 2 ? "border-b pb-6" : ""}`}
                >
                  <div className="w-10 h-10 border border-primary flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                    <span className="material-symbols-outlined">{item.icon}</span>
                  </div>
                  <div>
                    <h3 className="font-body-lg text-body-lg text-primary font-semibold mb-1">{item.title}</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-7 order-1 lg:order-2 h-[500px] md:h-[700px] border border-primary relative overflow-hidden group">
            <img
              alt="Artisan making batik"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5xZwkLfnsBHe7lJSPe3WlOYUu8bFWTIy6i0iXxfd_0VqYe5JgZM5dCgPS7xVezrpi3LjPZ23H3t9BKLaAQ9Y-iRR2h_NnKcBihrjhGyxUjUOB8ATz5wBia7twMmkcZtNiGQiF7sTRfkD5VabNKII2cWRYoY2nWdF3NjNi-Y8OuM5Y2MVpzldE-hLoQ2iVe0usQlMDd9wcaf5494jC5u4ikkESx6UD3sSsIFvQ3o0mWtkvjcDPcSpP32RHr8tsVAKe7tskTyG-ji1v"
            />
            <div className="absolute bottom-0 right-0 bg-surface p-6 border-t border-l border-primary">
              <span className="font-headline-md text-headline-md text-primary">Est. 2024</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-gap">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-primary pb-6 mb-12 gap-4">
          <div>
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Eksklusif Koleksi</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Curated selections of our finest hand-drawn and stamped batik, designed for the modern connoisseur.
            </p>
          </div>
          <div className="flex gap-6 font-label-caps text-label-caps">
            <button type="button" className="text-primary border-b border-primary pb-1">All Collections</button>
            <button type="button" className="text-on-surface-variant hover:text-primary transition-colors">Silk</button>
            <button type="button" className="text-on-surface-variant hover:text-primary transition-colors">Cotton</button>
            <div className="w-px bg-outline-variant mx-2" />
            <button type="button" className="text-primary flex items-center gap-1 hover:text-tertiary-container transition-colors">
              Sort <span className="material-symbols-outlined text-[16px]">expand_more</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l border-t border-primary">
          {PRODUCTS.slice(0, 4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 border-r border-b border-primary bg-yellow-50 flex flex-col justify-center items-center p-12 text-center border-grid-item relative overflow-hidden group">
            <span
              className="material-symbols-outlined text-[48px] text-tertiary-container mb-6 opacity-80"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              format_quote
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary leading-tight mb-6 max-w-lg z-10">
              &ldquo;True luxury lies in the time, soul, and heritage woven into every pattern.&rdquo;
            </h3>
            <p className="font-label-caps text-label-caps text-on-surface-variant z-10 block">
              Make Batik Design Studio
            </p>
          </div>
          {PRODUCTS.slice(4).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <button
            type="button"
            className="bg-surface text-primary border border-primary px-12 py-4 font-label-caps text-label-caps hover:bg-primary hover:text-on-primary transition-all duration-300 flex items-center gap-3"
          >
            Load More Collections
            <span className="material-symbols-outlined text-[18px]">arrow_downward</span>
          </button>
        </div>
      </section>
    </AppShell>
  );
}
