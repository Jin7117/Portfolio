import { motion } from "framer-motion";

// A single fluted Doric column, drawn as stacked SVG shapes so the stroke
// can "build" itself in on load — base, fluted shaft, capital, in that order.
function Column({ flip = false }) {
  return (
    <svg
      viewBox="0 0 120 800"
      className={`h-full w-full ${flip ? "scale-x-[-1]" : ""}`}
      fill="none"
      preserveAspectRatio="xMidYMax meet"
    >
      {/* Base */}
      <motion.rect
        x="15" y="760" width="90" height="14"
        stroke="#9C8253" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
      />
      <motion.rect
        x="25" y="742" width="70" height="18"
        stroke="#9C8253" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
      />

      {/* Fluted shaft — a handful of long vertical strokes drawing upward */}
      {[32, 46, 60, 74, 88].map((x, i) => (
        <motion.line
          key={x}
          x1={x} y1="742" x2={x} y2="120"
          stroke="#9C8253"
          strokeWidth="1.25"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 0.8 }}
          transition={{ duration: 1.1, delay: 0.25 + i * 0.05, ease: "easeInOut" }}
        />
      ))}
      <motion.line
        x1="20" y1="742" x2="20" y2="120"
        stroke="#9C8253" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.25, ease: "easeInOut" }}
      />
      <motion.line
        x1="100" y1="742" x2="100" y2="120"
        stroke="#9C8253" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 1.1, delay: 0.25, ease: "easeInOut" }}
      />

      {/* Capital */}
      <motion.rect
        x="22" y="100" width="76" height="16"
        stroke="#9C8253" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1, ease: "easeOut" }}
      />
      <motion.rect
        x="10" y="82" width="100" height="16"
        stroke="#9C8253" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2, ease: "easeOut" }}
      />

      {/* Abacus / entablature ledge */}
      <motion.rect
        x="0" y="60" width="120" height="14"
        stroke="#9C8253" strokeWidth="1.5"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3, ease: "easeOut" }}
      />
    </svg>
  );
}

export default function Pillars() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-y-0 left-0 right-0 z-0 hidden justify-between px-2 sm:px-4 md:flex lg:px-10"
    >
      <motion.div
        className="h-full w-12 opacity-[0.35] lg:w-20"
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <Column />
      </motion.div>
      <motion.div
        className="h-full w-12 opacity-[0.35] lg:w-20"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Column flip />
      </motion.div>
    </div>
  );
}
