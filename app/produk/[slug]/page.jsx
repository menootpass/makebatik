import Link from 'next/link';
import AppShell from '../../../components/AppShell';
import ProductDetailContent from '../../../components/ProductDetailContent';
import { PRODUCTS } from '../../../data/products';

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({ params }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) {
    return {
      title: 'Produk Tidak Ditemukan',
      description: 'Produk yang Anda cari tidak ditemukan.',
    };
  }

  return {
    title: `${product.name} | Make Batik`,
    description: product.description,
  };
}

export default function ProductDetailPage({ params }) {
  const { slug } = params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return (
      <AppShell>
        <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-24 text-center">
          <h1 className="font-headline-lg text-headline-lg text-primary mb-4">
            Produk tidak ditemukan
          </h1>
          <Link
            href="/products"
            className="text-tertiary-container hover:text-primary transition-colors"
          >
            Kembali ke Koleksi
          </Link>
        </div>
      </AppShell>
    );
  }

  return (
    <AppShell>
      <ProductDetailContent product={product} />
    </AppShell>
  );
}
