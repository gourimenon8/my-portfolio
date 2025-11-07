// app/layout.tsx
import type { Metadata } from "next";
import { Caveat, Noto_Sans } from "next/font/google";
import "./globals.css";
import { Playfair_Display } from "next/font/google";

// Fonts (handwritten for headings, soft UI for text)
const ui = Noto_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const hand = Caveat({ subsets: ["latin"], variable: "--font-hand", weight: ["400","600","700"], display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://gourimenon-portfolio.vercel.app/"),
  title: "Gouri’s Café",
  description: "Fresh data brews, warm models, and cozy analytics.",
};

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-playfair",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${ui.variable} ${hand.variable} font-sans text-ink antialiased`}>
        {/* Full-page background image (defined in globals.css) */}
        <div className="cafe-wall" />
        {/* Optional subtle grain overlay (define .grain in CSS if you want) */}
        {/* <div className="grain" /> */}
        <body className={`${playfair.variable} ${ui.variable} ${hand.variable} font-sans text-ink antialiased`}>
          {/* Content stays above the background */}
          <main className="relative z-[1]">
            {children}
          </main>
        </body>
      </body>
    </html>
  );
}
