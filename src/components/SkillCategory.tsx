"use client";
import { motion } from "framer-motion";
import { IconType } from "react-icons";
import { iconColors } from "./iconColors";

interface Skill {
  name: string;
  icon: IconType;
}

interface SkillCategoryProps {
  title: string;
  skills: Skill[];
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

const skillVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  show: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
    },
  },
  hover: {
    scale: 1.1,
    transition: {
      duration: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 10,
    },
  },
};

const iconVariants = {
  animate: {
    rotate: [0, 360],
    transition: {
      duration: 3,
      ease: "linear",
      repeat: Infinity,
    },
  },
};

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <motion.div
      variants={item}
      className="p-6 rounded-lg border bg-background/50 backdrop-blur-sm"
    >
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <motion.div
            key={skill.name}
            variants={skillVariants}
            initial="hidden"
            animate="show"
            whileHover="hover"
            className="flex items-center gap-2 border rounded-full px-3 py-1.5 cursor-pointer"
          >
            <motion.div variants={iconVariants} animate="animate">
              <skill.icon
                className={`w-4 h-4 ${iconColors[skill.name] || ""}`}
              />
            </motion.div>
            <span className="text-sm font-medium">{skill.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
