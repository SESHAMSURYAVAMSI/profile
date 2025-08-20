"use client";

import { motion } from "@/components/motion";
import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROFILE.projects.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="rounded-3xl h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((t: string) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm hover:underline">
                    View <ExternalLink className="w-4 h-4 ml-1" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
