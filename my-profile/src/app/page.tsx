"use client";

import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certificates from "@/components/Certificates";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import { PROFILE } from "@/data/profile";
import { motion } from "@/components/motion";

export default function Page() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      {/* Nav is a Client Component internally */}
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Experience />
      <Contact />

      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="border-t border-neutral-200 dark:border-neutral-800 py-8 mt-8 text-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>
            © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </div>
          <div className="text-neutral-500">
            Built with Next.js, Tailwind, and ❤
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
