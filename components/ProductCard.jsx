"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import { formatRupiah } from "../lib/format";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

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

  const slug = product.name.toLowerCase().replace(/\s+/g, "-");

  return (
    <Link href={`/produk/${slug}`}>
      <div className="group border-r border-b border-primary bg-surface hover:bg-[#F9F9F9] transition-colors duration-500 flex flex-col relative border-grid-item cursor-pointer">
        <div
          className="border-b border-primary overflow-hidden relative bg-surface-container-low flex items-center justify-center"
          style={{
            aspectRatio: "3 / 4",
            backgroundImage: `url('${product.image}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundColor: "#f5f3f3",
          }}
        >
          <button
            type="button"
            className="opacity-0 group-hover:opacity-100 bg-surface text-primary border border-primary px-8 py-3 font-label-caps text-label-caps transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-primary hover:text-on-primary"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
          >
            View Product
          </button>
          {product.badge && (
            <div
              className={`absolute top-4 left-4 border border-primary px-3 py-1 font-label-caps text-label-caps text-[10px] ${
                product.badge === "Limited Edition"
                  ? "bg-primary text-on-primary"
                  : "bg-surface text-primary"
              }`}
            >
              {product.badge}
            </div>
          )}
        </div>
        <div className="p-6 text-center flex-grow flex flex-col justify-center relative">
          <h3 className="font-headline-md text-headline-md text-primary text-[24px] mb-3">
            {product.name}
          </h3>
          <p className="font-label-caps text-label-caps text-on-surface-variant tracking-widest">
            {formatRupiah(product.price)}
          </p>
          <button
            type="button"
            onClick={handleAdd}
            className="absolute bottom-0 left-0 w-full bg-primary text-on-primary py-3 font-label-caps text-label-caps opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 transition-all duration-300 flex justify-center items-center gap-2"
          >
            Add to Cart
            <span className="material-symbols-outlined text-[16px]">add</span>
          </button>
        </div>
      </div>
    </Link>
  );
}
