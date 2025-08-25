
export const PROFILE = {
  name: "Sesham Surya Vamsi",
  title: "Aspiring Data Engineer • Software Developer",
  location: "India",
  email: "suryavamsis005@gmail.com",
  github: "https://github.com/SESHAMSURYAVAMSI",
  linkedin: "https://www.linkedin.com/in/sesham-surya-vamsi-58157b241/",
  resumeUrl: "/resume.pdf",
  summary:
    "Software Development Intern with hands-on experience in MongoDB, Next.js, React.js, and Python. Passionate about building scalable, data-driven solutions and growing into a Data Engineering role.",
  strengths: ["Problem-solving", "Teamwork", "Leadership", "Quick learning"],
  // skills: ["MongoDB", "Next.js", "React.js", "Python"],
  projects: [
    {
      title: "Silkworm Incubator",
      stack: ["Arduino IDE", "IoT Sensors"],
      description:
        "The main objective of this project is to provide the sufficient environmental conditions to the silkworm inside the incubator. By using Arduino IDE as software tool and other hardware tools to design the prototype of silkworm incubator.",
      link: "https://ieeexplore.ieee.org/abstract/document/10166987",
    },
  ],
  certificates: [
    {
      title: "Software Development Internship",
      issuer: "SaaScraft Studio (India) Pvt Ltd",
      year: "2025",
      link: "/internship-certificate.pdf",
    },
    {
      title: "Training Certificate",
      issuer: "Brand Zappy",
      year: "2022",
      link: "http://drive.google.com/file/d/1iepUg-XAXxsxeV_0ILluwR83nha86xpJ/view",
    },
    {
      title: "BootCamp on Python and Artificial Intelligence",
      issuer: "Dewtown",
      year: "2023",
      link: "https://drive.google.com/file/d/1E0TlTRxO2_24vGYxYRiTpZBzkgNk2ofJ/view",
    },
    {
      title: "Microsoft Student Ambassador",
      issuer: "Microsoft",
      year: "2023",
      link: "https://drive.google.com/file/d/1ZDwWNNeh7ezLGgZRi98WQ5eJB3p-qoKD/view",
    },
  ],
  experience: [
    {
      role: "Software Development Intern",
      company: "SaaScraft Studio (India) Pvt Ltd",
      period: "2025 – Present",
      bullets: [
        "Built responsive features using React.js and Next.js, improving page interactions and performance.",
        "Designed MongoDB schemas and implemented CRUD APIs for core modules.",
        "Contributed to code reviews, debugging, and Agile sprints with cross-functional teams.",
      ],
    },
  ],
} as const;

export type Profile = typeof PROFILE;
