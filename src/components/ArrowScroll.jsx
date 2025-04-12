import React from "react";
import { motion } from "framer-motion";

export function ScrollDown({ path }) {
  return (
    <motion.a
      className="absolute bottom-8 left-1/2 -translate-x-1/2 "
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      href={`#${path}`}
    >
      <div className="animate-bounce flex flex-col items-center text-gray-300">
        <span className="text-sm mb-2">Scroll down</span>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </motion.a>
  );
}

export function ScrollUp({ path }) {
  return (
    <motion.a
      className="fixed bottom-8 right-4 -translate-x-1/2 z-100"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2 }}
      href={`#${path}`}
    >
      <div className="animate-bounce flex flex-col items-center text-gray-300 ">
        <svg
          className="w-6 h-6 mb-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7 7 7"
          />
        </svg>
      </div>
    </motion.a>
  );
}
