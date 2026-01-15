export interface Position {
  id: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  dateRange: string;
  description: string;
  type: "EXCOM" | "membership" | "volunteer";
  icon?: "leadership" | "teamwork" | "tech" | "community";
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  date: string;
  topics: string[];
  type: "workshop" | "event" | "hackathon";
  role?: "organizer" | "trainer" | "participant";
  image?: string;
}

export interface MediaItem {
  id: string;
  type: "image" | "video";
  src: string;
  thumbnail?: string; // For videos, optional thumbnail
  alt: string;
  caption?: string;
}

export interface Album {
  id: string;
  title: string;
  description?: string;
  coverImage: string;
  date: string;
  media: MediaItem[];
}

export const POSITIONS: Position[] = [
  {
    id: "pos-1",
    role: "Web Master & Marketing Manager",
    organization: " IEEE IAS PES - ISIMM Student Branch Joint Chapter",
    organizationUrl: "https://www.facebook.com/profile.php?id=61561012416766",
    dateRange: "Jan 2025 - Dec 2025",
    description:
      "Developed and maintained the official website of the IEEE IAS PES ISIMM Student Branch Joint Chapter. Managed social media platforms, designed promotional posts, and edited videos for events and announcements.",
    type: "EXCOM",
    icon: "leadership",
  },
  {
    id: "pos-2",
    role: "Logistics Team Member (OC) - CISolution Hackathon",
    organization: "IEEE CIS ISIMM Student Chapter",
    organizationUrl: "https://www.facebook.com/IEEE.CIS.ISIMM",
    dateRange: "March 2023",
    description:
      "Member of the organizing committee within the logistics team for the CISolution AI hackathon. Contributed to event setup, participant coordination, resource management, and ensuring smooth logistical operations throughout the event.",
    type: "volunteer",
    icon: "teamwork",
  },
  {
    id: "pos-3",
    role: "Member",
    organization: "IEEE ISIMM Student Branch",
    organizationUrl: "https://www.facebook.com/IEEEISIMMSB",
    dateRange: "Sep 2022 - Present",
    description:
      "Active member contributing to technical workshops, networking events, and community building initiatives. Participated in organizing tech talks and hackathons to foster innovation among students.",
    type: "membership",
    icon: "teamwork",
  },
  {
    id: "pos-4",
    role: "Logistics Team Member (OC) - IAHorizon Event",
    organization: "ATIA ISIMM",
    organizationUrl: "https://www.facebook.com/profile.php?id=100086600541050",
    dateRange: "Oct 2021",
    description:
      "Served as a member of the organizing committee within the logistics team for the IAHorizon event. Contributed to event preparation, coordination, and on-site logistical support to ensure smooth execution.",
    type: "volunteer",
    icon: "teamwork",
  },
];

// Workshops & Events Data
export const WORKSHOPS: Workshop[] = [
  {
    id: "ws-1",
    title: "IEEE IAS PES 101 Session",
    description:
      "Introductory session presenting the IEEE IAS and PES societies and the IEEE IAS PES ISIMM Joint Chapter. The event highlighted the chapter’s mission, benefits, and opportunities for students to grow technically, professionally, and socially within the power, energy, and industrial technology fields.",
    date: "Dec 2025",
    topics: ["IEEE IAS", "IEEE PES", "Power & Energy", "Industry Applications"],
    type: "event",
    role: "organizer",
  },
  {
    id: "ws-2",
    title: "Git & Github Workshop",
    description:
      "Conducted a hands-on workshop introducing version control with Git and GitHub. Covered core concepts such as repositories, commits, branches, pull requests, and collaborative workflows through practical exercises.",
    date: "Nov 2025",
    topics: ["Git", "GitHub", "Version Control", "Collaboration"],
    type: "workshop",
    role: "trainer",
  },
  {
    id: "ws-3",
    title: "Video Editing Workshop – Adobe Premiere Pro",
    description:
      "Delivered a practical workshop on video editing using Adobe Premiere Pro. Introduced the editing workflow, timeline management, cuts and transitions, color correction basics, and exporting videos for social media and events.",
    date: "Oct 2025",
    topics: [
      "Adobe Premiere Pro",
      "Video Editing",
      "Timeline & Transitions",
      "Color Correction",
    ],
    type: "workshop",
    role: "trainer",
  },
  {
    id: "ws-4",
    title: "IEEEXtreme 19.0 Global Programming Competition",
    description:
      "Participated in the 24-hour IEEE Xtreme 19.0 global programming competition. Achieved top rankings through intensive problem-solving and teamwork, placing first at the university level, 14th nationally in Tunisia, and 99th worldwide out of 8,169 teams.",
    date: "Oct 2025",
    type: "hackathon",
    role: "participant",
    topics: [
      "Competitive Programming",
      "Problem Solving",
      "Algorithms",
      "Teamwork",
    ],
  },
  {
    id: "ws-5",
    title: "IEEE IES Students & Young Professionals Congress 2025",
    description:
      "Participation of the IEEE IAS PES ISIMM Student Branch Joint Chapter in the IEEE IES Students & Young Professionals Congress 2025. The event provided an international platform to represent IEEE ISIMM, connect with global experts and young professionals, and gain insights and inspiration to enhance future chapter initiatives.",
    date: "Aug 2025",
    topics: [
      "IEEE IES",
      "Students & Young Professionals",
      "Networking",
      "Innovation",
    ],
    type: "event",
    role: "participant",
  },
];

// Gallery Albums Data
// Each album represents an event with multiple images and videos
export const GALLERY_ALBUMS: Album[] = [
  {
    id: "album-1",
    title: "IEEE IAS PES 101 Session",
    description: "Introduction to IEEE IAS and PES societies",
    coverImage: "/images/activities/101/101.jpg",
    date: "Dec 2025",
    media: [
      {
        id: "101-1",
        type: "image",
        src: "/images/activities/101/101.jpg",
        alt: "IEEE IAS PES 101 Session",
        caption: "Session Picture",
      },
      {
        id: "101-2",
        type: "image",
        src: "/images/activities/101/1.png",
        alt: "IEEE IAS PES 101 Session",
        caption: "Session Picture",
      },
      {
        id: "101-3",
        type: "image",
        src: "/images/activities/101/2.png",
        alt: "IEEE IAS PES 101 Session",
        caption: "Session Picture",
      },
      {
        id: "101-4",
        type: "image",
        src: "/images/activities/101/4.png",
        alt: "IEEE IAS PES 101 Session",
        caption: "Session Picture",
      },
      {
        id: "101-5",
        type: "video",
        src: "/images/activities/101/video.mp4",
        alt: "IEEE IAS PES 101 Session",
        caption: "Session Video",
      },
    ],
  },
  {
    id: "album-2",
    title: "Git & GitHub Workshop",
    description: "Hands-on workshop on version control and collaboration",
    coverImage: "/images/activities/Git&Github/git&github.jpg",
    date: "Nov 2025",
    media: [
      {
        id: "git-1",
        type: "image",
        src: "/images/activities/Git&Github/git&github.jpg",
        alt: "Git & GitHub workshop presentation",
        caption: "Workshop Presentation",
      },
      {
        id: "git-2",
        type: "image",
        src: "/images/activities/Git&Github/git1.png",
        alt: "Git & GitHub workshop presentation",
        caption: "Workshop Picture",
      },
      {
        id: "git-3",
        type: "image",
        src: "/images/activities/Git&Github/git2.png",
        alt: "Git & GitHub workshop presentation",
        caption: "Workshop Picture",
      },
    ],
  },
  {
    id: "album-3",
    title: "Video Editing Workshop",
    description: "Adobe Premiere Pro editing techniques",
    coverImage: "/images/activities/Editing/editing.jpg",
    date: "Oct 2025",
    media: [
      {
        id: "edit-1",
        type: "image",
        src: "/images/activities/Editing/editing.jpg",
        alt: "Video Editing Workshop",
        caption: "Workshop Picture",
      },
      {
        id: "edit-2",
        type: "image",
        src: "/images/activities/Editing/edit1.jpg",
        alt: "Video Editing Workshop",
        caption: "Workshop Picture",
      },
      {
        id: "edit-3",
        type: "image",
        src: "/images/activities/Editing/edit2.jpg",
        alt: "Video Editing Workshop",
        caption: "Workshop Picture",
      },
      {
        id: "edit-4",
        type: "image",
        src: "/images/activities/Editing/edit3.jpg",
        alt: "Video Editing Workshop",
        caption: "Workshop Picture",
      },
    ],
  },

  {
    id: "album-4",
    title: "IEEEXtreme 19.0",
    description: "24-hour IEEE Xtreme 19.0 global programming competition",
    coverImage: "/images/activities/IEEEXtreme 19.0 Global/ex4.jpg",
    date: "Oct 2025",
    media: [
      {
        id: "IEEEXtreme-1",
        type: "image",
        src: "/images/activities/IEEEXtreme 19.0 Global/ex4.jpg",
        alt: "24-hour IEEE Xtreme 19.0 global programming competition",
        caption: "Competition Picture",
      },
      {
        id: "IEEEXtreme-2",
        type: "image",
        src: "/images/activities/IEEEXtreme 19.0 Global/ex1.jpg",
        alt: "24-hour IEEE Xtreme 19.0 global programming competition",
        caption: "Competition Picture",
      },
      {
        id: "IEEEXtreme-3",
        type: "image",
        src: "/images/activities/IEEEXtreme 19.0 Global/ex2.jpg",
        alt: "24-hour IEEE Xtreme 19.0 global programming competition",
        caption: "Competition Picture",
      },
      {
        id: "IEEEXtreme-4",
        type: "image",
        src: "/images/activities/IEEEXtreme 19.0 Global/ex3.jpg",
        alt: "24-hour IEEE Xtreme 19.0 global programming competition",
        caption: "Competition Picture",
      },
      {
        id: "IEEEXtreme-5",
        type: "image",
        src: "/images/activities/IEEEXtreme 19.0 Global/ex5.jpg",
        alt: "24-hour IEEE Xtreme 19.0 global programming competition",
        caption: "Competition Picture",
      },
    ],
  },
  {
    id: "album-5",
    title: "IEEE IES SYP 2025",
    description: "IEEE IES Students & Young Professionals Congress 2025",
    coverImage: "/images/activities/IES SYP 2025/1.jpg",
    date: "Aug 2025",
    media: [
      {
        id: "IES-SYP-1",
        type: "image",
        src: "/images/activities/IES SYP 2025/1.jpg",
        alt: "IEEE IES Students & Young Professionals Congress 2025",
        caption: "SYP Picture",
      },
      {
        id: "IES-SYP-2",
        type: "image",
        src: "/images/activities/IES SYP 2025/2.jpg",
        alt: "IEEE IES Students & Young Professionals Congress 2025",
        caption: "SYP Picture",
      },
      {
        id: "IES-SYP-3",
        type: "image",
        src: "/images/activities/IES SYP 2025/3.jpg",
        alt: "IEEE IES Students & Young Professionals Congress 2025",
        caption: "SYP Picture",
      },
      {
        id: "IES-SYP-4",
        type: "image",
        src: "/images/activities/IES SYP 2025/4.jpg",
        alt: "IEEE IES Students & Young Professionals Congress 2025",
        caption: "SYP Picture",
      },
      {
        id: "IES-SYP-5",
        type: "image",
        src: "/images/activities/IES SYP 2025/5.jpg",
        alt: "IEEE IES Students & Young Professionals Congress 2025",
        caption: "SYP Picture",
      },
      {
        id: "IES-SYP-6",
        type: "image",
        src: "/images/activities/IES SYP 2025/6.jpg",
        alt: "IEEE IES Students & Young Professionals Congress 2025",
        caption: "SYP Picture",
      },
    ],
  },
];
