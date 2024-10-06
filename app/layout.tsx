import "@/styles/index.scss";

import ClientLayout from "./ClientLayout";
import Header from "@/components/partials/header/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Movie app",
  description: "The best streaming platform in Kazakhstan",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <ClientLayout>
          {children}
        </ClientLayout>
      </body>
    </html>
  );
}
