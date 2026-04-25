// app/layout.tsx
import type { Metadata } from "next";
import { Caveat, DM_Sans } from "next/font/google";
import "./globals.css";

const ui = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const hand = Caveat({
  subsets: ["latin"],
  variable: "--font-hand",
  display: "swap",
  weight: ["600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://gourimenon-portfolio.vercel.app/"),
  title: "Gouri's Café",
  description: "Fresh data brews, warm models, and cozy analytics.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${ui.variable} ${hand.variable}`}>
      <body className="font-sans text-ink antialiased">
        <div className="cafe-wall" aria-hidden="true" />
        <main className="relative z-[1]">{children}</main>
      </body>
    </html>
  );
}
