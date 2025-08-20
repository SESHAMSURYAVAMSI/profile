"use client";

import Section from "./Section";
import { PROFILE } from "@/data/profile";

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
  <div className="flex flex-wrap gap-3">
    {PROFILE.skills.map((skill) => (
      <span
        key={skill}
        className="px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-md cursor-pointer"
      >
        {skill}
      </span>
    ))}
  </div>
</Section>

  );
}
