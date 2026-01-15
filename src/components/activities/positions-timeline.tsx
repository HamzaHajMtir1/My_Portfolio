import React, { useRef } from "react";
import Link from "next/link";

import { motion, useScroll } from "framer-motion";
import {
  HiUserGroup,
  HiUsers,
  HiHeart,
  HiCpuChip,
  HiCommandLine,
} from "react-icons/hi2";

import { type Position } from "@/data/activities";

// Icon mapping for different position types
const iconMap = {
  leadership: HiUserGroup,
  teamwork: HiUsers,
  tech: HiCpuChip,
  community: HiHeart,
  default: HiCommandLine,
};

// Color variants for position types
const typeColorMap: Record<string, string> = {
  leadership: "from-amber-500 to-orange-500",
  membership: "from-blue-500 to-cyan-500",
  volunteer: "from-amber-500 to-orange-500",
  EXCOM: "from-purple-500 to-indigo-500",
};

interface PositionCardProps extends Position {}

function PositionCard(props: PositionCardProps) {
  const Icon = iconMap[props.icon || "default"];
  const typeGradient = typeColorMap[props.type] || "from-gray-500 to-slate-500";

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ type: "spring", duration: 0.6 }}
      className="group relative"
    >
      {/* Card container with hover effects */}
      <div className="relative overflow-hidden rounded-xl border border-accent/10 bg-background/50 p-6 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 dark:bg-zinc-800/50">
        {/* Gradient accent on top */}
        <div
          className={`absolute left-0 top-0 h-1 w-full bg-gradient-to-r ${typeGradient} opacity-60 transition-opacity duration-300 group-hover:opacity-100`}
        />

        {/* Header: Icon, Role, Organization */}
        <div className="flex items-start gap-4">
          {/* Icon container */}
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br ${typeGradient} p-2.5 text-white shadow-md`}
          >
            <Icon className="h-6 w-6" />
          </div>

          <div className="min-w-0 flex-1">
            {/* Role title */}
            <h3 className="text-lg font-bold text-foreground sm:text-xl">
              {props.role}
            </h3>

            {/* Organization with link */}
            {props.organizationUrl && props.organizationUrl !== "#" ? (
              <Link
                href={props.organizationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-0.5 inline-block text-base font-medium text-accent transition-colors hover:text-accent/80"
              >
                @{props.organization}
              </Link>
            ) : (
              <span className="mt-0.5 block text-base font-medium text-accent">
                @{props.organization}
              </span>
            )}

            {/* Date range */}
            <span className="mt-1 block text-sm text-muted-foreground">
              {props.dateRange}
            </span>
          </div>

          {/* Position type badge */}
          <span
            className={`shrink-0 rounded-full bg-gradient-to-r ${typeGradient} px-3 py-1 text-xs font-medium capitalize text-white`}
          >
            {props.type}
          </span>
        </div>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {props.description}
        </p>
      </div>
    </motion.div>
  );
}

// Timeline indicator component with scroll animation
function TimelineIndicator({
  iconRef,
}: {
  iconRef: React.RefObject<HTMLElement>;
}) {
  const { scrollYProgress } = useScroll({
    target: iconRef,
    offset: ["center end", "center center"],
    layoutEffect: false,
  });

  return (
    <figure className="absolute -left-[52px] top-6 hidden md:block">
      <svg width="40" height="40" viewBox="0 0 40 40">
        <circle
          cx="20"
          cy="20"
          r="15"
          className="fill-none stroke-accent/30 stroke-[2px]"
        />
        <motion.circle
          style={{ pathLength: scrollYProgress }}
          cx="20"
          cy="20"
          r="15"
          className="fill-none stroke-accent stroke-[3px]"
        />
        <circle cx="20" cy="20" r="6" className="fill-accent" />
      </svg>
    </figure>
  );
}

// Wrapper component for each timeline item to properly use useRef hook
function TimelineItem({ position }: { position: Position }) {
  const itemRef = useRef(null);

  return (
    <div ref={itemRef} className="relative">
      <TimelineIndicator iconRef={itemRef} />
      <PositionCard {...position} />
    </div>
  );
}

interface PositionsTimelineProps {
  positions: Position[];
}

export default function PositionsTimeline({
  positions,
}: PositionsTimelineProps) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center start"],
  });

  return (
    <section className="mx-auto my-24 max-w-7xl px-6 sm:px-14 md:my-32 md:px-20">
      {/* Section title */}
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12 bg-gradient-to-r from-accent/70 to-accent bg-clip-text text-center text-3xl font-bold text-transparent sm:text-4xl md:mb-16 md:text-5xl lg:text-6xl"
      >
        Positions & Memberships
      </motion.h2>

      {/* Timeline container */}
      <div ref={containerRef} className="relative md:ml-12">
        {/* Animated timeline line - visible on md+ screens */}
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute -left-8 top-0 hidden h-full w-1 origin-top rounded-full bg-accent md:block"
        />

        {/* Static background line */}
        <div className="absolute -left-8 top-0 hidden h-full w-1 rounded-full bg-accent/20 md:block" />

        {/* Position cards */}
        <div className="flex flex-col gap-8">
          {positions.map((position) => (
            <TimelineItem key={position.id} position={position} />
          ))}
        </div>
      </div>
    </section>
  );
}
