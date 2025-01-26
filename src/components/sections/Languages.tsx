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

interface Language {
  name: string;
  level: string;
  progress: number;
}

const languages: Language[] = [
  {
    name: "Bangla",
    level: "Native",
    progress: 100,
  },
  {
    name: "English",
    level: "Excellent",
    progress: 90,
  },
];

export function Languages() {
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
            Languages
          </motion.h2>

          <div className="grid gap-6">
            {languages.map((language) => (
              <motion.div
                key={language.name}
                variants={fadeInUp}
                className="relative"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold">{language.name}</h3>
                  <span className="text-sm text-muted-foreground">
                    {language.level}
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${language.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-primary/60 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
