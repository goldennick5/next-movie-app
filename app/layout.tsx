import "@/styles/index.scss"
import 'swiper/css';

import Header from "@/components/partials/header/Header";
import type { Metadata } from "next";
import ReactQueryProvider from "../providers/ReactQueryProvider";

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
        <main>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </main>
      </body>
    </html>
  );
}
