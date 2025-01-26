"use client";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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

export function WorkExperience() {
  return (
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
            {/* Eagle 3D Streaming */}
            <motion.div
              variants={fadeInUp}
              className="relative border-l border-primary/20 pl-8 pb-8"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-primary/20 bg-background" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <span className="text-sm text-muted-foreground">
                  Sep 2023 - Present
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                <p className="text-lg text-foreground">Eagle 3D Streaming</p>
                <span className="text-sm text-muted-foreground">
                  Remote - Dallas, Texas, USA
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  Built a pixel streaming control panel for configuring the
                  streaming settings with React and state management with Redux
                </li>
                <li>
                  Developed a fully-fledged centralized login system with multi
                  subdomain persistence and proper security
                </li>
                <li>
                  Implemented analytics dashboard with Google Analytics and
                  Hotjar
                </li>
                <li>
                  Made different front ends CDN-based with AWS S3 bucket and
                  CloudFront
                </li>
                <li>
                  Created CI/CD pipeline with GitHub Actions to fully automate
                  the development and deployment process
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
                  Express
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Firebase
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  AWS
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  CI/CD
                </span>
              </div>
            </motion.div>

            {/* Shunno IT */}
            <motion.div
              variants={fadeInUp}
              className="relative border-l border-primary/20 pl-8"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-primary/20 bg-background" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold">Front End Developer</h3>
                <span className="text-sm text-muted-foreground">
                  Feb 2023 - Aug 2023
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                <p className="text-lg text-foreground">Shunno IT</p>
                <span className="text-sm text-muted-foreground">
                  Onsite - Rajshahi, Bangladesh
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>
                  Developed a web application for internet billing software
                  using React and Redux Toolkit, improving system efficiency and
                  user experience
                </li>
                <li>
                  Conducted in-depth analysis and research to address client
                  requirements and design solutions that align with their needs
                </li>
                <li>
                  Implemented new features and consistently resolved bugs,
                  ensuring the application remains up to date and functional
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
  );
}
