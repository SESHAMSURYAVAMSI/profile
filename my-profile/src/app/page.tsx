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

      {/* Footer styled like Nav */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mt-12 border-t border-white/10 
                   bg-gradient-to-r from-blue-600/80 to-indigo-700/80 
                   dark:from-neutral-900/90 dark:to-neutral-800/90
                   backdrop-blur-md shadow-md"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-white/90">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            © {new Date().getFullYear()}{" "}
            <span className="font-semibold">{PROFILE.name}</span>. All rights
            reserved.
          </motion.div>

          {/* Right side */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-center gap-2 text-xs sm:text-sm text-white/70"
          >
            <span>Built with</span>
            <span className="font-medium text-white">Next.js</span>,{" "}
            <span className="font-medium text-white">Tailwind</span>, and{" "}
            <span className="text-pink-300">❤</span>
          </motion.div>
        </div>
      </motion.footer>
    </div>
  );
}
