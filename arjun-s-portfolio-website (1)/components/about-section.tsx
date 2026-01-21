export function AboutSection() {
  const skills = [
    "JavaScript (ES6+)",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "Python",
    "PostgreSQL",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "Docker",
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground whitespace-nowrap">
            <span className="text-primary font-mono text-xl mr-2">01.</span>
            About Me
          </h2>
          <div className="h-px bg-border flex-1" />
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="md:col-span-2 space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              Hello! I'm Dhineshkumar, a Computer Science student with a passion for
              creating things that live on the internet. My interest in web
              development started back in high school when I decided to try
              building custom themes for my favorite games — turns out hacking
              together websites taught me a lot about HTML & CSS!
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Fast-forward to today, and I've had the privilege of working on{" "}
              <span className="text-primary">
                diverse projects ranging from e-commerce platforms to real-time
                collaboration tools
              </span>
              . My main focus these days is building accessible, inclusive
              products and digital experiences.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Here are a few technologies I've been working with recently:
            </p>
            <ul className="grid grid-cols-2 gap-2 mt-4">
              {skills.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-2 text-muted-foreground text-sm"
                >
                  <span className="text-primary">▹</span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative group">
            <div className="relative">
              <div className="w-full aspect-square bg-primary/20 rounded overflow-hidden">
                <div className="w-full h-full bg-card flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">D</span>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-primary rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
