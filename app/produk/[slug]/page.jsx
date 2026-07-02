import AppShell from "../../../components/AppShell";
import { PRODUCTS } from "../../../data/products";
import Link from "next/link";

function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: toSlug(p.name) }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => toSlug(p.name) === slug);
  if (!product) return { title: "Produk Tidak Ditemukan" };
  return {
    title: `Make Batik – ${product.name}`,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => toSlug(p.name) === slug);

  if (!product) {
    return (
      <AppShell>
        <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32 text-center">
          <h1 className="font-headline-xl text-primary mb-4">Produk Tidak Ditemukan</h1>
          <Link href="/produk" className="text-primary border-b border-primary font-label-caps">
            ← Kembali ke Produk
          </Link>
        </main>
      </AppShell>
    );
  }

  const waMessage = encodeURIComponent(`Mau Beli\n\n- ${product.name} (${new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(product.price)})\n\nMohon info ketersediaan.`);

  return (
    <AppShell>
      <main className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-20">
        {/* Breadcrumb */}
        <nav className="mb-10 font-label-caps text-label-caps text-on-surface-variant flex items-center gap-2">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/produk" className="hover:text-primary transition-colors">Produk</Link>
          <span>/</span>
          <span className="text-primary">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Product Image */}
          <div className="border border-primary overflow-hidden relative bg-surface-container-low">
            <img
              src={product.image}
              alt={product.name}
              className="w-full aspect-square object-cover"
            />
            {product.badge && (
              <div
                className={`absolute top-6 left-6 border px-4 py-2 font-label-caps text-label-caps text-[11px] ${
                  product.badge === "Best Seller"
                    ? "bg-primary text-on-primary border-primary"
                    : product.badge === "Eco Product"
                    ? "bg-green-700 text-white border-green-700"
                    : "bg-surface text-primary border-primary"
                }`}
              >
                {product.badge}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col gap-8">
            <div>
              <span className="font-label-caps text-label-caps text-green-700 uppercase tracking-widest mb-3 block">
                🌿 Eco-Friendly Product
              </span>
              <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary leading-tight mb-4">
                {product.name}
              </h1>
              <p className="font-headline-lg text-headline-lg text-tertiary-container mb-6">
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  minimumFractionDigits: 0,
                }).format(product.price)}
              </p>
              {product.description && (
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {product.description}
                </p>
              )}
            </div>

            {/* Eco Impact */}
            {product.ecoMessage && (
              <div className="border border-green-700 bg-green-50 p-6">
                <div className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-green-700 text-[20px] mt-0.5">eco</span>
                  <div>
                    <p className="font-label-caps text-label-caps text-green-800 uppercase tracking-widest mb-1">
                      Dampak Lingkungan
                    </p>
                    <p className="font-body-md text-body-md text-green-900">
                      {product.ecoMessage}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={`https://wa.me/6289606883082?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-primary text-on-primary border border-primary py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300 flex justify-center items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                Beli via WhatsApp
              </a>
              <Link
                href="/produk"
                className="flex-1 bg-transparent text-primary border border-primary py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300 flex justify-center items-center gap-2"
              >
                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                Lihat Semua Produk
              </Link>
            </div>

            {/* Care Instructions */}
            {product.care && product.care.length > 0 && (
              <div className="border-t border-outline-variant pt-8">
                <h2 className="font-headline-md text-headline-md text-primary mb-4">
                  Cara Perawatan
                </h2>
                <ul className="space-y-3">
                  {product.care.map((tip, i) => (
                    <li key={i} className="flex items-start gap-3 font-body-md text-body-md text-on-surface-variant">
                      <span className="material-symbols-outlined text-[16px] text-tertiary-container mt-0.5 flex-shrink-0">check_circle</span>
                      {tip}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Why Eco */}
            <div className="border-t border-outline-variant pt-8">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">
                Mengapa Memilih Produk Ini?
              </h2>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: "recycling", label: "Material Daur Ulang" },
                  { icon: "handyman", label: "Handmade Artisan" },
                  { icon: "forest", label: "Jaga Kelestarian Bumi" },
                  { icon: "groups", label: "Dukung UMKM Lokal" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-3 border border-outline-variant p-3">
                    <span className="material-symbols-outlined text-[18px] text-tertiary-container">{item.icon}</span>
                    <span className="font-label-caps text-label-caps text-on-surface-variant text-[10px] uppercase tracking-wider">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </AppShell>
  );
}
