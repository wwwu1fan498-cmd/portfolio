import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function SocialSidebar() {
  return (
    <>
      {/* Left Social Sidebar */}
      <div className="hidden md:flex fixed left-6 lg:left-12 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
        <Link
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="GitHub Profile"
        >
          <Github className="w-5 h-5" />
        </Link>
        <Link
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="LinkedIn Profile"
        >
          <Linkedin className="w-5 h-5" />
        </Link>
        <Link
          href="mailto:arjun@example.com"
          className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all"
          aria-label="Send Email"
        >
          <Mail className="w-5 h-5" />
        </Link>
      </div>

      {/* Right Email Sidebar */}
      <div className="hidden md:flex fixed right-6 lg:right-12 bottom-0 flex-col items-center gap-6 after:content-[''] after:w-px after:h-24 after:bg-muted-foreground">
        <Link
          href="mailto:arjun@example.com"
          className="text-muted-foreground hover:text-primary transition-colors font-mono text-xs tracking-widest [writing-mode:vertical-rl]"
        >
          arjun@example.com
        </Link>
      </div>
    </>
  );
}
