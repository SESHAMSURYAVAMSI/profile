"use client";

import React from "react";
import { motion } from "@/components/motion";

export default function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}