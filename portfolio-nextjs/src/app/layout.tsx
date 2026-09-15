import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import { LightboxProvider } from "@/components/Lightbox";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-roboto",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Billy Joe Cruzada | Graphic Designer",
  description: "Portfolio of Billy Joe Cruzada - Graphic Designer, AI Content Creator, Web Developer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${poppins.variable} ${roboto.variable} h-full antialiased`}>
      <head>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body className="min-h-full flex flex-col bg-[#1A1A1A] text-white">
        <LightboxProvider>
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer variant="auto" />
        </LightboxProvider>
      </body>
    </html>
  );
}
