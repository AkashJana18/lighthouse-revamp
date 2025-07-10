"use client";
import { motion } from "framer-motion";
import CountUp from "react-countup";

const STAT_ITEMS = [
  {
    title: "API Requests / Day",
    value: 10,
    suffix: "M+",
  },
  {
    title: "Users",
    value: 20,
    suffix: "K+",
  },
  {
    title: "Number of files",
    value: 5.5,
    suffix: "M+",
    decimals: 1,
  },
];

export default function StatBox() {
  return (
    <div className="flex flex-wrap justify-between gap-4 p-6 rounded-lg">
      {STAT_ITEMS.map((item, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center min-w-[100px] p-4 rounded-lg border-4 bg-neutral-950/50 backdrop-blur-3xl"
          whileHover={{
            scale: 1.08,
            transition: { duration: 0.2 },
          }}
          initial={{ scale: 1 }}
        >
          <p className="text-sm text-gray-600 dark:text-gray-300">
            {item.title}
          </p>
          <p className="text-2xl font-bold dark:text-white">
            <CountUp
              duration={8}
              end={item.value}
              delay={2}
              suffix={item.suffix}
              decimals={item.decimals}
            />
          </p>
        </motion.div>
      ))}
    </div>
  );
}