"use client";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";
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

export const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          "bg-primary text-primary-foreground shadow-xs hover:bg-primary/90",
        destructive:
          "bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        link: "text-primary underline-offset-4 hover:underline",
        orange: "bg-gradient-to-r from-orange-500 to-orange-400 text-white shadow-xs hover:bg-orange-600",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}


export default AnimatedButton;
