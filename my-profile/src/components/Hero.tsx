"use client";

import { motion } from "@/components/motion";
import Image from "next/image";
import { ArrowRight, Cpu, Database, Github, Linkedin } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Section from "./Section";
import { PROFILE } from "@/data/profile";

const MotionButton = motion(Button);

export default function Hero() {
  return (
    <Section id="home" title="">
      <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
        {/* 🔹 Left Column: Badge + Image + Name + Summary + Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center lg:items-start space-y-5"
        >
          {/* Badge */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border 
                       border-neutral-200 dark:border-neutral-800 text-xs 
                       bg-white dark:bg-neutral-900 text-neutral-800 dark:text-neutral-200
                       hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-500/40
                       transition cursor-pointer"
          >
            <Database className="w-4 h-4" />
            <span>Data-driven • MongoDB • Python</span>
          </motion.div>

          {/* Image BELOW badge */}
          <motion.div
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block rounded-full shadow-lg overflow-hidden"
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Image
              src="/profile.png"
              alt="Profile picture"
              width={180}
              height={180}
              className="rounded-full"
            />
          </motion.div>

          {/* Name */}
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mt-2 text-center lg:text-left">
            {PROFILE.name}
          </h1>

          {/* Summary */}
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-xl text-center lg:text-left">
            {PROFILE.title} — {PROFILE.summary}
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
            <a href="#projects">
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-2xl bg-blue-600 text-white 
                           hover:bg-blue-700 hover:shadow-lg hover:shadow-teal-500/45 
                           transition"
              >
                <ArrowRight className="w-4 h-4 mr-2" />
                View Projects
              </MotionButton>
            </a>

            <a href={PROFILE.github} target="_blank" rel="noreferrer">
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant="outline"
                className="rounded-2xl border-blue-600 text-blue-600 
                           hover:bg-blue-600 hover:text-white 
                           hover:shadow-lg hover:shadow-teal-500/45 transition"
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </MotionButton>
            </a>

            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variant="outline"
                className="rounded-2xl border-blue-600 text-blue-600 
                           hover:bg-blue-600 hover:text-white 
                           hover:shadow-lg hover:shadow-teal-500/45 transition"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </MotionButton>
            </a>
          </div>
        </motion.div>

        {/* 🔹 Right Column: Strengths */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-auto"
        >
          <Card className="rounded-3xl shadow-sm">
            <CardContent className="p-4">
              <div className="grid grid-cols-2 gap-4">
                {PROFILE.strengths.map((s) => (
                  <motion.div
                    key={s}
                    whileHover={{ scale: 1.05, rotate: 1 }}
                    whileTap={{ scale: 0.97 }}
                    className="p-3 rounded-2xl border border-neutral-200 
                               dark:border-neutral-800 text-sm 
                               transition-all duration-300 ease-in-out 
                               hover:bg-blue-500/40 hover:text-white 
                               hover:shadow-md cursor-pointer"
                  >
                    <Cpu className="w-4 h-4 inline mr-2" /> {s}
                  </motion.div>
                ))}
              </div>
              <div className="mt-4 text-sm text-neutral-500 text-center lg:text-left">
                Based in {PROFILE.location}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
