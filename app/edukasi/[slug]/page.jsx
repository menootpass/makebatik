import Link from "next/link";
import { notFound } from "next/navigation";
import AppShell from "../../../components/AppShell";
import { getAllSlugs, getArticleBySlug } from "../../../lib/edukasi";

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return { title: "Artikel Tidak Ditemukan" };
  return {
    title: `${article.title} — Make Batik`,
    description: article.excerpt,
  };
}

export default async function ArtikelPage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <AppShell>
      <article className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-section-gap">
        <Link
          href="/edukasi"
          className="inline-flex items-center gap-2 font-label-caps text-label-caps text-on-surface-variant hover:text-primary transition-colors uppercase tracking-widest mb-12 group"
        >
          <span className="material-symbols-outlined text-[18px] transform group-hover:-translate-x-1 transition-transform">
            arrow_back
          </span>
          Kembali ke Edukasi
        </Link>

        <header className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-label-caps text-label-caps text-tertiary-container uppercase tracking-widest">
              {article.category}
            </span>
            <span className="w-4 h-px bg-outline-variant" />
            <span className="font-label-caps text-label-caps text-on-surface-variant">
              {article.reading_time}
            </span>
          </div>
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary leading-tight mb-8">
            {article.title}
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        <div className="w-full aspect-[21/9] border border-primary overflow-hidden mb-16">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-3xl space-y-12">
          {article.content.map((section, i) => (
            <section key={section.section_title} className="border-t border-outline-variant pt-10 first:border-t-0 first:pt-0">
              <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-4 block">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="font-headline-md text-headline-md text-primary mb-6">
                {section.section_title}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                {section.text}
              </p>
            </section>
          ))}
        </div>

        <div className="max-w-3xl mt-20 pt-10 border-t border-primary flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
          <p className="font-body-md text-body-md text-on-surface-variant">
            Terima kasih telah membaca. Jelajahi koleksi dan workshop kami.
          </p>
          <div className="flex gap-4">
            <Link
              href="/edukasi/workshop"
              className="px-6 py-3 border border-primary font-label-caps text-label-caps uppercase tracking-widest text-primary hover:bg-primary hover:text-on-primary transition-all duration-300"
            >
              Workshop
            </Link>
            <Link
              href="/products"
              className="px-6 py-3 bg-primary text-on-primary border border-primary font-label-caps text-label-caps uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300"
            >
              Koleksi
            </Link>
          </div>
        </div>
      </article>
    </AppShell>
  );
}
