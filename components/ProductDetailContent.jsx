'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useCart } from '../context/CartContext';
import { formatRupiah } from '../lib/format';
import { PRODUCTS } from '../data/products';

export default function ProductDetailContent({ product }) {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(product?.variant?.[0] || '');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIdx, setSelectedImageIdx] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      variant: selectedVariant,
      quantity,
    });
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const handleQuantityChange = (change) => {
    setQuantity(Math.max(1, quantity + change));
  };

  const currentImage = product?.gallery?.[selectedImageIdx] || product?.image;
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 3);

  return (
    <article className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-6 md:pt-16 pb-12 md:pb-section-gap">
      {/* Breadcrumb */}
      <Link
        href="/products"
        className="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest mb-8 md:mb-12 group"
      >
        <span className="material-symbols-outlined text-[18px] transform group-hover:-translate-x-1 transition-transform">
          arrow_back
        </span>
        Kembali ke Koleksi
      </Link>

      {/* Main Product Section - Two Column Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 mb-12 md:mb-16">
        {/* Left: Product Images */}
        <div className="flex flex-col gap-4 md:gap-6">
          {/* Main Image */}
          <div className="w-full aspect-[3/4] border border-primary overflow-hidden bg-surface-container-low group cursor-zoom-in">
            <img
              src={currentImage}
              alt={product.name}
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Image Gallery Thumbnails */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="grid grid-cols-4 gap-2 md:gap-3">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIdx(idx)}
                  className={`aspect-[3/4] border overflow-hidden transition-all ${
                    selectedImageIdx === idx
                      ? 'border-tertiary-container border-2'
                      : 'border-primary hover:border-tertiary-container'
                  }`}
                >
                  <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col gap-6 md:gap-8">
          {/* Badge */}
          {product.badge && (
            <div className="inline-flex w-fit">
              <div
                className={`border border-primary px-4 py-2 font-label-caps text-label-caps text-[11px] tracking-widest ${
                  product.badge === 'Limited Edition'
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface text-primary'
                }`}
              >
                {product.badge}
              </div>
            </div>
          )}

          {/* Title & Price */}
          <div>
            <h1 className="font-headline-lg text-headline-lg md:text-headline-xl mb-3 md:mb-4 text-balance">
              {product.name}
            </h1>
            <p className="font-body-lg text-body-lg text-tertiary">
              {formatRupiah(product.price)}
            </p>
          </div>

          {/* Description */}
          {product.description && (
            <div className="py-4 md:py-6 border-y border-primary">
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {product.description}
              </p>
            </div>
          )}

          {/* Material Info */}
          {product.material && (
            <div className="space-y-2">
              <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant">
                Material
              </p>
              <p className="font-body-md text-body-md">
                {product.material}
              </p>
            </div>
          )}

          {/* Size Selection */}
          <div className="space-y-3">
            <label className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant block">
              Ukuran / Variant
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-2 md:gap-3">
              {product.variant?.map((variant) => (
                <button
                  key={variant}
                  onClick={() => setSelectedVariant(variant)}
                  className={`py-3 px-4 border transition-all font-body-md text-body-md ${
                    selectedVariant === variant
                      ? 'bg-primary text-on-primary border-primary'
                      : 'bg-surface border-primary text-on-surface hover:bg-surface-container'
                  }`}
                >
                  {variant}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selection */}
          <div className="space-y-3">
            <label className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant block">
              Kuantitas
            </label>
            <div className="flex items-center border border-primary w-fit">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="px-4 py-2 hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined">remove</span>
              </button>
              <div className="px-6 py-2 min-w-16 text-center font-body-md text-body-md">
                {quantity}
              </div>
              <button
                onClick={() => handleQuantityChange(1)}
                className="px-4 py-2 hover:bg-surface-container transition-colors"
              >
                <span className="material-symbols-outlined">add</span>
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className={`w-full py-4 px-6 border border-primary font-label-caps text-label-caps uppercase tracking-widest transition-all duration-300 ${
              addedToCart
                ? 'bg-primary text-on-primary'
                : 'bg-surface text-primary hover:bg-primary hover:text-on-primary'
            }`}
          >
            {addedToCart ? '✓ Ditambahkan ke Keranjang' : 'Tambah ke Keranjang'}
          </button>

          {/* Shipping & Returns */}
          <div className="space-y-4 pt-4 border-t border-primary">
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary flex-shrink-0">local_shipping</span>
              <div>
                <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-1">
                  Pengiriman Gratis
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Untuk pembelian di atas Rp 500.000
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="material-symbols-outlined text-primary flex-shrink-0">assignment_return</span>
              <div>
                <p className="font-label-caps text-label-caps uppercase tracking-widest text-on-surface-variant mb-1">
                  Pengembalian 30 Hari
                </p>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Pengembalian gratis untuk semua pesanan
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Care Instructions */}
      {product.care && product.care.length > 0 && (
        <section className="mb-16 py-8 md:py-12 border-t border-b border-primary">
          <h2 className="font-headline-md text-headline-md md:text-headline-lg mb-6 md:mb-8">
            Perawatan Produk
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {product.care.map((instruction, idx) => (
              <div key={idx} className="flex gap-4">
                <span className="material-symbols-outlined text-tertiary flex-shrink-0 mt-1">
                  {idx === 0 ? 'water_drop' : idx === 1 ? 'do_not_disturb' : idx === 2 ? 'light_mode' : 'local_fire_department'}
                </span>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {instruction}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Product Story / Additional Info */}
      <section className="mb-16 py-8 md:py-12">
        <h2 className="font-headline-md text-headline-md md:text-headline-lg mb-6 md:mb-8">
          Kisah di Balik Produk
        </h2>
        <div className="space-y-4 md:space-y-6">
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Setiap batik adalah karya seni yang dibuat dengan kesabaran dan keahlian turun-temurun. Produk kami menggunakan teknik tradisional yang telah diwariskan selama berabad-abad, namun dikombinasikan dengan desain kontemporer untuk memenuhi selera modern.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Kami berkomitmen untuk menjaga kelestarian batik tradisional Indonesia dengan mendukung pengrajin lokal dan menggunakan bahan-bahan berkualitas premium. Setiap pembelian Anda membantu melestarikan warisan budaya Indonesia yang berharga.
          </p>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-8 md:py-12 border-t border-primary">
          <h2 className="font-headline-md text-headline-md md:text-headline-lg mb-8 md:mb-12">
            Produk Lainnya
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {relatedProducts.map((relatedProduct) => (
              <Link key={relatedProduct.id} href={`/produk/${relatedProduct.slug}`}>
                <div className="group">
                  <div className="w-full aspect-[3/4] overflow-hidden bg-surface-container-low mb-4">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <h3 className="font-body-lg text-body-lg mb-2 group-hover:text-tertiary transition-colors">
                    {relatedProduct.name}
                  </h3>
                  <p className="font-label-caps text-label-caps text-tertiary">
                    {formatRupiah(relatedProduct.price)}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
