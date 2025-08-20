"use client";

import { motion } from "@/components/motion";
import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid sm:grid-cols-3 gap-4">
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          href={`mailto:${PROFILE.email}`}
          className="group"
        >
          <Card className="rounded-3xl h-full">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">{PROFILE.email}</div>
              </div>
              <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Card>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          href={PROFILE.github}
          target="_blank"
          rel="noreferrer"
          className="group"
        >
          <Card className="rounded-3xl h-full">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <div className="font-medium">GitHub</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">github.com/SESHAMSURYAVAMSI</div>
              </div>
              <Github className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Card>
        </motion.a>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          href={PROFILE.linkedin}
          target="_blank"
          rel="noreferrer"
          className="group"
        >
          <Card className="rounded-3xl h-full">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">/in/sesham-surya-vamsi</div>
              </div>
              <Linkedin className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Card>
        </motion.a>
      </div>
    </Section>
  );
}
