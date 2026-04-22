import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/navbar";

const sfPro = localFont({
  src: "./fonts/sf-pro-medium.woff2",
  variable: "--font-sf-pro",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aman.ah - Digital Financial Platform",
  description: "Aman.ah is a digital financial platform that provides a range of financial services to its users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sfPro.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
