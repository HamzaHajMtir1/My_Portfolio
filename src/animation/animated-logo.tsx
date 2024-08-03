import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function AnimatedLogo() {
  const animationVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1,
        ease: "easeInOut",
      },
    },
  };

  return (
    <AnimatePresence>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={animationVariants}
        className="flex h-full w-full items-center justify-center"
      >
        <Image
          src={logo}
          alt="Logo"
          width={300} // Ajustez la largeur selon vos besoins
          height={300} // Ajustez la hauteur selon vos besoins
        />
      </motion.div>
    </AnimatePresence>
  );
}
