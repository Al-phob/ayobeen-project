import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Home from "./page";

// Components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AyoBeen",
  description: "AyoBeen's Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header />
        
        {/*<PageTransition>

        </PageTransition>*/}

        <main>{children}</main>
      </body>
    </html>
  );
}
