"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

const experiences = [
  {
    company: "Tech Startup",
    role: "Full Stack Developer Intern",
    period: "2024 — Present",
    description: [
      "Developed and maintained web applications using React, Next.js, and Node.js",
      "Collaborated with cross-functional teams to implement new features and improve user experience",
      "Optimized database queries resulting in 40% improvement in page load times",
      "Implemented CI/CD pipelines using GitHub Actions for automated testing and deployment",
    ],
    technologies: ["React", "Next.js", "Node.js", "PostgreSQL", "AWS"],
  },
  {
    company: "Freelance",
    role: "Web Developer",
    period: "2023 — 2024",
    description: [
      "Built responsive websites and web applications for small businesses and startups",
      "Designed and implemented RESTful APIs for various client projects",
      "Managed multiple projects simultaneously while meeting tight deadlines",
      "Provided ongoing maintenance and support for deployed applications",
    ],
    technologies: ["JavaScript", "React", "Firebase", "Tailwind CSS"],
  },
  {
    company: "University Lab",
    role: "Research Assistant",
    period: "2022 — 2023",
    description: [
      "Assisted in developing machine learning models for natural language processing research",
      "Created data visualization dashboards using Python and D3.js",
      "Contributed to academic papers and presented findings at department seminars",
      "Mentored junior students in programming fundamentals",
    ],
    technologies: ["Python", "TensorFlow", "D3.js", "Jupyter"],
  },
];

export function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">02.</span>
            Where I've Worked
          </h2>
          <div className="h-px bg-border flex-1" />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-border">
            {experiences.map((exp, index) => (
              <button
                key={exp.company}
                onClick={() => setActiveTab(index)}
                className={cn(
                  "px-5 py-3 text-sm font-mono text-left whitespace-nowrap transition-all",
                  activeTab === index
                    ? "text-primary bg-primary/10 border-b-2 md:border-b-0 md:border-l-2 border-primary md:-ml-px"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                )}
              >
                {exp.company}
              </button>
            ))}
          </div>

          <div className="flex-1 min-h-[300px]">
            <h3 className="text-xl font-semibold text-foreground mb-1">
              {experiences[activeTab].role}{" "}
              <span className="text-primary">
                @ {experiences[activeTab].company}
              </span>
            </h3>
            <p className="text-muted-foreground font-mono text-sm mb-4">
              {experiences[activeTab].period}
            </p>
            <ul className="space-y-3">
              {experiences[activeTab].description.map((item, index) => (
                <li
                  key={index}
                  className="flex gap-3 text-muted-foreground text-sm leading-relaxed"
                >
                  <span className="text-primary mt-1.5">▹</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mt-6">
              {experiences[activeTab].technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary text-xs font-mono rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
