"use client";

import React from "react";
import { motion } from "@/components/motion";
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

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-lg">
          {PROFILE.name}
        </a>

        <motion.nav
          className="hidden sm:flex items-center gap-6 text-sm"
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
              whileHover={{ scale: 1.1, color: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
            </motion.a>
          ))}
        </motion.nav>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle theme"
            className="rounded-2xl"
          >
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>

          <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
            <motion.div whileHover={{ scale: 1.08 }} whileTap={{ scale: 0.95 }}>
              <Button className="rounded-2xl animate-pulse hover:animate-none">
                <Download className="w-4 h-4 mr-2" /> Resume
              </Button>
            </motion.div>
          </a>
        </div>
      </div>
    </motion.header>
  );
}