"use client";

import Section from "./Section";
import { SiMongodb, SiNextdotjs, SiReact, SiPython } from "react-icons/si";
import { motion } from "framer-motion";

const skills = [
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" }, // green
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" }, // black
  { name: "React.js", icon: SiReact, color: "#61DAFB" }, // blue
  { name: "Python", icon: SiPython, color: "#3776AB" }, // blue
];

export default function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <motion.span
            key={skill.name}
            initial={{ opacity: 0, x: 100 }} // start from right
            whileInView={{ opacity: 1, x: 0 }} // slide into place
            transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
            viewport={{ once: true }} // animate only once when visible
            className="flex items-center gap-3 px-4 py-2 rounded-full border border-neutral-300 dark:border-neutral-700 text-base font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1 hover:shadow-lg cursor-pointer"
          >
            <skill.icon className="w-6 h-6" style={{ color: skill.color }} />
            {skill.name}
          </motion.span>
        ))}
      </div>
    </Section>
  );
}
