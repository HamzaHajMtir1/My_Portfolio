import { SiPrisma, SiNextdotjs } from "react-icons/si";

import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CsssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import TypescriptSvg from "@/public/icons/typescript.svg";
import PythonSvg from "@/public/icons/python.svg";
import ReactjsSvg from "@/public/icons/reactjs.svg";
import TailwindcssSvg from "@/public/icons/tailwindcss.svg";
import NodejsSvg from "@/public/icons/nodejs.svg";
import SpringSvg from "@/public/icons/Spring_Boot.svg";
import CSvg from "@/public/icons/C.svg";
import JavaSvg from "@/public/icons/java.svg";
import PHPSvg from "@/public/icons/PHP.svg";
import BootstrapSvg from "@/public/icons/Bootstrap.svg";
import AndroidSvg from "@/public/icons/android.svg";

// CMS
import WordPressSvg from "@/public/icons/Wordpress.svg";

// ERP
import OdooSVG from "@/public/icons/odoo.svg";

// Database and ORMS
import MongoDBSvg from "@/public/icons/mongodb.svg";
import PostgressSvg from "@/public/icons/postgresql.svg";
import MysqlSvg from "@/public/icons/mysql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import DockerSvg from "@/public/icons/docker.svg";
import AngularSvg from "@/public/icons/angular.svg";
import PostmanSvg from "@/public/icons/postman.svg";
import LinuxSvg from "@/public/icons/linux.svg";
import GitHubSvg from "@/public/icons/github.svg";

// Video Editing Tools
import PremierSvg from "@/public/icons/Premiere_Pro.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Programming languages, Frameworks and Libraries",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CsssSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
      {
        name: "Typescript",
        icon: TypescriptSvg,
      },
      {
        name: "Angular",
        icon: AngularSvg,
      },
      {
        name: "Bootstrap",
        icon: BootstrapSvg,
      },
      {
        name: "SpringBoot",
        icon: SpringSvg,
      },
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Nextjs",
        icon: SiNextdotjs,
      },
      {
        name: "Tailwindcss",
        icon: TailwindcssSvg,
      },
      {
        name: "Nodejs",
        icon: NodejsSvg,
      },
      {
        name: "Python",
        icon: PythonSvg,
      },
      {
        name: "Java",
        icon: JavaSvg,
      },
      {
        name: "C Programming Language",
        icon: CSvg,
      },
      {
        name: "PHP",
        icon: PHPSvg,
      },
      {
        name: "Android",
        icon: AndroidSvg,
      },
    ],
  },
  {
    sectionName: "CMS",
    skills: [
      {
        name: "WordPress",
        icon: WordPressSvg,
      },
    ],
  },
  {
    sectionName: "ERP",
    skills: [
      {
        name: "Odoo",
        icon: OdooSVG,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MongoDB",
        icon: MongoDBSvg,
      },
      {
        name: "PostgreSQL",
        icon: PostgressSvg,
      },
      {
        name: "Prisma",
        icon: SiPrisma,
      },
      {
        name: "MySQL",
        icon: MysqlSvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "GitHub",
        icon: GitHubSvg,
      },
      {
        name: "Docker",
        icon: DockerSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
      {
        name: "Linux",
        icon: LinuxSvg,
      },
    ],
  },
  {
    sectionName: "Video Editing Tools",
    skills: [
      {
        name: "Adobe Premiere Pro",
        icon: PremierSvg,
      },
    ],
  },
];
