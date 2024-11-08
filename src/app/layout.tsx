// "use client";

import type { Metadata } from "next";
import {
  Roboto_Serif,
  Roboto_Mono,
  Inter,
  Roboto_Condensed,
  Roboto,
} from "next/font/google";
import "./globals.css";
import Script from "next/script";
import ScrollToTop from "@/hook/ScrollToTop";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto-serif",
});
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--font-roboto-mono",
});

const robotoCondensed = Roboto_Condensed({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto-condensed",
});

const InterFont = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "VMR",
  description: "Verified Market Research",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${robotoSerif.variable} ${robotoMono.variable} ${InterFont.variable} ${robotoCondensed.variable} ${roboto.variable} antialiased`}
      >
        <ScrollToTop />
        {children}
      </body>
      <Script
        src="https://acrobatservices.adobe.com/view-sdk/viewer.js"
        strategy="afterInteractive"
      />{" "}
    </html>
  );
}
