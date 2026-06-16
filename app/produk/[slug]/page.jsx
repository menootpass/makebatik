"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../../../context/CartContext";
import { PRODUCTS } from "../../../data/products";
import { formatRupiah } from "../../../lib/format";
import AppShell from "../../../components/AppShell";

export default function ProductDetailPage({ params }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedVariant, setSelectedVariant] = useState("M");
  const [quantity, setQuantity] = useState(1);
  const [slug, setSlug] = useState("");
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const getParams = async () => {
      const resolvedParams = await params;
      setSlug(resolvedParams.slug);
      const foundProduct = PRODUCTS.find(
        (p) => p.name.toLowerCase().replace(/\s+/g, "-") === resolvedParams.slug
      );
      setProduct(foundProduct);
    };
    getParams();
  }, [params]);

  let addToCart = () => {};
  try {
    const cartContext = useCart();
    addToCart = cartContext.addToCart;
  } catch (e) {
    // useCart may not be available during initial render
  }

  if (!product) {
    if (slug) {
      return (
        <AppShell>
          <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32 text-center">
            <h1 className="font-headline-lg text-headline-lg text-primary mb-4">Produk Tidak Ditemukan</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8">Maaf, produk yang Anda cari tidak tersedia.</p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary uppercase border-b border-primary pb-1 hover:text-tertiary-container hover:border-tertiary-container transition-colors"
            >
              Kembali ke Koleksi
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </Link>
          </div>
        </AppShell>
      );
    }
    return (
      <AppShell>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-32 text-center">
          <p className="font-body-lg text-body-lg text-on-surface-variant">Memuat produk...</p>
        </div>
      </AppShell>
    );
  }

  const images = [product.image, product.image, product.image];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        variant: selectedVariant,
      });
    }
    setQuantity(1);
  };

  return (
    <AppShell navVariant="minimal">
      {/* Product Hero Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-8 md:pt-12 pb-8 md:pb-12 border-b border-primary">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors mb-6 md:mb-12"
        >
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          Back to Collections
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Images Section - Left */}
          <div className="flex flex-col-reverse md:flex-row gap-4 md:gap-6">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-4 md:gap-6 md:w-20">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(idx)}
                  className={`w-20 h-20 md:w-full border transition-all duration-300 overflow-hidden group ${
                    selectedImage === idx
                      ? "border-primary bg-surface"
                      : "border-surface-variant hover:border-primary"
                  }`}
                >
                  <img
                    src={img}
                    alt={`${product.name} ${idx + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </button>
              ))}
            </div>

            {/* Main Image */}
            <div className="flex-1 aspect-[3/4] border border-primary overflow-hidden bg-surface-container-low group">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>

          {/* Product Details Section - Right */}
          <div className="flex flex-col justify-start pt-0 md:pt-4">
            {/* Badge */}
            {product.badge && (
              <div className="inline-block mb-6">
                <span
                  className={`border border-primary px-3 py-1 font-label-caps text-label-caps text-[10px] ${
                    product.badge === "Limited Edition"
                      ? "bg-primary text-on-primary"
                      : "bg-surface text-primary"
                  }`}
                >
                  {product.badge}
                </span>
              </div>
            )}

            {/* Product Name */}
            <h1 className="font-headline-lg text-headline-lg text-primary mb-2 text-balance">
              {product.name}
            </h1>

            {/* Price */}
            <p className="font-headline-md text-headline-md text-tertiary-container mb-8">
              {formatRupiah(product.price)}
            </p>

            {/* Description */}
            <div className="border-t border-primary pt-8 mb-8">
              <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed mb-6">
                Masterpiece batik crafted with meticulous attention to detail. This exquisite piece represents the pinnacle of traditional artistry combined with contemporary sophistication. Hand-drawn using traditional canting tools and dyed with eco-friendly botanical pigments.
              </p>

              {/* Product Details Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Material</p>
                  <p className="font-body-lg text-body-lg text-primary">Premium Silk</p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Technique</p>
                  <p className="font-body-lg text-body-lg text-primary">Hand-Drawn Batik</p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Origin</p>
                  <p className="font-body-lg text-body-lg text-primary">Java, Indonesia</p>
                </div>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant mb-2 uppercase">Care</p>
                  <p className="font-body-lg text-body-lg text-primary">Dry Clean Only</p>
                </div>
              </div>
            </div>

            {/* Size/Variant Selection */}
            <div className="border-t border-primary pt-8 mb-8">
              <label className="font-label-caps text-label-caps text-on-surface-variant mb-4 block uppercase">
                Size
              </label>
              <div className="flex gap-3 mb-8">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedVariant(size)}
                    className={`px-4 py-3 border font-label-caps text-label-caps transition-all duration-300 ${
                      selectedVariant === size
                        ? "bg-primary text-on-primary border-primary"
                        : "border-primary text-primary hover:bg-surface"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>

              {/* Quantity Selection */}
              <div className="mb-8">
                <label className="font-label-caps text-label-caps text-on-surface-variant mb-4 block uppercase">
                  Quantity
                </label>
                <div className="flex items-center gap-4 border border-primary w-fit">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-3 text-primary hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined">remove</span>
                  </button>
                  <span className="font-headline-md text-headline-md text-primary min-w-8 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-3 text-primary hover:bg-surface-container transition-colors"
                  >
                    <span className="material-symbols-outlined">add</span>
                  </button>
                </div>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={handleAddToCart}
                className="w-full bg-primary text-on-primary py-4 font-label-caps text-label-caps uppercase border border-primary hover:bg-on-primary hover:text-primary transition-all duration-300 mb-4"
              >
                Add to Cart
              </button>

              {/* Wishlist Button */}
              <button className="w-full bg-surface text-primary py-4 font-label-caps text-label-caps uppercase border border-primary hover:bg-primary hover:text-on-primary transition-all duration-300">
                Add to Wishlist
              </button>
            </div>

            {/* Shipping & Return Info */}
            <div className="border-t border-primary pt-8 space-y-4">
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-tertiary-container flex-shrink-0">local_shipping</span>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs mb-1">Free Shipping</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">For orders over Rp 1,000,000</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-tertiary-container flex-shrink-0">assignment_return</span>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs mb-1">30-Day Returns</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">Hassle-free returns within 30 days</p>
                </div>
              </div>
              <div className="flex gap-4">
                <span className="material-symbols-outlined text-tertiary-container flex-shrink-0">verified</span>
                <div>
                  <p className="font-label-caps text-label-caps text-on-surface-variant uppercase text-xs mb-1">Authenticity Guaranteed</p>
                  <p className="font-body-md text-body-md text-on-surface-variant">Every piece comes with a certificate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information Tabs */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Craftsmanship */}
          <div className="border-l border-primary pl-6 md:pl-8">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Craftsmanship</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Each piece is meticulously hand-drawn by master artisans using traditional copper canting pens. The intricate patterns are created with precision and patience, making every piece uniquely authentic.
            </p>
          </div>

          {/* Materials */}
          <div className="border-l border-primary pl-6 md:pl-8">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Materials</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              Sourced from the finest suppliers, our premium silk and cotton blends provide an exquisite drape and luxurious feel. Every material is carefully selected for durability and aesthetic appeal.
            </p>
          </div>

          {/* Sustainability */}
          <div className="border-l border-primary pl-6 md:pl-8">
            <h3 className="font-headline-md text-headline-md text-primary mb-4">Sustainability</h3>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              We use eco-friendly botanical dyes sourced sustainably from nature. Our commitment to environmental responsibility ensures that luxury and sustainability go hand in hand.
            </p>
          </div>
        </div>
      </section>

      {/* Related Products Section */}
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-12 md:py-16 border-t border-primary">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-12 text-center">You Might Also Like</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRODUCTS.filter((p) => p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct) => {
              const relatedSlug = relatedProduct.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link key={relatedProduct.id} href={`/produk/${relatedSlug}`}>
                  <div className="group border border-primary bg-surface hover:bg-[#F9F9F9] transition-colors duration-500 flex flex-col relative cursor-pointer">
                    <div className="aspect-[3/4] border-b border-primary overflow-hidden relative bg-surface-container-low">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <div className="p-4 text-center flex-grow flex flex-col justify-center">
                      <h3 className="font-body-lg text-body-lg text-primary mb-2">{relatedProduct.name}</h3>
                      <p className="font-label-caps text-label-caps text-on-surface-variant">
                        {formatRupiah(relatedProduct.price)}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>
      </section>
    </AppShell>
  );
}
