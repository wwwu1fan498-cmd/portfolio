import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-8 px-6 md:px-12 lg:px-24">
      <div className="max-w-5xl mx-auto">
        {/* Mobile Social Links */}
        <div className="md:hidden flex justify-center gap-6 mb-6">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:dhineshkumar@example.com"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Send Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>

        <p className="text-center text-muted-foreground font-mono text-xs">
          Designed & Built by Dhineshkumar
        </p>
      </div>
    </footer>
  );
}
