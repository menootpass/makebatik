import AppShell from "../../components/AppShell";

export const metadata = {
  title: "Filosofi - Make Batik | Wear Art Save Earth",
  description: "Filosofi Make Batik: Menenun Tradisi, Merawat Bumi",
};

const PILLARS = [
  {
    icon: "🎨",
    title: "Inovasi Berakar Budaya",
    desc: "Kami menjaga napas tradisi batik agar tetap hidup dalam keseharian masyarakat modern melalui produk milineris yang trendi, fungsional, dan relevan dengan perkembangan zaman.",
    image: "/images/inovasi-budaya.png",
  },
  {
    icon: "🌿",
    title: "Berorientasi Lingkungan",
    desc: "Kami menolak konsep bahwa limbah adalah akhir dari sebuah material. Melalui kreativitas, kami memanfaatkan kembali material alternatif dari limbah kerja semen dan plastik daur ulang.",
    image: "/images/lingkungan-berkelanjutan.png",
  },
  {
    icon: "🤝",
    title: "Ekosistem Berkelanjutan",
    desc: "Setiap produk Make Batik merupakan representasi dari kepedulian sosial, pemberdayaan komunitas pengrajin lokal, dan tata kelola industri kreatif yang bertanggung jawab.",
    image: "/images/ekosistem-komunitas.png",
  },
];

const JOURNEY_PHASES = [
  {
    phase: "Fase Market Entry",
    date: "September 2025",
    description: "Kami memulai langkah pertama di industri digital secara agresif. Kehadiran perdana lini produk Hand Bag disambut antusias oleh generasi muda.",
    milestone: "🚀 Peluncuran Pertama",
  },
  {
    phase: "Fase Membangun Kedekatan",
    date: "Oktober - November 2025",
    description: "Perjalanan berlanjut dengan tumbuhnya komunitas organik dan engagement yang semakin mendalam dengan audiens kami.",
    milestone: "📈 Pertumbuhan Konsisten",
  },
];

export default function FilosofiPage() {
  return (
    <AppShell>
      {/* Hero Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center flex flex-col items-center border-b border-primary">
        <span className="font-label-caps text-label-caps text-tertiary-container mb-4 uppercase tracking-widest">
          WEAR ART SAVE EARTH
        </span>
        <h1 className="font-headline-xl-mobile text-headline-xl-mobile md:font-headline-xl md:text-headline-xl text-primary max-w-4xl mb-6">
          Filosofi Kami: Menenun Tradisi, Merawat Bumi
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-3xl mb-12">
          Make Batik bukan sekadar sebuah produk fesyen, melainkan sebuah gerakan kreatif yang membawa nilai-nilai lokal menuju ranah yang lebih luas dan berkelanjutan. Kami membuktikan bahwa limbah bisa bertransformasi menjadi karya bernilai estetika tinggi jika diolah dengan kreativitas dan kepedulian.
        </p>
        <div className="w-full aspect-[2/1] bg-surface-container border border-primary overflow-hidden rounded-lg shadow-lg">
          <img
            alt="Make Batik Philosophy - Heritage and Sustainability"
            className="w-full h-full object-cover"
            src="/images/filosofi-hero.png"
          />
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-yellow-50 border-b border-primary">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-6">Visi Kami</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            Berangkat dari kegelisahan terhadap isu lingkungan dan dorongan untuk melestarikan warisan leluhur, Make Batik lahir dengan visi besar untuk menyatukan dua dunia: keindahan budaya batik dan kesadaran akan kelestarian lingkungan.
          </p>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Tiga Pilar Utama Kami</h2>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Komitmen "Wear Art Save Earth" tertuang dalam tiga pilar yang menjadi fondasi setiap keputusan kami
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          {PILLARS.map((pillar, idx) => (
            <div
              key={idx}
              className="border border-primary bg-surface flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-[4/3] bg-surface-container-low overflow-hidden border-b border-primary">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="text-5xl mb-4">{pillar.icon}</div>
                <h3 className="font-headline-md text-headline-md text-primary mb-4">
                  {pillar.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed flex-grow">
                  {pillar.desc}
                </p>
              </div>
              <div className="h-1 bg-gradient-to-r from-primary via-tertiary-container to-primary opacity-30"></div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Numbers Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface-container-low border-y border-primary">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Dampak Kami</h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Setiap produk yang dibuat adalah bukti nyata dari komitmen kami terhadap keberlanjutan dan pemberdayaan komunitas
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
          <div className="text-center p-8 border border-primary bg-surface">
            <div className="text-6xl font-headline-xl text-tertiary-container mb-4">
              100%
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Material Berkelanjutan</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Semua produk menggunakan limbah daur ulang dan material alternatif
            </p>
          </div>

          <div className="text-center p-8 border border-primary bg-surface">
            <div className="text-6xl font-headline-xl text-primary mb-4">
              ∞
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Jejak Karbon Minimal</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Proses produksi yang dirancang untuk meminimalkan dampak lingkungan
            </p>
          </div>

          <div className="text-center p-8 border border-primary bg-surface">
            <div className="text-6xl font-headline-xl text-primary mb-4">
              🎯
            </div>
            <h3 className="font-headline-md text-headline-md text-primary mb-2">Pemberdayaan Komunitas</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              Setiap pembelian mendukung pengrajin lokal dan industri kreatif berkelanjutan
            </p>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">
            Perjalanan Kami: Menembus Batas, Divalidasi Pasar
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl mx-auto">
            Langkah awal Make Batik dimulai dari inisiatif sederhana yang berkembang menjadi model bisnis omnichannel yang kuat berkat penerimaan pasar yang luar biasa
          </p>
        </div>

        <div className="space-y-8">
          {JOURNEY_PHASES.map((phase, idx) => (
            <div
              key={idx}
              className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start border-l-4 border-tertiary-container pl-8 py-4"
            >
              <div className="md:col-span-4">
                <div className="flex items-baseline gap-2 mb-2">
                  <h3 className="font-headline-md text-headline-md text-primary">
                    {phase.phase}
                  </h3>
                  <span className="text-2xl">{phase.milestone}</span>
                </div>
                <p className="font-label-caps text-label-caps text-tertiary-container uppercase tracking-widest">
                  {phase.date}
                </p>
              </div>
              <div className="md:col-span-8">
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
                  {phase.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-8 bg-yellow-50 border border-primary">
          <img
            src="/images/perjalanan-timeline.png"
            alt="Make Batik Journey Timeline"
            className="w-full h-auto"
          />
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto bg-surface-container-low border-y border-primary">
        <div className="text-center mb-16">
          <h2 className="font-headline-lg text-headline-lg text-primary mb-4">Nilai-Nilai Inti Kami</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          <div className="p-8 border border-primary bg-surface flex gap-6">
            <div className="text-5xl flex-shrink-0">🏛️</div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Pelestarian Budaya</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Mempertahankan warisan batik dalam keseharian masyarakat modern dengan desain kontemporer yang relevan
              </p>
            </div>
          </div>

          <div className="p-8 border border-primary bg-surface flex gap-6">
            <div className="text-5xl flex-shrink-0">♻️</div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Ekonomi Sirkular</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Mengubah limbah menjadi produk berkualitas tinggi melalui inovasi dan kreativitas tanpa henti
              </p>
            </div>
          </div>

          <div className="p-8 border border-primary bg-surface flex gap-6">
            <div className="text-5xl flex-shrink-0">👥</div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Pemberdayaan Lokal</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Mendukung pengrajin dan komunitas kreatif lokal melalui peluang bisnis yang berkelanjutan
              </p>
            </div>
          </div>

          <div className="p-8 border border-primary bg-surface flex gap-6">
            <div className="text-5xl flex-shrink-0">🌍</div>
            <div>
              <h3 className="font-headline-md text-headline-md text-primary mb-3">Tanggung Jawab Lingkungan</h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Mengurangi jejak karbon dan dampak lingkungan melalui praktik bisnis yang bertanggung jawab
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto text-center">
        <h2 className="font-headline-lg text-headline-lg text-primary mb-6 max-w-3xl mx-auto">
          Bergabunglah dengan Gerakan Make Batik
        </h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto mb-12">
          Setiap pembelian adalah tindakan nyata untuk melestarikan budaya, melindungi lingkungan, dan memberdayakan komunitas. Wear Art, Save Earth.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <a
            href="/produk"
            className="px-8 py-4 border border-primary bg-primary text-on-primary font-label-caps text-label-caps hover:opacity-80 transition-opacity"
          >
            Jelajahi Koleksi
          </a>
          <a
            href="/faq"
            className="px-8 py-4 border border-primary bg-surface text-primary font-label-caps text-label-caps hover:bg-surface-container-low transition-colors"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </section>
    </AppShell>
  );
}
