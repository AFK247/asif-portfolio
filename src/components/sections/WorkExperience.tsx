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
            {/* Cayman Gateway */}
            <motion.div
              variants={fadeInUp}
              className="relative border-l border-primary/20 pl-8 pb-8"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-primary/20 bg-background" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <span className="text-sm text-muted-foreground">
                  Apr 2025 - Present
                </span>
              </div>
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-4">
                <p className="text-lg text-foreground">Cayman Gateway</p>
                <span className="text-sm text-muted-foreground">
                  Remote - George Town, Grand Cayman, Cayman Islands
                </span>
              </div>
              <ul className="list-disc list-inside space-y-2 text-foreground/80">
                <li>Created a support ticket system for merchants.</li>
                <li>Optimized the API consumption by 40%.</li>
                <li>Implemented Apple Pay payment method.</li>
                <li>
                  Converted legacy Angular, Laravel codebase to modern React and
                  Next.js.
                </li>
                <li>
                  Converted legacy codebase from Node 12 to the latest Node
                  version.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React",
                  "Nest",
                  "Next.js",
                  "Zustand",
                  "Node",
                  "Express",
                  "MySQL",
                  "Firebase",
                  "Sequelize",
                  "RabbitMQ",
                  "MUI",
                  "Tailwind",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Eagle 3D Streaming */}
            <motion.div
              variants={fadeInUp}
              className="relative border-l border-primary/20 pl-8 pb-8"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-primary/20 bg-background" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold">Software Engineer</h3>
                <span className="text-sm text-muted-foreground">
                  Sep 2023 - Sept 2025
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
                  Developed a pixel streaming control panel to manipulate the
                  stream settings.
                </li>
                <li>
                  Optimized website performance with CloudFront, reducing
                  bandwidth costs by 50%.
                </li>
                <li>
                  Automated CI/CD with GitHub Actions, cutting deployment time
                  by 70%.
                </li>
                <li>
                  Built a centralized login system with multi-subdomain session
                  login persistence.
                </li>
                <li>
                  Integrated Google Analytics & Hotjar that contributed to
                  increased user engagement.
                </li>
                <li>
                  Converted legacy React codebase to the latest Next.js version.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React",
                  "Next.js",
                  "Redux",
                  "MUI",
                  "Tailwind",
                  "Node",
                  "Express",
                  "Firebase",
                  "MongoDB",
                  "AWS",
                  "Socket.io",
                  "CI/CD",
                  "CDN",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Shunno IT */}
            <motion.div
              variants={fadeInUp}
              className="relative border-l border-primary/20 pl-8"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-primary/20 bg-background" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold">Software Engineer</h3>
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
                  Developed and optimized new features, improving application
                  performance.
                </li>
                <li>
                  Reduced load time by 40% through lazy loading optimization and
                  caching strategies.
                </li>
                <li>
                  Collaborated with the marketing team to align development with
                  customer needs.
                </li>
              </ul>
              <div className="flex flex-wrap gap-2 mt-4">
                {[
                  "React",
                  "Node.js",
                  "Redux Toolkit",
                  "Bootstrap",
                  "Tailwind",
                  "Express",
                  "MongoDB",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="text-xs bg-primary/10 text-primary px-2 py-1 rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
