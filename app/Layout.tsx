import { Inter } from "next/font/google";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/400.css";
import { ReactNode } from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
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
