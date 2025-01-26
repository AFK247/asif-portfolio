"use client";
import { motion } from "framer-motion";
import { skillCategories } from "./sections/SkillSection";
import { iconColors } from "./iconColors";

export function SkillsPond() {
  const skills = skillCategories.flatMap((category) => category.skills);

  const floatingAnimation = {
    y: [0, 10, -10],
    x: [0, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "linear",
    },
  };

  return (
    <div className="relative w-[500px] h-[500px] rounded-full bg-secondary/20 backdrop-blur-sm">
      {skills.map((skill, index) => (
        <motion.div
          key={index}
          className="absolute"
          initial={{
            x: Math.random() * 400 + 50, // Random position between 50-450px
            y: Math.random() * 400 + 50, // Random position between 50-450px
          }}
          animate={floatingAnimation}
          drag
          dragConstraints={{
            top: 0,
            left: 0,
            right: 500,
            bottom: 500,
          }}
        >
          <div className="flex items-center gap-2 bg-background/80 backdrop-blur-sm border shadow-sm rounded-full px-3 py-1.5">
            <skill.icon className={`w-4 h-4 ${iconColors[skill.name] || ""}`} />
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
