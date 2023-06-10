import { Montserrat } from "next/font/google";
import { ReactNode } from "react";
import { Metadata } from "next";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";

const inter = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Birk Kensén's portfolio",
  title: "Portfolio | Birk Kensén",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`mx-5 md:mx-auto md:max-w-4xl md:px-4 lg:max-w-5xl xl:max-w-6xl ${inter.className}`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
