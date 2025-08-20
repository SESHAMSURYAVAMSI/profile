"use client";

import { motion } from "@/components/motion";
import Section from "./Section";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";
import { PROFILE } from "@/data/profile";

export default function Certificates() {
  return (
    <Section id="certificates" title="Certificates">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROFILE.certificates.map((c) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
          >
            <Card className="rounded-3xl h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-semibold mb-1">{c.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-2">
                  {c.issuer} • {c.year}
                </p>
                <div className="mt-auto">
                  <a href={c.link} target="_blank" rel="noreferrer" className="inline-flex items-center text-sm hover:underline">
                    View Certificate <ExternalLink className="w-4 h-4 ml-1" />
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
