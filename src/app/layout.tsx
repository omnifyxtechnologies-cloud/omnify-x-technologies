import type { Metadata, Viewport } from "next";
import "@fontsource-variable/montserrat";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FloatingContact } from "@/components/FloatingContact";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: "Omnify X Technologies | E-commerce, Consultancy & Emerging Ventures", template: "%s | Omnify X Technologies" },
  description:
    "Omnify X Technologies brings together e-commerce solutions, international business consultancy and emerging ventures to help entrepreneurs build, operate and grow.",
  openGraph: {
    title: "Omnify X Technologies",
    description: "E-commerce solutions, international business consultancy and emerging ventures.",
    type: "website",
    siteName: "Omnify X Technologies",
    images: ["/brand/logo-full.png"],
  },
  alternates: { canonical: "./" },
};
export const viewport: Viewport = { themeColor: "#ffffff", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main id="main" className="pt-[92px]">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
