"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { formatRupiah } from "../lib/format";

// Build a URL-safe slug from product name
function toSlug(name) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const slug = toSlug(product.name);

  const handleAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      variant: product.variant,
    });
  };

  return (
    <Link
      href={`/produk/${slug}`}
      className="group border-r border-b border-primary bg-surface transition-colors duration-500 flex flex-col relative border-grid-item"
    >
      {/* Image area */}
      <div className="aspect-[3/4] border-b border-primary overflow-hidden relative bg-surface-container-low">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />

        {/* Desktop hover overlay — eco message only, no background fill */}
        <div className="absolute inset-0 hidden md:flex flex-col items-center justify-center px-6 py-4 opacity-0 group-hover:opacity-100 transition-all duration-300">
          {product.ecoMessage && (
            <div className="bg-surface/90 border border-primary px-4 py-3 text-center mb-3 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
              <p className="text-primary text-[11px] font-label-caps leading-snug">
                🌿 {product.ecoMessage}
              </p>
            </div>
          )}
        </div>

        {product.badge && (
          <div
            className={`absolute top-4 left-4 border px-3 py-1 font-label-caps text-label-caps text-[10px] ${
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

      {/* Info area */}
      <div className="p-6 text-center flex-grow flex flex-col justify-between relative">
        <div>
          <h3 className="font-headline-md text-headline-md text-primary text-[20px] md:text-[24px] mb-2">
            {product.name}
          </h3>
          {product.description && (
            <p className="font-body-md text-body-md text-on-surface-variant text-[12px] leading-snug mb-3 line-clamp-2">
              {product.description}
            </p>
          )}
        </div>
        <div className="pb-10">
          <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">
            {formatRupiah(product.price)}
          </p>
        </div>

        {/* Add to cart — slides up on hover (desktop) */}
        <button
          type="button"
          onClick={handleAdd}
          className="absolute bottom-0 left-0 w-full bg-primary text-on-primary py-3 font-label-caps text-label-caps opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 flex justify-center items-center gap-2"
        >
          Tambah ke Keranjang
          <span className="material-symbols-outlined text-[16px]">add</span>
        </button>
      </div>
    </Link>
  );
}
