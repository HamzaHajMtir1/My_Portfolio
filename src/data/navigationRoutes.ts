import { NavbarRoutes } from "@/layout/navbar";

export const routes: NavbarRoutes = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Projects", href: "/projects" },
  {
    title: "Download CV",
    href: "files/CV_HamzaHajMtir.pdf",
    download: true,
  },
];
