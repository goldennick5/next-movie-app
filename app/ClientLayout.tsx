"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import NextNProgress from "nextjs-progressbar";
import { ReactNode } from "react";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

interface IClientLayoutProps {
  children: ReactNode;
}

export default function ClientLayout({ children }: IClientLayoutProps) {
  return (
    <>
      <NextNProgress
        color="var(--color-primary)"
        height={3}
        options={{ showSpinner: false }}
      />
      <main>
        <AppRouterCacheProvider>
          <ReactQueryProvider>{children}</ReactQueryProvider>
        </AppRouterCacheProvider>
      </main>
    </>
  );
}
