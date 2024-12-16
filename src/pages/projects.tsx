import { NextSeo } from "next-seo";

import ProjectCard from "@/components/projects/project-card";
import { PROJECTS_CARD } from "@/data/projects";
import { siteMetadata } from "@/data/siteMetaData.mjs";
import CursorTrailCanvas from "@/components/cursor-trail-canvas";

export default function Projects() {
  return (
    <>
      <CursorTrailCanvas
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
        color="#F25B19"
      />
      <NextSeo
        title="Projects by Hamza Haj Mtir"
        description="Explore a collection of projects by Hamza Haj Mtir, a seasoned Full Stack Developer. From innovative web applications to responsive interfaces, discover the depth and diversity of my work."
        canonical={`${siteMetadata.siteUrl}/projects`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/projects`,
          title: "Discover Projects by Hamza Haj Mtir - Full Stack Developer",
          description:
            "Explore a showcase of projects crafted by Hamza Haj Mtir, a Full Stack Developer. See the fusion of creativity and technology in web development and video editing.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Hamza Haj Mtir - Portfolio Image",
            },
          ],
          siteName: siteMetadata.siteName,
          type: "website",
        }}
        twitter={{
          cardType: "summary_large_image",
        }}
        additionalMetaTags={[
          {
            property: "keywords",
            content:
              "Projects, Portfolio, About Me, React Developer, Frontend Developer, Web Developer, Nextjs, JavaScript, Java, Python, PHP, C, HTML, CSS, Professional Journey, Skills, Passion for Web Development, Software Engineering, Full Stack Developer, Web Designer, Video Editor, SFC™, UI/UX, Web Applications, Responsive Design",
          },
        ]}
      />
      <section className="mx-auto mb-40 mt-6 w-full gap-20 px-6 sm:mt-12 sm:px-14 md:px-20">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-2xl font-semibold text-foreground md:text-4xl">
            Projects
          </h1>
          <div className="my-2">
            <span className="text-sm text-muted-foreground">
              Here are some of the projects I&apos;d like to share
            </span>
          </div>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-10 lg:grid-cols-2">
            {PROJECTS_CARD.map((card, index) => (
              <ProjectCard key={index} {...card} />
            ))}
          </div>
          <div className="mx-auto mt-16 max-w-5xl text-center text-foreground md:mt-28">
            <span className="text-xl font-bold md:text-2xl">
              Every day I learn something new 🧑‍💻
            </span>
            <p className="mt-10 text-base md:text-xl">
              Visit my GitHub to see all my projects{" "}
              <a
                href={`${siteMetadata.github}?tab=repositories`}
                target="_blank"
                className="font-semibold text-accent underline underline-offset-2 hover:text-accent/70"
              >
                Github
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
