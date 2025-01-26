export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-20 px-4 bg-background/60 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          Get In Touch
        </h2>
        <p className="text-foreground/90 mb-8">
          I&apos;m currently open for new opportunities. Whether you have a
          question or just want to say hi, I&apos;ll try my best to get back to
          you!
        </p>
        <a
          href="mailto:your@email.com"
          className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm font-medium hover:bg-primary/90 transition"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
