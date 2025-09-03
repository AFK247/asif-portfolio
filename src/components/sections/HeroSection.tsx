"use client";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

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

export function HeroSection() {
  return (
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
          <span className="text-primary font-bold">Asif Ferdous</span>
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
              4+ years
            </span>{" "}
            of professional experience building and maintaining full stack web
            applications. Specialized in{" "}
            <span className="text-zinc-100 dark:text-zinc-50 font-bold">
              React
            </span>{" "}
            and{" "}
            <span className="text-zinc-100 dark:text-zinc-50 font-bold">
              NextJS{" "}
            </span>
            along with{" "}
            <span className="text-zinc-100 dark:text-zinc-50 font-bold">
              Node{" "}
            </span>{" "}
            and{" "}
            <span className="text-zinc-100 dark:text-zinc-50 font-bold">
              Express{" "}
            </span>
            with a strong ability to solve problems and quickly learn new tools.
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
            href="https://drive.google.com/file/d/101l0Z65K1_GaQwEfh-4xeOZeBexKAvyG/view?usp=sharing"
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
  );
}
