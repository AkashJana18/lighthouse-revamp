"use client";
import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary";

interface AnimatedButtonProps {
  title: string;
  variant?: ButtonVariant;
  scale?: number;
}

const buttonConfig = {
  primary: {
    hoverShadow: "0px 20px 50px rgba(142, 97, 255, 0.8)",
    textHover: "group-hover:text-purple-400",
    gradientVia: "via-purple-500",
    bg: "bg-black/60",
  },
  secondary: {
    hoverShadow: "0px 20px 50px rgba(255, 255, 255, 0.7)",
    textHover: "group-hover:text-white",
    gradientVia: "via-white",
    bg: "bg-transparent",
  },
};

const AnimatedButton = ({
  title,
  variant = "primary",
  scale = 1,
}: AnimatedButtonProps) => {
  const config = buttonConfig[variant];

  return (
    <div
      className="[perspective:1000px] [transform-style:preserve-3d]"
      style={{ transform: `scale(${scale})` }}
    >
      <motion.button
        whileHover={{
          rotateX: 25,
          boxShadow: config.hoverShadow,
          y: -5,
        }}
        whileTap={{
          y: 5,
        }}
        style={{
          translateZ: "100px",
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={`group relative px-12 py-4 backdrop-blur-lg rounded-lg ${config.bg} shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,0px_-1px_4px_0px_rgba(255,255,255,0.1)_inset]`}
      >
        <span className={`${config.textHover} transition-colors duration-300`}>
          {title}
        </span>
        <span
          className={`absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent ${config.gradientVia} to-transparent h-px w-3/4 mx-auto`}
        ></span>
        <span
          className={`absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent ${config.gradientVia} to-transparent h-[4px] w-3/4 mx-auto blur-sm`}
        ></span>
      </motion.button>
    </div>
  );
};

export default AnimatedButton;
