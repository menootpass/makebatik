import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "Make Batik | Exclusive Collection",
  description: "Indonesian Heritage, Reimagined. Quiet luxury batik craftsmanship.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
