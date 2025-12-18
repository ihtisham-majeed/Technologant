import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Technologant | Premium Digital Services",
  description:
    "Full Stack Development, MERN, Wordpress, Shopify, Design, and SEO services.",
  icons: {
    icon: "/favicon_.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} font-sans bg-[#050505] text-white antialiased selection:bg-cyan-500/30`}
      >
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Analytics />
      </body>
    </html>
  );
}
