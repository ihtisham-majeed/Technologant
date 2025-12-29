import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";
import ThemeToggle from "@/components/ThemeToggle";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  title: "Technologant | Premium Digital Services",
  description:
    "Full Stack Development, MERN, Wordpress, Shopify, Design, and SEO services.",
  icons: { icon: "/favicon_.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} font-sans bg-white dark:bg-[#0a0a0a] text-black dark:text-white antialiased selection:bg-blue-500/30`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="technologant-theme"
        >
          <Navbar />
          <main className="min-h-screen">{children}</main>
          <ThemeToggle />
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
