import AppShell from "../../components/AppShell";
import ProductCard from "../../components/ProductCard";
import { PRODUCTS } from "../../data/products";

export const metadata = {
  title: "Make Batik - Koleksi Produk Ramah Lingkungan",
  description:
    "Produk fashion upcycled dari limbah kertas semen bermotif batik. Setiap pembelian membantu menjaga bumi dan mengurangi karbon.",
};

export default function ProductsPage() {
  return (
    <AppShell footerVariant="products">
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-16 md:py-24 border-b border-primary">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-center">
          <div className="lg:col-span-5 order-2 lg:order-1 mt-12 lg:mt-0 pr-0 lg:pr-12">
            <span className="font-label-caps text-label-caps text-tertiary-container mb-6 block">
              Fashion dari Limbah, untuk Bumi
            </span>
            <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary leading-tight mb-8">
              Beli Satu, Jaga Bumi.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">
              Setiap produk kami dibuat dari limbah kertas semen yang diubah menjadi fashion berkelas bermotif batik. Membeli produk ini bukan sekadar berbelanja — ini adalah pilihan nyata untuk mengurangi limbah, menekan jejak karbon, dan melestarikan bumi.
            </p>
            <div className="space-y-6">
              {[
                {
                  icon: "recycling",
                  title: "Upcycled dari Limbah Kertas Semen",
                  desc: "Kami mengubah kantong semen bekas yang terbuang menjadi produk fashion berkualitas tinggi.",
                },
                {
                  icon: "eco",
                  title: "Kurangi Jejak Karbon",
                  desc: "Setiap produk yang Anda beli menyelamatkan material dari tempat pembuangan akhir dan mengurangi emisi.",
                },
                {
                  icon: "forest",
                  title: "Lestarikan Bumi untuk Generasi Depan",
                  desc: "Pilihan fashion yang bertanggung jawab adalah investasi terbaik untuk anak cucu kita.",
                },
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
              alt="Produk fashion dari limbah kertas semen"
              className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out"
              src="/handbag_women.png"
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
            <h2 className="font-headline-lg text-headline-lg text-primary mb-2">Koleksi Produk Kami</h2>
            <p className="font-body-md text-body-md text-on-surface-variant max-w-xl">
              Pilihan produk fashion upcycled dari limbah kertas semen bermotif batik. Setiap pembelian = satu langkah nyata menjaga bumi.
            </p>
          </div>
          <div className="flex gap-6 font-label-caps text-label-caps">
            <button type="button" className="text-primary border-b border-primary pb-1">Semua Produk</button>
            <button type="button" className="text-on-surface-variant hover:text-primary transition-colors">Tas</button>
            <button type="button" className="text-on-surface-variant hover:text-primary transition-colors">Aksesori</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 border-l border-t border-primary">
          {PRODUCTS.slice(0, 3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}

          <div className="col-span-1 md:col-span-2 lg:col-span-2 border-r border-b border-primary bg-surface flex flex-col justify-center items-center p-12 text-center border-grid-item relative overflow-hidden group">
            <div
              className="absolute inset-0 opacity-5 pointer-events-none"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(45deg, #000 25%, transparent 25%, transparent 75%, #000 75%, #000), repeating-linear-gradient(45deg, #000 25%, #fbf9f9 25%, #fbf9f9 75%, #000 75%, #000)",
                backgroundPosition: "0 0, 10px 10px",
                backgroundSize: "20px 20px",
              }}
            />
            <span
              className="material-symbols-outlined text-[48px] text-tertiary-container mb-6 opacity-80"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              eco
            </span>
            <h3 className="font-headline-lg text-headline-lg text-primary leading-tight mb-6 max-w-lg z-10">
              &ldquo;Setiap produk yang Anda pilih adalah suara nyata untuk bumi yang lebih bersih.&rdquo;
            </h3>
            <p className="font-label-caps text-label-caps text-on-surface-variant z-10 block">
              Make Batik — Limbah Jadi Karya
            </p>
          </div>
          {PRODUCTS.slice(3).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        {/* Care Tips Section */}
        <div className="mt-20 border border-primary p-10 md:p-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4 text-center">
            Cara Merawat Produk Anda
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant text-center mb-10 max-w-2xl mx-auto">
            Produk kami terbuat dari kertas semen daur ulang yang kuat namun tetap memerlukan perawatan tepat agar tahan lama dan terus tampil indah.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: "water_drop", title: "Hindari Air", desc: "Jauhkan dari hujan dan paparan air langsung untuk menjaga ketahanan material." },
              { icon: "light_mode", title: "Simpan di Tempat Kering", desc: "Simpan di ruangan sejuk dan tidak lembab agar produk tetap awet." },
              { icon: "cleaning_services", title: "Bersihkan dengan Lembut", desc: "Gunakan kain bersih dan kering untuk membersihkan noda ringan." },
              { icon: "inventory_2", title: "Simpan dengan Benar", desc: "Masukkan ke dust bag atau kotak saat tidak digunakan agar bentuk terjaga." },
            ].map((tip) => (
              <div key={tip.title} className="flex flex-col items-center text-center gap-3 group">
                <div className="w-12 h-12 border border-primary flex items-center justify-center group-hover:bg-primary group-hover:text-on-primary transition-colors duration-300">
                  <span className="material-symbols-outlined">{tip.icon}</span>
                </div>
                <h4 className="font-body-lg text-body-lg text-primary font-semibold">{tip.title}</h4>
                <p className="font-body-md text-body-md text-on-surface-variant">{tip.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AppShell>
  );
}
