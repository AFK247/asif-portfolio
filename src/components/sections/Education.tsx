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

export function Education() {
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
            Education
          </motion.h2>

          <div className="space-y-8">
            {/* BSc */}
            <motion.div
              variants={fadeInUp}
              className="relative border-l border-primary/20 pl-8 pb-8"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-primary/20 bg-background" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold">
                  B.Sc in Computer Science And Engineering
                </h3>
                <span className="text-sm text-muted-foreground">
                  Jan 2018 - Aug 2023
                </span>
              </div>
              <p className="text-lg text-foreground mb-2">
                Rajshahi University Of Engineering And Technology (RUET)
              </p>
              <div className="inline-block bg-primary/10 rounded-full px-3 py-1">
                <span className="text-sm font-medium">CGPA: 3.45 / 4.00</span>
              </div>
            </motion.div>

            {/* HSC */}
            <motion.div
              variants={fadeInUp}
              className="relative border-l border-primary/20 pl-8 pb-8"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-primary/20 bg-background" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold">
                  Higher Secondary Certificate (HSC)
                </h3>
                <span className="text-sm text-muted-foreground">
                  Aug 2015 - April 2017
                </span>
              </div>
              <p className="text-lg text-foreground mb-2">
                The Millennium Stars School And College, Rangpur
              </p>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Group:</span>
                  <span className="text-sm">Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Board:</span>
                  <span className="text-sm">Dinajpur</span>
                </div>
                <div className="inline-block bg-primary/10 rounded-full px-3 py-1">
                  <span className="text-sm font-medium">GPA: 5.00 / 5.00</span>
                </div>
              </div>
            </motion.div>

            {/* SSC */}
            <motion.div
              variants={fadeInUp}
              className="relative border-l border-primary/20 pl-8"
            >
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full border-4 border-primary/20 bg-background" />
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                <h3 className="text-xl font-bold">
                  Secondary School Certificate (SSC)
                </h3>
                <span className="text-sm text-muted-foreground">
                  Jan 2013 - April 2015
                </span>
              </div>
              <p className="text-lg text-foreground mb-2">
                The Millennium Stars School And College, Rangpur
              </p>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Group:</span>
                  <span className="text-sm">Science</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Board:</span>
                  <span className="text-sm">Dinajpur</span>
                </div>
                <div className="inline-block bg-primary/10 rounded-full px-3 py-1">
                  <span className="text-sm font-medium">GPA: 5.00 / 5.00</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
