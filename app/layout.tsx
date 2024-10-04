import "@/styles/globals.css";
import 'swiper/css';

import Header from "@/components/partials/Header";
import { Merriweather } from "next/font/google";
import type { Metadata } from "next";
import ReactQueryProvider from "../providers/ReactQueryProvider";

const merriweather = Merriweather({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Movie app",
  description: "The best streaming platform in Kazakhstan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className={merriweather.className}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </main>
      </body>
    </html>
  );
}
