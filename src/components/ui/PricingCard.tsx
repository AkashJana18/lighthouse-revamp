"use client";

import { cn } from "@/lib/utils";
import { IconCalendarFilled, IconCheck, IconX } from "@tabler/icons-react";
import { motion } from "framer-motion";
import React from "react";
import AnimatedButton from "./Button";

interface PricingFeature {
  text: string;
  included: boolean;
}

interface PricingCardProps {
  id: string;
  name: string;
  subtitle: string;
  regularPrice: number;
  validity: string;
  features: PricingFeature[];
  buttonText: string;
  buttonVariant: "primary" | "secondary";
}

export const PricingCard: React.FC<PricingCardProps> = ({
  name,
  subtitle,
  regularPrice,
  validity,
  features,
  buttonText,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={cn(
        "relative rounded-3xl bg-secondary/30 flex flex-col justify-between p-8 border-4 transition-all duration-300 hover:scale-105 hover:border-purple-500/70"
      )}
    >
      <div>
        <div className="mb-8">
          <h3 className="text-2xl font-jost font-semibold mb-2 flex items-center gap-2">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground">{subtitle}</p>
        </div>

        <div className="mb-6 flex items-center gap-2">
          <IconCalendarFilled className="w-5 h-5 text-muted-foreground" />
          <span className="text-sm">Validity: {validity}</span>
        </div>

        <div className="mb-6">
          <span className="text-xl font-bold">${regularPrice}/month</span>
        </div>

        <div className="mb-8">
          <h4 className="font-semibold mb-4">What&apos;s included</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div
                  className={cn(
                    "w-5 h-5 rounded-full flex items-center justify-center",
                    feature.included ? "bg-purple-500" : "bg-neutral-500"
                  )}
                >
                  {feature.included ? (
                    <IconCheck className="w-3 h-3 text-white" />
                  ) : (
                    <IconX className="w-3 h-3 text-white" />
                  )}
                </div>
                <span className="text-sm">{feature.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mx-auto">
        <AnimatedButton title={buttonText} variant="primary" />
      </div>
    </motion.div>
  );
};
