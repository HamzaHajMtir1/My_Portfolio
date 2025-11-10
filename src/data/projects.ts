import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "Wie Empower",
    href: "/projects",
    tags: ["Nextjs", "React", "Tailwindcss", "Json", "Vercel"],
    image: {
      LIGHT: "/images/projects/WieAct.webp",
      DARK: "/images/projects/WieAct.webp",
    },
  },
  {
    index: 1,
    title: "IAS/PES ISIMM",
    href: "/projects",
    tags: ["Nextjs", "React", "Tailwindcss", "Json", "Vercel"],
    image: {
      LIGHT: "/images/projects/IAS-PES.webp",
      DARK: "/images/projects/IAS-PES.webp",
    },
  },
  {
    index: 2,
    title: "IEEE SDC",
    href: "/projects",
    tags: ["Nextjs", "React", "Tailwindcss", "Json", "Vercel"],
    image: {
      LIGHT: "/images/projects/SDC.webp",
      DARK: "/images/projects/SDC.webp",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Wie Empowerment",
    favicon: "/images/projects/logos/WieAct.ico",
    imageUrl: ["/images/projects/WieAct.webp"],
    description:
      "Wie Empowerment is a web platform designed to support women working in agriculture. It integrates an AI system that detects potential risks in the field and notifies administrators via GPS tracking through electronic bracelets. The platform also includes an online shop where users can order agricultural tools.",
    sourceCodeHref: "https://github.com/HamzaHajMtir1/Wie-Act-4.0",
    liveWebsiteHref: "https://wie-act-4-0.vercel.app/",
  },
  {
    name: "IEEE SIGHT Day Congress",
    favicon: "/images/projects/logos/SDC.ico",
    imageUrl: ["/images/projects/SDC.webp"],
    description:
      "This is the official website for the IEEE SIGHT Day Congress. Built with modern web technologies, The event culminated in a friendly competition to determine the best SIGHT group in Tunisia Section , with the winning group earning the honor of hosting the next edition of the congress.",
    sourceCodeHref: "https://github.com/HamzaHajMtir1/IEEE-Sight-Day-Congress",
    liveWebsiteHref: "https://ieee-sight-day-congress.vercel.app/",
  },
  {
    name: "IEEE IAS/PES ISIMM SBJC",
    favicon: "/images/projects/logos/IAS-PES.ico",
    imageUrl: ["/images/projects/IAS-PES.webp"],
    description:
      "This is the official website for the IAS-PES Joint Chapter at ISIMM. Built with modern web technologies, the site serves as a hub for sharing chapter updates, events, resources, and achievements.",
    sourceCodeHref:
      "https://github.com/HamzaHajMtir1/IAS-PES-ISIMM-Joint-Chapter-Website",
    liveWebsiteHref: "https://ias-pes-isimm.ieee.tn/",
  },
  {
    name: "Sanitaire Design",
    favicon: "/images/projects/logos/SanitaireDesign.ico",
    imageUrl: ["/images/projects/SanitaireDesign.webp"],
    description:
      "Sanitaire Design, a specialist in bathroom equipment, offers a wide range of shower trays and enclosures, wall panels, sinks, and faucets (shower columns, mixers, etc.).",
    liveWebsiteHref: "https://sanitairedesign.net/",
  },
  {
    name: "We Care",
    favicon: "/images/projects/logos/weCare.ico",
    imageUrl: ["/images/projects/weCare.webp"],
    description:
      "We act is a website designed to support cancer patients by boosting morale, connecting them with specialized doctors, and providing educational resources on cancer and treatment. Our goal is to empower patients with information and hope, fostering a compassionate online community.",
    sourceCodeHref: "https://github.com/HamzaHajMtir1/wie-heal-challange",
    liveWebsiteHref: "https://we-care1.vercel.app/",
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
];
