'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { formatRupiah } from '../lib/format';

export default function ProductDetailContent({ product }) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variant?.[0] || '');
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      variant: selectedVariant,
      quantity,
    });
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  return (
    <article className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-section-gap">
      {/* Breadcrumb */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest mb-12 group"
      >
        <span className="material-symbols-outlined text-[18px] transform group-hover:-translate-x-1 transition-transform">
          arrow_back
        </span>
        Kembali ke Koleksi
      </Link>

      {/* Main Product Section - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left: Product Images */}
        <div className="flex flex-col gap-6">
          {/* Main Image */}
          <div className="w-full aspect-[3/4] border border-primary overflow-hidden bg-surface-container-low">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover object-center"
            />
          </div>

          {/* Image Gallery Thumbnails (if multiple images exist) */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-3">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  className="aspect-[3/4] border border-primary overflow-hidden hover:opacity-75 transition-opacity"
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col">
          {/* Badge */}
          {product.badge && (
            <div className="inline-flex w-fit mb-6">
              <div
                className={`border border-primary px-3 py-1 font-label-caps text-label-caps text-[10px] ${
                  product.badge === 'Limited Edition'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface text-primary'
                }`}
              >
                {product.badge}
              </div>
            </div>
          )}

          {/* Product Name & Price */}
          <h1 className="font-headline-lg text-headline-lg text-primary mb-2 leading-tight">
            {product.name}
          </h1>
          <p className="font-headline-md text-headline-md text-tertiary-container mb-8">
            {formatRupiah(product.price)}
          </p>

          {/* Description */}
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-8 pb-8 border-b border-outline-variant">
            {product.description}
          </p>

          {/* Material Info */}
          <div className="mb-8 pb-8 border-b border-outline-variant">
            <h3 className="font-body-lg text-body-lg text-primary font-semibold mb-3">
              Material
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {product.material}
            </p>
          </div>

          {/* Variant Selection */}
          {product.variant && product.variant.length > 1 && (
            <div className="mb-8 pb-8 border-b border-outline-variant">
              <h3 className="font-body-lg text-body-lg text-primary font-semibold mb-4">
                Ukuran
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.variant.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedVariant(size)}
                    className={`px-6 py-3 border font-label-caps text-label-caps transition-all ${
                      selectedVariant === size
                        ? 'bg-primary text-on-primary border-primary'
                        : 'border-outline-variant text-primary hover:border-primary'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Add to Cart */}
          <div className="mb-8 pb-8 border-b border-outline-variant">
            <h3 className="font-body-lg text-body-lg text-primary font-semibold mb-4">
              Jumlah
            </h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="w-12 h-12 border border-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors"
              >
                <span className="material-symbols-outlined">remove</span>
              </button>
              <span className="font-headline-md text-headline-md text-primary min-w-8 text-center">
                {quantity}
              </span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="w-12 h-12 border border-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-colors"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary text-on-primary border border-primary px-8 py-4 font-label-caps text-label-caps uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300 mb-6 flex items-center justify-center gap-3"
          >
            <span className="material-symbols-outlined">shopping_bag</span>
            Tambah ke Keranjang
          </button>

          {/* Additional Info */}
          <div className="space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary flex-shrink-0 mt-1">
                local_shipping
              </span>
              <div>
                <p className="font-body-sm text-body-sm text-primary font-semibold">
                  Pengiriman Gratis
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Untuk pembelian di atas Rp 500.000
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary flex-shrink-0 mt-1">
                verified
              </span>
              <div>
                <p className="font-body-sm text-body-sm text-primary font-semibold">
                  Autentik 100%
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Setiap produk adalah karya asli Make Batik
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Care Instructions Section */}
      <section className="mb-16 pb-16 border-t border-primary pt-16">
        <h2 className="font-headline-md text-headline-md text-primary mb-8">
          Panduan Perawatan
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-body-lg text-body-lg text-primary font-semibold mb-4">
              Instruksi Pencucian
            </h3>
            <ul className="space-y-3">
              {product.care.map((instruction, idx) => (
                <li key={idx} className="flex gap-3">
                  <span className="text-tertiary-container font-bold flex-shrink-0">•</span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    {instruction}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-surface-container-low border border-outline-variant p-6">
            <h3 className="font-body-lg text-body-lg text-primary font-semibold mb-3">
              Tips Penyimpanan
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Simpan dalam lemari yang sejuk dan kering. Hindari sinar matahari langsung yang
              dapat memudarkan warna. Gunakan kayu putih atau rempah alami untuk menolak
              serangga, bukan kamper kimia yang dapat merusak serat.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products / CTA */}
      <section className="pt-16 border-t border-primary">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <div>
            <h2 className="font-headline-md text-headline-md text-primary mb-2">
              Jelajahi Koleksi Lainnya
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Temukan lebih banyak mahakarya batik kami yang eksklusif
            </p>
          </div>
          <Link
            href="/products"
            className="px-8 py-3 bg-primary text-on-primary border border-primary font-label-caps text-label-caps uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300 flex items-center gap-2"
          >
            Lihat Semua Produk
            <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
          </Link>
        </div>
      </section>
    </article>
  );
}
