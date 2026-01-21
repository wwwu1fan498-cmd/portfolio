import Link from "next/link";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-primary font-mono text-sm mb-4">04. What's Next?</p>
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Get In Touch
        </h2>
        <p className="text-muted-foreground text-lg mb-12 leading-relaxed">
          I'm currently looking for new opportunities and my inbox is always
          open. Whether you have a question, want to collaborate on a project,
          or just want to say hi, I'll try my best to get back to you!
        </p>
        <Link
          href="mailto:arjun@example.com"
          className="inline-block border border-primary text-primary px-8 py-4 rounded font-mono text-sm hover:bg-primary/10 transition-colors"
        >
          Say Hello
        </Link>
      </div>
    </section>
  );
}
