"use client";
import { motion } from "framer-motion";
import { SkillCategory } from "./SkillCategory";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiSocketdotio,
  SiGithubactions,
  SiNginx,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiGoogleanalytics,
  SiHotjar,
  SiGit,
  SiGithub,
  SiFigma,
  SiTrello,
  SiJira,
  SiAmazon,
} from "react-icons/si";
import { FaAws } from "react-icons/fa";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Bootstrap", icon: SiBootstrap },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "Material-UI", icon: SiMui },
      { name: "shadcn/ui", icon: SiNextdotjs },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Socket.IO", icon: SiSocketdotio },
    ],
  },
  {
    title: "Cloud Services",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "S3", icon: SiAmazon },
      { name: "CloudFront", icon: SiAmazon },
      { name: "Route 53", icon: SiAmazon },
      { name: "Amplify", icon: SiAmazon },
      { name: "EC2", icon: SiAmazon },
    ],
  },
  {
    title: "DevOps",
    skills: [
      { name: "CI/CD", icon: SiGithubactions },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "CDN", icon: SiNginx },
      { name: "Nginx", icon: SiNginx },
      { name: "Automation", icon: SiGithubactions },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
    ],
  },
  {
    title: "Analytics",
    skills: [
      { name: "Google Analytics", icon: SiGoogleanalytics },
      { name: "Hotjar", icon: SiHotjar },
      { name: "Microsoft Clarity", icon: SiGoogleanalytics },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Figma", icon: SiFigma },
      { name: "Trello", icon: SiTrello },
      { name: "Jira", icon: SiJira },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
