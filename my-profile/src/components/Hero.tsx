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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-800 text-xs">
            <Database className="w-4 h-4" />
            <span>Data-driven • MongoDB • Python</span>
          </div>

          <Image
            src="/profile.png"
            alt="Profile picture"
            width={180}
            height={180}
            className="rounded-full shadow-lg"
          />

          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mt-4">
            {PROFILE.name}
          </h1>

          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
            {PROFILE.title} — {PROFILE.summary}
          </p>

          <div className="flex flex-wrap gap-3">
            <a href="#projects">
              <MotionButton
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-2xl bg-blue-600 text-white hover:bg-blue-700 hover:shadow-lg hover:shadow-yellow-400/50 transition"
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
                className="rounded-2xl border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-yellow-400/50 transition"
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
                className="rounded-2xl border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-yellow-400/50 transition"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </MotionButton>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:justify-self-end"
        >
          <Card className="rounded-3xl shadow-sm">
            <CardContent className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {PROFILE.strengths.map((s) => (
                  <div
                    key={s}
                    className="p-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-sm"
                  >
                    <Cpu className="w-4 h-4 inline mr-2" /> {s}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-neutral-500">
                Based in {PROFILE.location}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}
