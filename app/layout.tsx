import "@/styles/globals.css";

import { Fira_Sans } from "next/font/google";
import Header from "@/components/shared/Header";
import type { Metadata } from "next";
import ReactQueryProvider from "../providers/ReactQueryProvider";

const firaSans = Fira_Sans({
  weight: ["300", "400", "500", "600", "700"],
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
        <main className={firaSans.className}>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </main>
      </body>
    </html>
  );
}
