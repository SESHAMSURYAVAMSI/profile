"use client";


import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, Database, Cpu, Moon, Sun, ExternalLink, ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// ---------- CONFIG: Edit these to personalize ----------
const PROFILE = {
  name: "Sesham Surya Vamsi",
  title: "Aspiring Data Engineer • Software Developer",
  location: "India",
  email: "suryavamsis005@gmail.com",
  github: "https://github.com/SESHAMSURYAVAMSI",
  linkedin: "https://www.linkedin.com/in/sesham-surya-vamsi-58157b241/",
  resumeUrl: "/resume.pdf", // put a file named resume.pdf at the site root
  summary:
    "Software Development Intern with hands-on experience in MongoDB, Next.js, React.js, and Python. Passionate about building scalable, data‑driven solutions and growing into a Data Engineering role.",
  strengths: ["Problem‑solving", "Teamwork", "Leadership", "Quick learning"],
  skills: ["MongoDB", "Next.js", "React.js", "Python"],
  // Showcase 2–4 projects. Links can point to GitHub or live demos.
  projects: [
    {
      title: "Silkworm Incubator",
      stack: ["Ardunio IDE", "IoT Sensors"],
      description:
        "The main objective of this project is to provide the sufficient environmental conditions to the silkworm inside the incubator. By using Arduino IDE as software tool and other hardware tools to design the prototype of silkworm incubator.",
      link: "https://ieeexplore.ieee.org/abstract/document/10166987",
    },
    // {
    //   title: "Portfolio + Blog",
    //   stack: ["Next.js", "React", "MDX"],
    //   description:
    //     "A fast personal site with blog support, SEO optimization, and CMS‑ready content structure.",
    //   link: "https://github.com/yourusername/portfolio-blog",
    // },
    // {
    //   title: "ETL Prototype",
    //   stack: ["Python", "Pandas", "CSV/JSON"],
    //   description:
    //     "An end‑to‑end mini data pipeline to extract survey data, transform it, and load aggregated insights into MongoDB.",
    //   link: "https://github.com/yourusername/python-etl-prototype",
    // },
  ],
  experience: [
    {
      role: "Software Development Intern",
      company: "SaaScraft Studio (India) Pvt Ltd",
      period: "2025 – Present",
      bullets: [
        "Built responsive features using React.js and Next.js, improving page interactions and performance.",
        "Designed MongoDB schemas and implemented CRUD APIs for core modules.",
        "Contributed to code reviews, debugging, and Agile sprints with cross‑functional teams.",
      ],
    },
  ],
};
// -------------------------------------------------------

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <motion.h2
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8"
      >
        {title}
      </motion.h2>
      {children}
    </section>
  );
}

function Nav() {
  const [dark, setDark] = React.useState(true);
  React.useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  return (
    <header className="sticky top-0 z-30 backdrop-blur bg-white/70 dark:bg-neutral-900/70 border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-lg">{PROFILE.name}</a>
        <nav className="hidden sm:flex items-center gap-6 text-sm">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#experience" className="hover:underline">Experience</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={() => setDark((d) => !d)} aria-label="Toggle theme" className="rounded-2xl">
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </Button>
          <a href={PROFILE.resumeUrl} target="_blank" rel="noreferrer">
            <Button className="rounded-2xl">
              <Download className="w-4 h-4 mr-2" /> Resume
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
}

function Hero() {
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
            <span>Data‑driven • MongoDB • Python</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight">
            {PROFILE.name}
          </h1>
          <p className="text-lg text-neutral-700 dark:text-neutral-300 max-w-xl">
            {PROFILE.title} — {PROFILE.summary}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#projects"><Button className="rounded-2xl"><ArrowRight className="w-4 h-4 mr-2"/>View Projects</Button></a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-2xl"><Github className="w-4 h-4 mr-2"/>GitHub</Button></a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer"><Button variant="outline" className="rounded-2xl"><Linkedin className="w-4 h-4 mr-2"/>LinkedIn</Button></a>
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
                  <div key={s} className="p-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 text-sm">
                    <Cpu className="w-4 h-4 inline mr-2" /> {s}
                  </div>
                ))}
              </div>
              <div className="mt-4 text-sm text-neutral-500">Based in {PROFILE.location}</div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
}

function About() {
  return (
    <Section id="about" title="About">
      <div className="prose dark:prose-invert max-w-none">
        <p>
          I’m a Software Development Intern focused on building reliable web experiences and data workflows.
          I enjoy converting raw data into useful features and insights using <strong>MongoDB</strong>, <strong>Next.js</strong>, <strong>React.js</strong>, and <strong>Python</strong>.
        </p>
        <p>
          My goal is to grow as a <strong>Data Engineer</strong>—designing scalable data pipelines, clean schemas, and performant APIs that power analytics and applications.
        </p>
      </div>
    </Section>
  );
}

function Skills() {
  return (
    <Section id="skills" title="Skills">
      <div className="flex flex-wrap gap-3">
        {PROFILE.skills.map((skill) => (
          <span
            key={skill}
            className="px-3 py-1 rounded-full border border-neutral-300 dark:border-neutral-700 text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </Section>
  );
}

function Projects() {
  return (
    <Section id="projects" title="Projects">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROFILE.projects.map((p) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
          >
            <Card className="rounded-3xl h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-lg font-semibold mb-2">{p.title}</h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-3">{p.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.stack.map((t: string) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full border border-neutral-300 dark:border-neutral-700">{t}</span>
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

function Experience() {
  return (
    <Section id="experience" title="Experience">
      <div className="space-y-4">
        {PROFILE.experience.map((e) => (
          <Card key={e.role} className="rounded-3xl">
            <CardContent className="p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                <h3 className="text-lg font-semibold">{e.role} • {e.company}</h3>
                <div className="text-sm text-neutral-500">{e.period}</div>
              </div>
              <ul className="list-disc pl-6 space-y-1 text-sm">
                {e.bullets.map((b: string, i: number) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </Section>
  );
}

function Contact() {
  return (
    <Section id="contact" title="Contact">
      <div className="grid sm:grid-cols-3 gap-4">
        <a href={`mailto:${PROFILE.email}`} className="group">
          <Card className="rounded-3xl h-full">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">{PROFILE.email}</div>
              </div>
              <Mail className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Card>
        </a>
        <a href={PROFILE.github} target="_blank" rel="noreferrer" className="group">
          <Card className="rounded-3xl h-full">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <div className="font-medium">GitHub</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">github.com/SESHAMSURYAVAMSI</div>
              </div>
              <Github className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Card>
        </a>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="group">
          <Card className="rounded-3xl h-full">
            <CardContent className="p-6 flex items-center justify-between">
              <div>
                <div className="font-medium">LinkedIn</div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">/in/sesham-surya-vamsi</div>
              </div>
              <Linkedin className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </CardContent>
          </Card>
        </a>
      </div>
    </Section>
  );
}

export default function PortfolioSite() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-50">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="border-t border-neutral-200 dark:border-neutral-800 py-8 mt-8 text-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</div>
          <div className="text-neutral-500">Built with Next.js, Tailwind, and ❤</div>
        </div>
      </footer>
    </div>
  );
}
