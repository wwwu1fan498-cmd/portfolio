"use client";

import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-24">
      <div className="max-w-4xl">
        <p className="text-primary font-mono text-sm mb-4 tracking-wider">
          Hi, my name is
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 text-balance">
          Dhineshkumar
        </h1>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-muted-foreground mb-6 text-balance">
          Full Stack Developer
        </h2>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed">
          I'm a Computer Science student passionate about building exceptional
          digital experiences. Currently focused on creating accessible,
          human-centered products with modern web technologies.
        </p>
        <div className="flex items-center gap-6 mb-12">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </Link>
          <Link
            href="mailto:dhineshkumar@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-6 h-6" />
          </Link>
        </div>
        <button
          onClick={() => {
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-primary border border-primary px-6 py-3 rounded hover:bg-primary/10 transition-colors font-mono text-sm"
        >
          Explore More
          <ArrowDown className="w-4 h-4" />
        </button>
      </div>
    </section>
  );
}
