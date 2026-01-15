import { NextSeo } from "next-seo";

import CursorTrailCanvas from "@/components/cursor-trail-canvas";
import ActivitiesHero from "@/components/activities/activities-hero";
import PositionsTimeline from "@/components/activities/positions-timeline";
import WorkshopsGrid from "@/components/activities/workshops-grid";
import ActivityGallery from "@/components/activities/activity-gallery";

import { POSITIONS, WORKSHOPS, GALLERY_ALBUMS } from "@/data/activities";
import { siteMetadata } from "@/data/siteMetaData.mjs";

export default function Activities() {
  return (
    <>
      {/* Interactive cursor trail effect - consistent with other pages */}
      <CursorTrailCanvas
        className="pointer-events-none fixed inset-0 -z-10 h-full w-full"
        color="#F25B19"
      />

      {/* SEO Configuration */}
      <NextSeo
        title="Activities | Hamza Haj Mtir"
        description="Explore Hamza Haj Mtir's community involvement, leadership roles, and tech activities. Discover workshops, events, and contributions to student organizations and tech communities."
        canonical={`${siteMetadata.siteUrl}/activities`}
        openGraph={{
          url: `${siteMetadata.siteUrl}/activities`,
          title: "Activities & Community Involvement | Hamza Haj Mtir",
          description:
            "Leadership, collaboration, and community engagement through tech organizations, workshops, and student initiatives.",
          images: [
            {
              url: `${siteMetadata.siteUrl}${siteMetadata.twitterImage}`,
              alt: "Hamza Haj Mtir - Activities",
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
              "Activities, Community Involvement, Leadership, IEEE, GDSC, Student Organizations, Workshops, Hackathons, Tech Events, Volunteering, Mentorship, Tech Community, Student Branch, Developer Community",
          },
        ]}
      />

      {/* Hero Section - Introduction to activities */}
      <ActivitiesHero />

      {/* Positions & Memberships - Timeline with organization roles */}
      <PositionsTimeline positions={POSITIONS} />

      {/* Workshops & Events - Interactive card grid */}
      <WorkshopsGrid workshops={WORKSHOPS} />

      {/* Gallery - Album-based photo & video showcase */}
      <ActivityGallery albums={GALLERY_ALBUMS} />
    </>
  );
}
