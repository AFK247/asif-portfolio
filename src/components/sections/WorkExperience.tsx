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
    <section id="experience" className="py-20 px-4">
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
                  Built a centralized login system with multi-subdomain session
                  persistence, improving security and reducing login failures.
                </li>
                <li>
                  Integrated Google Analytics & Hotjar, enabling data-driven
                  insights that contributed to increased user engagement which
                  resulted in sales increase.
                </li>
                <li>
                  Optimized frontend hosting with AWS S3 & CloudFront, reducing
                  bandwidth costs by 50% and improving page reload speed and
                  time.
                </li>
                <li>
                  Automated CI/CD with GitHub Actions, cutting deployment time
                  by 70% and ensuring zero-downtime releases.
                </li>
                <li>
                  Developed company website & admin panel using Next.js,
                  Node.js, and Firebase, enhancing SEO and content management.
                </li>
                <li>
                  Resolved multiple technical Jira tickets, efficiently handling
                  client queries.
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
                  MUI
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Tailwind
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
                  Socket.io
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  CI/CD
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  CDN
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Firebase
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  AWS
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
                  Developed and optimized manager features, improving
                  application performance and usability.
                </li>
                <li>
                  Reduced load time by 40% through code optimization, removing
                  unnecessary api calls and caching strategies.
                </li>
                <li>
                  Implemented new features and fixed critical bugs, ensuring a
                  smooth user experience.
                </li>
                <li>
                  Collaborated with the marketing team to align development with
                  customer needs.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  NextJS
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Node
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Express
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  MongoDB
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Bootstrap
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Tailwind
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
