import { NextSeo } from "next-seo";

import AboutHero from "@/components/about-hero";
import ExperienceShowcaseList from "@/components/experience/experience-showcase-list";
import { EXPERIENCE } from "@/data/experience";
import { EDUCATION } from "@/data/education";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function About() {
  return (
    <>
      <NextSeo
        title="About Hamza Haj Mtir | Full Stack Developer and Video Editor"
        description="Learn more about Hamza Haj Mtir, an experienced professional full stack developer and video editor. Discover the journey, skills and passion that drives me to create innovative web and video solutions."
        canonical={`${siteMetadata.siteUrl}/about`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/about`,
          title:
            "Learn About Hamza Haj Mtir - Full Stack Developer and Video Editor",
          description:
            "Dive into the story of Hamza Haj Mtir, a Full Stack Developer and Video Editor. Discover the experience, skills, and passion that fuel a commitment to delivering exceptional web and video solutions.",
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
              "About Me, React Developer, Frontend Developer, Web Developer, Nextjs, JavaScript,Java, Python, PHP, C, HTML, CSS, Professional Journey, Skills, Passion for Web Development, Software Engineering, Full Stack Developer, Web Designer, Video Editor, SFC™",
          },
        ]}
      />
      <AboutHero />
      <ExperienceShowcaseList title="Experience" details={EXPERIENCE} />
      <ExperienceShowcaseList title="Education" details={EDUCATION} />
    </>
  );
}
