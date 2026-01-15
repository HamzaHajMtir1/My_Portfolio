import { AnimatePresence, motion } from "framer-motion";
import { HiUserGroup, HiSparkles, HiLightBulb } from "react-icons/hi2";

import FadeUp from "@/animation/fade-up";

export default function ActivitiesHero() {
  return (
    <section className="relative overflow-hidden px-6 pt-20 sm:px-14 md:px-20 md:pt-28">
      {/* Subtle background decoration - abstract shapes */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Gradient orbs for visual interest */}
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute -left-20 top-40 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 h-48 w-48 rounded-full bg-accent/5 blur-2xl" />
      </div>

      <div className="mx-auto max-w-7xl text-center">
        <AnimatePresence>
          {/* Main Title with gradient effect */}
          <FadeUp key="activities-title" duration={0.6}>
            <h1 className="bg-gradient-to-r from-accent/80 via-accent to-accent/80 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl md:text-6xl lg:text-7xl">
              Activities & Community
            </h1>
            <span className="mt-2 block bg-gradient-to-r from-foreground/80 to-foreground bg-clip-text text-2xl font-semibold text-transparent sm:text-3xl md:text-4xl">
              Involvement
            </span>
          </FadeUp>

          {/* Subtitle with key themes */}
          <FadeUp key="activities-subtitle" duration={0.6} delay={0.2}>
            <p className="mx-auto mt-6 max-w-2xl text-base font-medium text-muted-foreground sm:text-lg md:text-xl">
              Driving impact through{" "}
              <span className="text-accent">leadership</span>,{" "}
              <span className="text-accent">collaboration</span>, and{" "}
              <span className="text-accent">community engagement</span> in tech
              organizations and student initiatives.
            </p>
          </FadeUp>

          {/* Icon badges representing key themes */}
          <FadeUp key="activities-icons" duration={0.6} delay={0.4}>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 rounded-full border border-accent/20 bg-background/50 px-4 py-2 backdrop-blur-sm dark:bg-zinc-800/50"
              >
                <HiUserGroup className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  Leadership
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 rounded-full border border-accent/20 bg-background/50 px-4 py-2 backdrop-blur-sm dark:bg-zinc-800/50"
              >
                <HiSparkles className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  Teamwork
                </span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center gap-2 rounded-full border border-accent/20 bg-background/50 px-4 py-2 backdrop-blur-sm dark:bg-zinc-800/50"
              >
                <HiLightBulb className="h-5 w-5 text-accent" />
                <span className="text-sm font-medium text-foreground">
                  Innovation
                </span>
              </motion.div>
            </div>
          </FadeUp>
        </AnimatePresence>

        {/* Scroll indicator */}
        <FadeUp key="scroll-indicator" duration={0.6} delay={0.6}>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="mt-16 flex justify-center"
          >
            <div className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-accent/30 p-1">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="h-2 w-1 rounded-full bg-accent"
              />
            </div>
          </motion.div>
        </FadeUp>
      </div>
    </section>
  );
}
