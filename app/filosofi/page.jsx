import AppShell from "../../components/AppShell";
import Image from "next/image";
const MOTIFS = [
  {
    image: "/images/kawung.png",
    name: "Kawung",
    desc: "Representing a cross-section of a palm fruit, this ancient geometric pattern symbolizes purity, perfection, and the origin of life.",
  },
  {
    image: "/images/parang.png",
    name: "Parang",
    desc: "The S-shaped diagonal lines mimic ocean waves, conveying a message of continuous effort, unwavering strength, and the spirit of a warrior.",
  },
  {
    image: "/images/megamendung.png",
    name: "Megamendung",
    desc: "Depicting rain clouds, this motif from Cirebon signifies patience, cool-headedness in anger, and the bringing of life-giving rain.",
  },
];

export const metadata = {
  title: "Philosophy - Make Batik",
};

export default function FilosofiPage() {
  return (
    <AppShell>
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center flex flex-col items-center">
        <span className="font-label-caps text-label-caps text-on-surface-variant mb-6 uppercase tracking-widest">
          Our Heritage
        </span>
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary max-w-4xl mb-12">
          The Soul Woven Into Every Thread
        </h1>
        <div className="w-full aspect-[21/9] bg-surface-container border border-primary overflow-hidden">
          <img
            alt="Batik pattern close up"
            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPlbqxF9xF5kkI07CujN2x4ydExGp9BDk0tfNc5M-KicxBdoTF8hF3KemWvZnR1F9UMv9ebysYI_xSrfde0cdLogU1jqSpbR52ijRSx12lGA9SgYUhSKcmXxaIUTvJAO-nY-7FH608gL1rKh3C8Llj5rg3itdUEYFjC4WIVLuGGO29ZNFuQbWJcGpTzTn1IdK4thnQgX8PRD5qUem7LN4USgl5DVIRjRO9frWUe62NGmyDy-F1SdCXHs6Q3b_qUXkoIkknaruZ6TXF"
          />
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-5 flex flex-col space-y-8 pr-0 md:pr-12">
          <h2 className="font-headline-lg text-headline-lg text-primary">More Than A Garment</h2>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Batik is an ancient art form passed down through generations. It is a philosophy inscribed in wax and dye, a visual language that speaks of nature, spirituality, and the human condition.
          </p>
          <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
            Every dot, line, and curve holds intent. In our pursuit of &apos;Quiet Luxury&apos;, we strip away the noise to let the profound narrative of these heritage motifs resonate in a modern context.
          </p>
        </div>
        <div className="md:col-span-7 grid grid-cols-2 gap-4 mt-12 md:mt-0">
          <div className="mt-12">
            <img
              alt="Artisan making batik"
              className="w-full h-auto border border-primary grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDc3FlPRBCaKNdOgowt_62DhUpMjmDcKRGWS36cZwzzSygoX8JNbLeP18zOIncD0LnmJCYQBxQhucdJlitmw9C5RwOlS2f1D-Vv6g_GlYLwgN5WuW5gGywXkeqnsUUvHBffe2TRJT5n_UhH9dYKNujOKuKiCyFJQYjQ3Lk_-Pc_N_BSttDC44TD6qd3Tpk8UuiU1S01_Q7mLhZqlgm1zoZ3YU_m9WpNqBL-8hu_A-6darf9mktC-cGSQcVm9PE1etmQxhscAs_ykvKO"
            />
          </div>
          <div>
            <img
              alt="Finished batik fabric"
              className="w-full h-auto border border-primary grayscale"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCZ0bsxFOqxNieP3TbLe293VhWpb3nqq0ogWMZIbh69x-2TsHo4l3U94zzBQwopu5m2qhR58FfxTwDp6Ze8vc8r99fOMTqfQH4r6Ku72kq5ZgaNGH9KyVaWzjMQGky50Mscmt3Eo2Q3309xXN54jXAtE3aR21RzilwP0wF_sCm2QH6_FINBASvEFs-PILlD-NxG8GlzzPzdAuuUHItJeVX6f3Sb51SYJbi2AuKLWFW_VM2G9iknna2m10DZzL4tn-Am4Dp9zUKcJDlX"
            />
          </div>
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface-container-low border-y border-primary">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">The Lexicon of Motifs</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Discover the hidden meanings embedded in our signature patterns.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {MOTIFS.map((m) => (
            <div
              key={m.name}
              className="border border-primary bg-surface p-6 hover:bg-[#F9F9F9] transition-colors duration-300 group"
            >
              <div className="w-full aspect-square border-b border-primary mb-6 overflow-hidden bg-surface-container flex items-center justify-center relative">
                
                  <Image 
                    src={m.image} 
                    alt={`${m.name} Motif`} 
                    fill
                    className="object-contain"
                  />
              </div>
              <h3 className="font-headline-md text-headline-md text-primary mb-2">{m.name}</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">{m.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto flex flex-col md:flex-row items-center justify-between gap-gutter">
        <div className="w-full md:w-1/2">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">
            Cultural Significance Distribution
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant mb-8">
            An analysis of our curated collection reveals the thematic focus of our pieces. We heavily emphasize motifs related to nature and spirituality, aligning with our ethos of mindful consumption and profound aesthetic value.
          </p>
          <ul className="space-y-4 font-body-md text-body-md text-primary">
            <li className="flex items-center">
              <span className="w-4 h-4 bg-primary border border-primary mr-4 block" />
              Nature &amp; Flora (45%)
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-tertiary-container border border-primary mr-4 block" />
              Spirituality &amp; Cosmos (35%)
            </li>
            <li className="flex items-center">
              <span className="w-4 h-4 bg-surface-tint border border-primary mr-4 block" />
              Royal Hierarchy (20%)
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0 relative">
          <svg className="transform -rotate-90" height="300" viewBox="0 0 32 32" width="300">
            <circle className="text-surface-tint" cx="16" cy="16" fill="transparent" r="16" stroke="currentColor" strokeDasharray="100 100" strokeWidth="8" />
            <circle className="text-tertiary-container" cx="16" cy="16" fill="transparent" r="16" stroke="currentColor" strokeDasharray="80 100" strokeWidth="8" />
            <circle className="text-primary" cx="16" cy="16" fill="transparent" r="16" stroke="currentColor" strokeDasharray="45 100" strokeWidth="8" />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center flex-col text-center">
            <span className="font-headline-md text-headline-md text-primary block">100%</span>
            <span className="font-label-caps text-label-caps text-on-surface-variant block">Heritage</span>
          </div>
        </div>
      </section>
    </AppShell>
  );
}
