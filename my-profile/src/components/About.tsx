"use client";

import Section from "./Section";

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="prose dark:prose-invert max-w-none">
        <p>
          I’m a Software Development Intern focused on building reliable web experiences and data workflows. I enjoy converting raw data into
          useful features and insights using <strong>MongoDB</strong>, <strong>Next.js</strong>, <strong>React.js</strong>, and{" "}
          <strong>Python</strong>.
        </p>
        <p>
          My goal is to grow as a <strong>Data Engineer</strong>—designing scalable data pipelines, clean schemas, and performant APIs that
          power analytics and applications.
        </p>
      </div>
    </Section>
  );
}
