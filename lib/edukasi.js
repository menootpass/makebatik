import artikelData from "../data/artikel.json";

export const ARTICLES = artikelData.articles;

export const CATEGORY_FILTERS = [
  { id: "all", label: "All Topics", match: () => true },
  { id: "care", label: "Care", match: (a) => a.category === "Care Guide" },
  { id: "history", label: "History", match: (a) => a.category === "History" },
  { id: "technique", label: "Technique", match: (a) => a.category === "Masterclass" },
];

export function getArticleBySlug(slug) {
  return ARTICLES.find((a) => a.slug === slug) ?? null;
}

export function getAllSlugs() {
  return ARTICLES.map((a) => a.slug);
}

function normalize(str) {
  return str.toLowerCase().trim();
}

export function searchArticles(articles, query, categoryId = "all") {
  const q = normalize(query);
  const filter = CATEGORY_FILTERS.find((f) => f.id === categoryId) ?? CATEGORY_FILTERS[0];

  return articles.filter((article) => {
    if (!filter.match(article)) return false;
    if (!q) return true;

    const haystack = [
      article.title,
      article.excerpt,
      article.category,
      article.reading_time,
      ...(article.content?.flatMap((s) => [s.section_title, s.text]) ?? []),
    ]
      .join(" ")
      .toLowerCase();

    const terms = q.split(/\s+/).filter(Boolean);
    return terms.every((term) => haystack.includes(term));
  });
}

export const FEATURED_SLUG = ARTICLES[0]?.slug;
