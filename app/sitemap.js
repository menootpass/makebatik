// app/sitemap.js

export default function sitemap() {
    const baseUrl = 'https://makebatik.vercel.app';
  
    return [
      {
        url: baseUrl,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: 1.0,
      },
      // Tambahkan halaman lain jika ada (contoh):
      // {
      //   url: `${baseUrl}/katalog`,
      //   lastModified: new Date(),
      //   changeFrequency: 'monthly',
      //   priority: 0.8,
      // },
    ];
  }