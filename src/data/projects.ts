import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "LEONI OTMS",
    href: "/projects",
    tags: ["Angular", "Bootstrap", "Spring Boot", "PostgreSQL", "Docker"],
    image: {
      LIGHT: "/images/projects/LEONI-OTMS.webp",
      DARK: "/images/projects/LEONI-OTMS.webp",
    },
  },
  {
    index: 1,
    title: "Promolab",
    href: "/projects",
    tags: ["Nextjs", "Tailwindcss", "SupaBase", "Vercel"],
    image: {
      LIGHT: "/images/projects/promolab.webp",
      DARK: "/images/projects/promolab.webp",
    },
  },
  {
    index: 2,
    title: "Gaoua Gold",
    href: "/projects",
    tags: ["WordPress"],
    image: {
      LIGHT: "/images/projects/Gaoua-gold.webp",
      DARK: "/images/projects/Gaoua-gold.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "LEONI OTMS",
    favicon: "/images/projects/logos/leoni.ico",
    imageUrl: ["/images/projects/LEONI-OTMS.webp"],
    description:
      "The LEONI OTMS platform which allows suppliers to more easily apply for tenders submitted by the company and also makes it easier for the company to choose the right suppliers for calls for tenders. LEONI OTMS puts the relationship between the company and suppliers in complete transparency.",
    sourceCodeHref: "https://github.com/HamzaHajMtir1/InnovaMarkets-Frontend",
  },
  {
    name: "Promolab",
    favicon: "/images/projects/logos/promolab.ico",
    imageUrl: ["/images/projects/promolab.webp"],
    description:
      "Promolab is Tunisia's leading e-commerce platform for laboratory and chemical products, simplifying procurement for researchers, educators, and industry professionals with a curated catalog of high-quality supplies. By prioritizing user experience and reliability, Promolab is transforming the support and pursuit of scientific endeavors in Tunisia.",
    sourceCodeHref: "https://github.com/HamzaHajMtir1/Promolab",
    liveWebsiteHref: "https://promolab.vercel.app",
  },
  {
    name: "Gaoua Gold",
    favicon: "/images/projects/logos/gaoua-gold.ico",
    imageUrl: ["/images/projects/Gaoua-gold.webp"],
    description:
      "Gaoua Gold is a WordPress website project developed for a gold mining company in Burkina Faso. This project involved creating an online platform that enhances the company’s digital presence and streamlines their communication processes.",
    liveWebsiteHref: "https://gaouagoldcompany.com/",
  },
  {
    name: "MediTech",
    favicon: "/images/projects/logos/meditech.ico",
    imageUrl: ["/images/projects/meditech.webp"],
    description:
      "MediTech is an advanced medical platform for doctors, providing easy access to patient information, treatment plans, and medical records. Its intuitive interface and advanced features facilitate efficient data management, secure communication, and customizable workflows for enhanced patient care.",
    sourceCodeHref: "https://github.com/HamzaHajMtir1/Meditech",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "IEEE WIE ISIMM SAG",
    favicon: "/images/projects/logos/IEEE-Logo.ico",
    imageUrl: ["/images/projects/ieee.webp"],
    description:
      "IEEE WIE ISIMM SAG is a transformative tool for primary education that empowers both students and teachers with innovative resources and collaborative tools. It provides comprehensive classroom management, secure communication, interactive learning resources, and personalized learning pathways to foster engagement and academic growth.",
    sourceCodeHref: "https://github.com/HamzaHajMtir1/IEEE-WIE-ISIMM-SAG",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "BouHmez Company",
    favicon: "/images/projects/logos/BouHmez-logo.ico",
    imageUrl: ["/images/projects/bouhmez.webp"],
    description:
      "This project is a comprehensive car sales site built with Odoo, offering detailed car listings and a user-friendly interface for inventory management and customer requests. Utilizing Odoo's modules such as eCommerce, CRM, and Accounting, the site ensures seamless integration of sales, inventory, and customer relationship management.",
    sourceCodeHref: "https://github.com/HamzaHajMtir1/bouhmez-company",
    liveWebsiteHref: siteMetadata.siteUrl,
  },
  {
    name: "DefendHer",
    favicon: "/images/projects/logos/defenHer.ico",
    imageUrl: ["/images/projects/defendHer.webp"],
    description:
      "The Defend Her website is a showcase for our browser extension, which helps protect users by blurring harassment and offensive language 🌐🚫💬. It also features Touta, an interactive chat assistant 🤖💬, who guides users through the extension's features, offering support and insights to promote a safer, more respectful online environment 🌸✨.",
    sourceCodeHref: "https://github.com/HamzaHajMtir1/wie-act-challenge",
    liveWebsiteHref: "https://defend-her.vercel.app/",
  },
  {
    name: "DefendHer",
    favicon: "/images/projects/logos/weCare.ico",
    imageUrl: ["/images/projects/weCare.webp"],
    description:
      "We act is a website designed to support cancer patients by boosting morale, connecting them with specialized doctors, and providing educational resources on cancer and treatment. Our goal is to empower patients with information and hope, fostering a compassionate online community.",
    sourceCodeHref: "https://github.com/HamzaHajMtir1/wie-heal-challange",
    liveWebsiteHref: "https://we-care1.vercel.app/",
  },
];
