"use client";

import { motion } from "framer-motion";

export default function SlideInPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "-100%" }}
      transition={{ type: "tween", duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
