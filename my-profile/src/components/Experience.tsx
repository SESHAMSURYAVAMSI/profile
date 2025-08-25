"use client";

import { motion } from "@/components/motion";
import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { PROFILE } from "@/data/profile";

export default function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-4">
        {PROFILE.experience.map((e) => (
          <motion.div
            key={e.role}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="rounded-3xl h-full transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-teal-500/45">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="text-lg font-semibold">
                    {e.role} • {e.company}
                  </h3>
                  <div className="text-sm text-neutral-500">{e.period}</div>
                </div>
                <ul className="list-disc pl-6 space-y-1 text-sm">
                  {e.bullets.map((b: string, i: number) => (
                    <li key={i}>{b}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
