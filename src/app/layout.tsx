import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";

const robotoSerif = Roboto_Serif({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-roboto-serif",
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
      <body className={`${robotoSerif.variable} antialiased`}>{children}</body>
    </html>
  );
}
