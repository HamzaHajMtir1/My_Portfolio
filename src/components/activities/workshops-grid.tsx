import { motion } from "framer-motion";
import {
  HiAcademicCap,
  HiCodeBracket,
  HiCalendar,
  HiUserGroup,
} from "react-icons/hi2";

import { type Workshop } from "@/data/activities";

// Type icons and colors
const typeConfig = {
  workshop: {
    icon: HiAcademicCap,
    color: "from-blue-500 to-purple-500",
    bgColor: "bg-purple-500/10",
    textColor: "text-purple-400",
  },
  event: {
    icon: HiUserGroup,
    color: "from-orange-500 to-blue-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-400",
  },
  hackathon: {
    icon: HiCodeBracket,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    textColor: "text-orange-400",
  },
};

// Role badge styles
const roleConfig = {
  organizer: { label: "Organizer", color: "bg-purple-500/20 text-purple-400" },
  speaker: { label: "Speaker", color: "bg-blue-500/20 text-blue-400" },
  participant: {
    label: "Participant",
    color: "bg-green-500/20 text-green-400",
  },
  trainer: { label: "Trainer", color: "bg-cyan-500/20 text-cyan-400" },
};

interface WorkshopCardProps extends Workshop {
  index: number;
}

function WorkshopCard(props: WorkshopCardProps) {
  const config = typeConfig[props.type];
  const TypeIcon = config.icon;
  const roleStyle = props.role ? roleConfig[props.role] : null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        type: "spring",
        duration: 0.5,
        delay: props.index * 0.1,
      }}
      whileHover={{ y: -8 }}
      className="group relative"
    >
      {/* Card with glowing border effect on hover */}
      <div className="relative h-full overflow-hidden rounded-xl border border-accent/10 bg-background/60 p-6 shadow-sm transition-all duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/10 dark:bg-zinc-800/60">
        {/* Gradient glow effect on hover - positioned behind content */}
        <div
          className={`absolute inset-0 -z-10 bg-gradient-to-br ${config.color} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-10`}
        />

        {/* Header with type icon and badges */}
        <div className="mb-4 flex items-start justify-between gap-3">
          {/* Type icon */}
          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${config.color} text-white shadow-md`}
          >
            <TypeIcon className="h-5 w-5" />
          </div>

          {/* Badges container */}
          <div className="flex flex-wrap items-center justify-end gap-2">
            {/* Type badge */}
            <span
              className={`rounded-full ${config.bgColor} px-2.5 py-1 text-xs font-medium capitalize ${config.textColor}`}
            >
              {props.type}
            </span>
            {/* Role badge */}
            {roleStyle && (
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium ${roleStyle.color}`}
              >
                {roleStyle.label}
              </span>
            )}
          </div>
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-bold text-foreground transition-colors group-hover:text-accent sm:text-xl">
          {props.title}
        </h3>

        {/* Date */}
        <div className="mb-3 flex items-center gap-2 text-sm text-muted-foreground">
          <HiCalendar className="h-4 w-4" />
          <span>{props.date}</span>
        </div>

        {/* Description */}
        <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
          {props.description}
        </p>

        {/* Topics/Technologies pills */}
        <div className="flex flex-wrap gap-2">
          {props.topics.slice(0, 4).map((topic, idx) => (
            <span
              key={idx}
              className="rounded-md border border-accent/20 bg-accent/5 px-2 py-1 text-xs font-medium text-foreground transition-colors hover:border-accent/40 hover:bg-accent/10"
            >
              {topic}
            </span>
          ))}
          {props.topics.length > 4 && (
            <span className="rounded-md bg-muted px-2 py-1 text-xs font-medium text-muted-foreground">
              +{props.topics.length - 4} more
            </span>
          )}
        </div>

        {/* Bottom accent line that animates on hover */}
        <div
          className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${config.color} transition-all duration-500 group-hover:w-full`}
        />
      </div>
    </motion.div>
  );
}

interface WorkshopsGridProps {
  workshops: Workshop[];
}

export default function WorkshopsGrid({ workshops }: WorkshopsGridProps) {
  return (
    <section className="mx-auto my-24 max-w-7xl px-6 sm:px-14 md:my-32 md:px-20">
      {/* Section title */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center md:mb-16"
      >
        <h2 className="bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          Workshops & Events
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Sharing knowledge, building skills, and connecting with the tech
          community through various workshops, hackathons, and conferences.
        </p>
      </motion.div>

      {/* Responsive grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {workshops.map((workshop, index) => (
          <WorkshopCard key={workshop.id} {...workshop} index={index} />
        ))}
      </div>
    </section>
  );
}
