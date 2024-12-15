import ContactButton from "@/components/contact-form/contact-button";
import {
  GithubIcon,
  LinkedinIcon,
  FacebookIcon,
  InstagramIcon,
} from "@/components/icons"; // Import InstagramIcon
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="flex w-full flex-col items-center gap-20 bg-transparent px-6 py-8 sm:px-14 md:px-20">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-8 rounded-2xl bg-accent p-8 text-background sm:p-12 md:gap-12 lg:p-20">
        <div className="text-center">
          <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold uppercase text-accent md:text-sm lg:text-base">
            Get in touch
          </span>
        </div>
        <a
          href={`mailto:${siteMetadata.email}`}
          target="_blank"
          className="mb-6 cursor-pointer text-center text-2xl font-bold underline sm:text-4xl lg:text-7xl"
        >
          <span>hamzahajmtir@gmail.com</span>
        </a>
        <div className="flex justify-center">
          <ContactButton />
        </div>
      </div>
      <div className="flex w-full flex-col items-center justify-between gap-8 text-center  md:flex-row md:justify-between lg:mx-auto lg:max-w-7xl">
        <span className="text-foreground">
          Developed by{" "}
          <span className="font-bold text-accent">Hamza Haj Mtir</span> ©{" "}
          {currentYear}, All rights reserved.
        </span>
        <div className="flex gap-8">
          <a
            href={siteMetadata.github}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Github"
          >
            <GithubIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.facebook}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Facebook"
          >
            <FacebookIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.linkedin}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Linkedin"
          >
            <LinkedinIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
          <a
            href={siteMetadata.instagram}
            target="_blank"
            className="h-6 w-6"
            aria-label="link to Instagram"
          >
            <InstagramIcon className="text-accent transition-colors duration-150 hover:text-accent-foreground" />
          </a>
        </div>
      </div>
    </footer>
  );
}
