import { ReactNode } from "react";

import { Montserrat } from "next/font/google";

import Navbar from "@/layout/navbar";
import Footer from "@/layout/footer";
import { routes } from "@/data/navigationRoutes";
import { classNames } from "@/utility/classNames";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout(props: MainLayoutProps) {
  return (
    <>
      <div className={classNames("min-h-screen", montserrat.className)}>
        <Navbar routes={routes} />
        <main>
          {props.children}
          <SpeedInsights />
        </main>
      </div>
      <Footer />
    </>
  );
}
