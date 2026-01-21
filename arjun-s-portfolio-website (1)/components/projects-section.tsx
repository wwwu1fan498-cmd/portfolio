import { ExternalLink, Github, Folder } from "lucide-react";
import Link from "next/link";

const featuredProjects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce application with real-time inventory management, payment processing, and admin dashboard. Features include user authentication, cart functionality, and order tracking.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "Collaborative Code Editor",
    description:
      "Real-time collaborative code editor supporting multiple programming languages with syntax highlighting, live cursor tracking, and integrated chat functionality.",
    technologies: ["React", "Socket.io", "Monaco Editor", "Node.js", "Redis"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    title: "AI Task Manager",
    description:
      "Smart task management app that uses machine learning to prioritize tasks, suggest deadlines, and provide productivity insights. Includes calendar integration and team collaboration features.",
    technologies: ["Next.js", "OpenAI API", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    live: "https://example.com",
  },
];

const otherProjects = [
  {
    title: "Weather Dashboard",
    description:
      "A responsive weather app with 7-day forecasts, location-based updates, and interactive maps.",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    github: "https://github.com",
  },
  {
    title: "Portfolio Generator",
    description:
      "CLI tool that generates beautiful portfolio websites from a simple configuration file.",
    technologies: ["Node.js", "Handlebars", "CSS"],
    github: "https://github.com",
  },
  {
    title: "Expense Tracker",
    description:
      "Personal finance app with budget tracking, expense categorization, and visual reports.",
    technologies: ["React Native", "Firebase", "D3.js"],
    github: "https://github.com",
  },
  {
    title: "URL Shortener",
    description:
      "Fast URL shortening service with analytics, custom aliases, and QR code generation.",
    technologies: ["Express", "MongoDB", "Redis"],
    github: "https://github.com",
  },
  {
    title: "Markdown Blog",
    description:
      "Static blog generator that converts Markdown files into a fast, SEO-optimized website.",
    technologies: ["Next.js", "MDX", "Tailwind CSS"],
    github: "https://github.com",
  },
  {
    title: "Chat Application",
    description:
      "Real-time chat app with rooms, direct messages, file sharing, and message reactions.",
    technologies: ["React", "Socket.io", "PostgreSQL"],
    github: "https://github.com",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">03.</span>
            Things I've Built
          </h2>
          <div className="h-px bg-border flex-1" />
        </div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`relative grid md:grid-cols-12 gap-4 items-center ${
                index % 2 === 1 ? "md:text-right" : ""
              }`}
            >
              <div
                className={`md:col-span-7 ${
                  index % 2 === 1 ? "md:col-start-6" : ""
                }`}
              >
                <div className="aspect-video bg-card rounded-lg border border-border overflow-hidden group">
                  <div className="w-full h-full bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <Folder className="w-16 h-16 text-primary/40" />
                  </div>
                </div>
              </div>

              <div
                className={`md:col-span-6 md:absolute ${
                  index % 2 === 1
                    ? "md:left-0 md:text-left"
                    : "md:right-0 md:text-right"
                }`}
              >
                <p className="text-primary font-mono text-sm mb-2">
                  Featured Project
                </p>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  {project.title}
                </h3>
                <div className="bg-card p-6 rounded-lg shadow-lg border border-border mb-4">
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <ul
                  className={`flex flex-wrap gap-3 mb-4 ${
                    index % 2 === 1 ? "" : "md:justify-end"
                  }`}
                >
                  {project.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="text-muted-foreground font-mono text-xs"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
                <div
                  className={`flex gap-4 ${
                    index % 2 === 1 ? "" : "md:justify-end"
                  }`}
                >
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label={`View ${project.title} on GitHub`}
                  >
                    <Github className="w-5 h-5" />
                  </Link>
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground hover:text-primary transition-colors"
                    aria-label={`View live demo of ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <h3 className="text-xl font-bold text-foreground text-center mb-12">
          Other Noteworthy Projects
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherProjects.map((project) => (
            <div
              key={project.title}
              className="bg-card p-6 rounded-lg border border-border hover:border-primary/50 hover:-translate-y-2 transition-all group"
            >
              <div className="flex items-center justify-between mb-4">
                <Folder className="w-10 h-10 text-primary" />
                <Link
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github className="w-5 h-5" />
                </Link>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>
              <ul className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li
                    key={tech}
                    className="text-muted-foreground font-mono text-xs"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
