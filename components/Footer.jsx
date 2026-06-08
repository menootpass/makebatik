import Link from "next/link";

const SOCIAL = [
  { label: "Instagram", href: "#" },
  { label: "Facebook", href: "#" },
  { label: "Twitter", href: "#" },
  { label: "WhatsApp", href: "#" },
];

export default function Footer({ variant = "default" }) {
  if (variant === "products") {
    return (
      <footer className="bg-primary text-on-primary font-body-md text-body-md w-full border-t border-primary mt-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="font-headline-lg text-headline-lg text-on-primary mb-6">
                Make Batik
              </div>
              <p className="text-on-primary-fixed-variant opacity-90 max-w-xs font-body-lg text-body-lg">
                Preserving heritage through modern elegance and sustainable craftsmanship.
              </p>
            </div>
            <p className="text-on-primary-fixed-variant opacity-90 font-label-caps text-label-caps mt-12 md:mt-0 uppercase tracking-widest">
              © 2024 Make Batik. Indonesian Heritage.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h4 className="font-label-caps text-label-caps text-on-primary mb-6 opacity-50">
                Explore
              </h4>
              <ul className="space-y-4">
                <li>
                  <Link href="/products" className="text-on-primary-fixed-variant hover:text-tertiary-fixed-dim transition-colors opacity-90">
                    Shop Collection
                  </Link>
                </li>
                <li>
                  <Link href="/filosofi" className="text-on-primary-fixed-variant hover:text-tertiary-fixed-dim transition-colors opacity-90">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="/edukasi" className="text-on-primary-fixed-variant hover:text-tertiary-fixed-dim transition-colors opacity-90">
                    Journal
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-label-caps text-label-caps text-on-primary mb-6 opacity-50">
                Connect
              </h4>
              <ul className="space-y-4">
                {SOCIAL.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} className="text-on-primary-fixed-variant hover:text-tertiary-fixed-dim transition-colors opacity-90">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-primary text-on-primary w-full border-t border-primary mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex flex-col gap-6">
          <Link href="/" className="font-headline-lg text-headline-lg text-on-primary">
            Make Batik
          </Link>
          <p className="font-body-md text-body-md text-on-primary-fixed-variant max-w-xs opacity-90">
            Elevating traditional Indonesian craftsmanship into global quiet luxury.
          </p>
        </div>
        <div className="flex flex-col gap-4 font-body-md text-body-md opacity-90">
          <h4 className="font-label-caps text-label-caps uppercase text-on-primary-fixed-variant mb-2">
            Connect
          </h4>
          {SOCIAL.map((s) => (
            <a
              key={s.label}
              href={s.href}
              className="text-on-primary-fixed-variant hover:text-tertiary-fixed-dim transition-colors duration-300"
            >
              {s.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-end">
          <p className="font-body-md text-body-md text-on-primary-fixed-variant opacity-90">
            © 2024 Make Batik. Indonesian Heritage.
          </p>
        </div>
      </div>
    </footer>
  );
}
