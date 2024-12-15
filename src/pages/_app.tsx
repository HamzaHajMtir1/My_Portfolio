import type { AppProps } from "next/app";
import { useRouter } from "next/router";

import { ThemeProvider } from "next-themes";
import { AnimatePresence } from "framer-motion";

import MainLayout from "@/layout/main-layout";
import "@/styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider attribute="class" defaultTheme="dark">
      <MainLayout>
        <AnimatePresence mode="wait" initial={false}>
          <Component key={router.asPath} {...pageProps} />
          <Analytics />
          <SpeedInsights />
        </AnimatePresence>
      </MainLayout>
    </ThemeProvider>
  );
}
