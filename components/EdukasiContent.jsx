"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  ARTICLES,
  CATEGORY_FILTERS,
  FEATURED_SLUG,
  searchArticles,
} from "../lib/edukasi";

function ArticleCard({ article }) {
  return (
    <Link
      href={`/edukasi/${article.slug}`}
      className="group flex flex-col border border-primary bg-surface transition-colors hover:bg-[#f9f9f9]"
    >
      <div className="h-64 border-b border-primary overflow-hidden">
        <img
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          src={article.image}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-4">
          {article.category}
        </span>
        <h3 className="font-body-lg text-body-lg font-medium text-primary mb-3">
          {article.title}
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
          {article.excerpt}
        </p>
        <div className="mt-auto pt-4 border-t border-secondary-container flex justify-between items-center">
          <span className="font-label-caps text-label-caps text-primary group-hover:text-tertiary-container transition-colors">
            Read Guide
          </span>
          <span className="material-symbols-outlined text-outline group-hover:text-tertiary-container transition-colors">
            arrow_outward
          </span>
        </div>
      </div>
    </Link>
  );
}

function FeaturedArticle({ article }) {
  return (
    <Link
      href={`/edukasi/${article.slug}`}
      className="group block border border-primary bg-surface transition-colors hover:bg-[#f9f9f9]"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        <div className="relative h-[400px] lg:h-auto overflow-hidden border-b lg:border-b-0 lg:border-r border-primary">
          <img
            alt={article.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            src={article.image}
          />
        </div>
        <div className="p-8 md:p-16 flex flex-col justify-center">
          <div className="mb-6 flex items-center gap-2">
            <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest">
              {article.category}
            </span>
            <span className="w-4 h-px bg-outline" />
            <span className="font-label-caps text-label-caps text-outline">
              {article.reading_time}
            </span>
          </div>
          <h2 className="font-headline-md text-headline-md text-primary mb-6 group-hover:text-secondary transition-colors">
            {article.title}
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8 line-clamp-3">
            {article.excerpt}
          </p>
          <div className="mt-auto">
            <span className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary uppercase tracking-widest pb-1 border-b border-primary group-hover:border-tertiary-container group-hover:text-tertiary-container transition-all">
              Read Article
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default function EdukasiContent() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");

  const filtered = useMemo(
    () => searchArticles(ARTICLES, query, category),
    [query, category]
  );

  const featured = filtered.find((a) => a.slug === FEATURED_SLUG);
  const gridArticles = filtered.filter((a) => a.slug !== FEATURED_SLUG);
  const hasActiveFilter = query.trim() !== "" || category !== "all";

  return (
    <>
      <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pt-16 pb-section-gap">
        <div className="max-w-3xl">
          <h1 className="font-headline-xl-mobile md:font-headline-xl text-headline-xl-mobile md:text-headline-xl text-primary mb-6">
            Preserving the Heritage
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant mb-12 max-w-2xl">
            Immerse yourself in the rich history, intricate processes, and essential care techniques of authentic Indonesian Batik. A curated journal for the discerning collector.
          </p>

          <div className="flex flex-col md:flex-row gap-6 items-end border-b border-primary pb-4">
            <div className="flex-grow w-full relative group">
              <label className="sr-only" htmlFor="search">
                Search articles
              </label>
              <input
                className="w-full bg-transparent border-none p-0 py-2 pr-10 font-body-md text-primary placeholder:text-outline focus:ring-0 focus:outline-none transition-colors group-hover:bg-[#f9f9f9] px-2"
                id="search"
                placeholder="Search topics, care guides, history..."
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
              {query && (
                <button
                  type="button"
                  onClick={() => setQuery("")}
                  className="absolute right-8 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors"
                  aria-label="Clear search"
                >
                  <span className="material-symbols-outlined text-[18px]">close</span>
                </button>
              )}
              <span className="material-symbols-outlined absolute right-2 top-1/2 -translate-y-1/2 text-primary pointer-events-none opacity-50">
                search
              </span>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              {CATEGORY_FILTERS.map((f) => (
                <button
                  key={f.id}
                  type="button"
                  onClick={() => setCategory(f.id)}
                  className={`font-label-caps text-label-caps uppercase tracking-widest pb-1 border-b transition-colors ${
                    category === f.id
                      ? "text-primary border-primary"
                      : "text-on-surface-variant border-transparent hover:text-primary hover:border-primary"
                  }`}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {hasActiveFilter && (
            <p className="font-label-caps text-label-caps text-on-surface-variant mt-4 uppercase tracking-widest">
              {filtered.length} artikel ditemukan
              {query && (
                <>
                  {" "}
                  untuk &ldquo;<span className="text-primary">{query}</span>&rdquo;
                </>
              )}
            </p>
          )}
        </div>
      </section>

      {filtered.length === 0 ? (
        <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
          <div className="border border-primary bg-surface p-16 text-center">
            <span className="material-symbols-outlined text-5xl text-outline mb-6 block">
              search_off
            </span>
            <h2 className="font-headline-md text-headline-md text-primary mb-3">
              Tidak ada artikel ditemukan
            </h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-md mx-auto">
              Coba kata kunci lain seperti &ldquo;indigo&rdquo;, &ldquo;parang&rdquo;, atau &ldquo;sutra&rdquo;.
            </p>
            <button
              type="button"
              onClick={() => {
                setQuery("");
                setCategory("all");
              }}
              className="inline-flex items-center gap-2 bg-primary text-on-primary border border-primary px-8 py-3 font-label-caps text-label-caps uppercase tracking-widest hover:bg-transparent hover:text-primary transition-all duration-300"
            >
              Reset Pencarian
            </button>
          </div>
        </section>
      ) : (
        <>
          {featured && (
            <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
              <FeaturedArticle article={featured} />
            </section>
          )}

          <section className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop pb-section-gap">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
              {gridArticles.map((article) => (
                <ArticleCard key={article.slug} article={article} />
              ))}

              <div className="group flex flex-col border border-primary bg-surface transition-colors hover:bg-[#f9f9f9]">
                <div className="h-64 border-b border-primary overflow-hidden flex items-center justify-center bg-surface-container-low">
                  <div className="text-center p-8">
                    <span className="material-symbols-outlined text-[48px] text-primary mb-4 block">
                      school
                    </span>
                    <h3 className="font-headline-md text-headline-md text-primary">
                      Join a Workshop
                    </h3>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <span className="font-label-caps text-label-caps text-outline uppercase tracking-widest mb-4">
                    Experience
                  </span>
                  <h3 className="font-body-lg text-body-lg font-medium text-primary mb-3">
                    In-Person Masterclasses
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
                    Book a private session at our Jakarta atelier to learn the fundamentals of wax-resist dyeing from master artisans.
                  </p>
                  <div className="mt-auto pt-4">
                    <Link
                      href="/edukasi/workshop"
                      className="inline-flex items-center justify-center px-6 py-3 border border-primary bg-primary text-on-primary font-label-caps text-label-caps uppercase tracking-widest hover:bg-surface hover:text-primary transition-colors w-full text-center"
                    >
                      View Schedule
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </>
  );
}
