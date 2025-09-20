import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MTN Architecture Outsourcing – UK to Global Design Services",
  description: "Outsource architecture design with MTN Communications. We connect UK firms to affordable, high-quality global architecture talent.",
    icons: {
    icon: [{url: "/images/mtn.png", sizes: '32x32', type: 'image/png'}], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <Header />
        <main>{children}</main> 
        <Footer />
      </body>
    </html>
  );
}
