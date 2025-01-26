"use client";

import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { ArrowDown } from "lucide-react";
import { SkillsSection } from "@/components/SkillSection";

// Add this animation variant
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Lighter background with better balance */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-pink-500/15 animate-gradient-xy" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15" />
        <div className="absolute inset-0 bg-background/75 backdrop-blur-[120px]" />
      </div>

      {/* Floating orbs with adjusted opacity */}
      <div className="fixed inset-0 -z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/25 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/25 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/3 left-1/2 w-96 h-96 bg-pink-500/25 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      {/* Content with enhanced text contrast */}
      <div className="relative">
        <Nav />
        <main className="flex flex-col min-h-screen">
          {/* Hero Section with improved text contrast */}
          <section className="flex flex-col items-center justify-center min-h-screen px-4 max-w-7xl mx-auto">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.2,
                  },
                },
              }}
              className="space-y-6 text-center md:text-left max-w-3xl"
            >
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-6xl font-bold tracking-tight text-foreground"
              >
                Hi, I&apos;m{" "}
                <span className="text-primary font-bold">Your Name</span>
              </motion.h1>

              <motion.h2
                variants={fadeInUp}
                className="text-2xl sm:text-3xl font-semibold text-foreground/90"
              >
                Software Engineer
              </motion.h2>

              <motion.div variants={fadeInUp} className="space-y-4">
                <p className="text-lg sm:text-xl text-foreground/90 leading-relaxed">
                  With over{" "}
                  <span className="text-zinc-100 dark:text-zinc-50 font-bold">
                    2 years
                  </span>{" "}
                  of professional experience building and maintaining full stack
                  web applications. Specialized in front-end technologies like{" "}
                  <span className="text-zinc-100 dark:text-zinc-50 font-bold">
                    React
                  </span>{" "}
                  and{" "}
                  <span className="text-zinc-100 dark:text-zinc-50 font-bold">
                    Next.js
                  </span>
                  , with a strong ability to solve problems and quickly learn
                  new tools.
                </p>
              </motion.div>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-6"
              >
                <a
                  href="#contact"
                  className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
                >
                  Get in Touch
                </a>
                <a
                  href="#projects"
                  className="px-8 py-3 rounded-full border border-primary/20 hover:bg-primary/10 transition-colors"
                >
                  View Projects
                </a>
                <a
                  href="https://drive.google.com/your-resume-link-here"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 rounded-full border border-primary/20 hover:bg-primary/10 transition-colors"
                >
                  View Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8"
            >
              <ArrowDown className="animate-bounce w-6 h-6 text-muted-foreground" />
            </motion.div>
          </section>

          {/* Work Experience with better contrast */}
          <section className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={container}
              >
                <motion.h2
                  variants={fadeInUp}
                  className="text-3xl font-bold mb-12 text-center text-foreground"
                >
                  Work Experience
                </motion.h2>

                <div className="space-y-12">
                  <motion.div
                    variants={fadeInUp}
                    className="relative border-l border-primary/20 pl-8 pb-8"
                  >
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[8px] top-0" />
                    <time className="text-sm text-foreground mb-1 block">
                      Sep 2023 - Present
                    </time>
                    <h3 className="text-xl font-semibold mb-2">
                      Software Engineer
                    </h3>
                    <p className="text-foreground mb-4">
                      Eagle 3D Streaming{" "}
                      <span className="text-xs ml-2">
                        Remote - Dallas, Texas, USA
                      </span>
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      <li>
                        Built a pixel streaming control panel for configuring
                        the streaming settings with React and state management
                        with Redux
                      </li>
                      <li>
                        Developed a fully-fledged centralized login system with
                        multi subdomain persistence and proper security
                      </li>
                      <li>
                        Implemented analytics dashboard with Google Analytics
                        and Hotjar
                      </li>
                      <li>
                        Made different front ends CDN-based with AWS S3 bucket
                        and CloudFront
                      </li>
                      <li>
                        Created CI/CD pipeline with GitHub Actions to fully
                        automate the development and deployment process
                      </li>
                      <li>
                        Developed company website with Next.js 15 following best
                        practices, along with an admin panel and backend using
                        Node.js, Express, and Firebase DB
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        React
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Redux
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Next.js
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Node.js
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        AWS
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Firebase
                      </span>
                    </div>
                  </motion.div>

                  <motion.div
                    variants={fadeInUp}
                    className="relative border-l border-primary/20 pl-8"
                  >
                    <div className="absolute w-4 h-4 bg-primary rounded-full -left-[8px] top-0" />
                    <time className="text-sm text-foreground mb-1 block">
                      Feb 2023 - Aug 2023
                    </time>
                    <h3 className="text-xl font-semibold mb-2">
                      Front End Developer
                    </h3>
                    <p className="text-foreground mb-4">
                      Shunno IT{" "}
                      <span className="text-xs ml-2">
                        Onsite - Rajshahi, Bangladesh
                      </span>
                    </p>
                    <ul className="list-disc list-inside space-y-2 text-foreground/80">
                      <li>
                        Developed a web application for internet billing
                        software using React and Redux Toolkit, improving system
                        efficiency and user experience
                      </li>
                      <li>
                        Conducted in-depth analysis and research to address
                        client requirements and design solutions that align with
                        their needs
                      </li>
                      <li>
                        Implemented new features and consistently resolved bugs,
                        ensuring the application remains up to date and
                        functional
                      </li>
                    </ul>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        React
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Redux Toolkit
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        JavaScript
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Skills Section with improved contrast */}
          <SkillsSection />

          {/* Projects Section with better readability */}
          <section id="projects" className="py-20 px-4">
            <div className="container mx-auto max-w-4xl">
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Featured Projects
              </h2>
              <div className="space-y-8">
                {/* Best Work - Incolink */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="border rounded-lg p-8 hover:bg-secondary/50 transition"
                >
                  <div className="space-y-4">
                    <div>
                      <span className="text-sm text-primary font-medium">
                        Best Work (Client Project)
                      </span>
                      <h3 className="text-2xl font-bold mt-1">Incolink</h3>
                    </div>

                    <p className="text-foreground">
                      An anonymous social platform for professionals which tried
                      to solve salary exploitation and unfairness in job sector
                      in Bangladesh
                    </p>

                    <ul className="list-disc list-inside space-y-2 text-foreground">
                      <li>
                        Developed frontend with Next.js and backend with Node.js
                        and Express, adhering to best practices
                      </li>
                      <li>
                        Ensured security with HTTP-only cookies and in-memory
                        Redux login persistence
                      </li>
                      <li>
                        Optimized data fetching, mutation, and state management
                        using RTK Query with lazy loading
                      </li>
                      <li>Used Socket.IO for real-time push notifications</li>
                      <li>
                        Implemented proper error handling on both client and
                        server sides with Zod
                      </li>
                      <li>
                        Customized React Hook Form for reusing different
                        components
                      </li>
                    </ul>

                    <div className="flex flex-wrap gap-2 pt-4">
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Next.js
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Node.js
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Express
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Redux Toolkit
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        RTK Query
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Socket.IO
                      </span>
                      <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                        Zod
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* You can add more projects here */}
              </div>
            </div>
          </section>

          {/* Contact Section with enhanced contrast */}
          <section
            id="contact"
            className="py-20 px-4 bg-background/60 backdrop-blur-sm"
          >
            <div className="container mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Get In Touch
              </h2>
              <p className="text-foreground/90 mb-8">
                I&apos;m currently open for new opportunities. Whether you have
                a question or just want to say hi, I&apos;ll try my best to get
                back to you!
              </p>
              <a
                href="mailto:your@email.com"
                className="inline-flex items-center justify-center rounded-full bg-primary text-primary-foreground px-8 py-3 text-sm font-medium hover:bg-primary/90 transition"
              >
                Say Hello
              </a>
            </div>
          </section>
        </main>

        <footer className="py-6 px-4 border-t bg-background/60 backdrop-blur-sm">
          <div className="container mx-auto text-center text-sm text-foreground/80">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
