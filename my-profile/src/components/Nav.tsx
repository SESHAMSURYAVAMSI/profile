"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sun, Moon, Download } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Nav() {
  const [dark, setDark] = React.useState(true);

  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.4 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -5 },
    visible: { opacity: 1, y: 0 },
  };

  // Custom hover colors for each link
  const linkColors: Record<string, string> = {
    about: "hover:text-blue-300",
    skills: "hover:text-cyan-300",
    projects: "hover:text-indigo-300",
    certificates: "hover:text-purple-300",
    experience: "hover:text-pink-300",
    contact: "hover:text-yellow-300",
  };

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-30 backdrop-blur-md 
                 bg-gradient-to-r from-blue-600/80 to-indigo-700/80 
                 dark:from-neutral-900/90 dark:to-neutral-800/90
                 border-b border-white/10 shadow-md"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand/Name */}
        <a
          href="#home"
          className="font-bold tracking-tight text-lg text-white"
        >
          {PROFILE.name}
        </a>

        {/* Nav links */}
        <motion.nav
          className="hidden sm:flex items-center gap-6 text-sm text-white/90 font-medium"
          variants={navVariants}
          initial="hidden"
          animate="visible"
        >
          {[
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "certificates", label: "Certificates" },
            { id: "experience", label: "Experience" },
            { id: "contact", label: "Contact" },
          ].map((link) => (
            <motion.a
              key={link.id}
              href={`#${link.id}`}
              variants={linkVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`relative group transition-colors duration-300 ${linkColors[link.id]}`}
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </motion.nav>

        {/* Right side buttons */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="rounded-xl text-white hover:bg-white/20"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          {/* Resume Button - single color + blinking animation */}
          <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              animate={{ opacity: [1, 0.6, 1] }} // blinking effect
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Button className="rounded-xl bg-blue-600 text-white border-none shadow-md hover:shadow-lg transition-all">
                <Download className="w-4 h-4 mr-2" /> Resume
              </Button>
            </motion.div>
          </a>
        </div>
      </div>
    </motion.header>
  );
}
