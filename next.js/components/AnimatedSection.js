"use client";  // Add this if using Next.js App Router

import { motion } from "framer-motion";

export default function AnimatedSection({ children, initial }) {
  return (
    <motion.div initial={initial} animate={{ opacity: 1, y: 0 }}>
      {children}
    </motion.div>
  );
}
