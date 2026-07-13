"use client";
import { motion } from "framer-motion";
import { SkillCategory } from "../SkillCategory";
import {
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiBootstrap,
  SiTailwindcss,
  SiMui,
  SiShadcnui,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiMongoose,
  SiPrisma,
  SiDrizzle,
  SiSequelize,
  SiRabbitmq,
  SiFirebase,
  SiSocketdotio,
  SiGithubactions,
  SiDocker,
  SiCloudflare,
  SiC,
  SiCplusplus,
  SiJavascript,
  SiTypescript,
  SiGoogleanalytics,
  SiHotjar,
  SiGit,
  SiGithub,
  SiStripe,
  SiFigma,
  SiTrello,
  SiClickup,
  SiSlack,
  SiJira,
  SiConfluence,
  SiClaude,
  SiAmazon,
  SiVercel,
  SiCpanel,
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
      { name: "Next JS", icon: SiNextdotjs },
      { name: "Redux", icon: SiRedux },
      { name: "Zustand", icon: SiReact },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "Material UI", icon: SiMui },
      { name: "Shadcn", icon: SiShadcnui },
      { name: "Bootstrap", icon: SiBootstrap },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: SiNodedotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Nest.js", icon: SiNestjs },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Mongoose", icon: SiMongoose },
      { name: "Prisma", icon: SiPrisma },
      { name: "Drizzle", icon: SiDrizzle },
      { name: "Sequelize", icon: SiSequelize },
      { name: "RabbitMQ", icon: SiRabbitmq },
      { name: "BullMQ", icon: SiRabbitmq },
      { name: "Firebase", icon: SiFirebase },
      { name: "Socket.IO", icon: SiSocketdotio },
    ],
  },
  {
    title: "Cloud / DevOps",
    skills: [
      { name: "AWS", icon: FaAws },
      { name: "S3", icon: SiAmazon },
      { name: "Route 53", icon: SiAmazon },
      { name: "CloudFront", icon: SiAmazon },
      { name: "R2", icon: SiCloudflare },
      { name: "Cloudflare", icon: SiCloudflare },
      { name: "CI/CD", icon: SiGithubactions },
      { name: "GitHub Actions", icon: SiGithubactions },
      { name: "Docker", icon: SiDocker },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
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
      { name: "Claude Code", icon: SiClaude },
      { name: "Open Code", icon: SiClaude },
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "Stripe", icon: SiStripe },
      { name: "Figma", icon: SiFigma },
      { name: "Trello", icon: SiTrello },
      { name: "ClickUp", icon: SiClickup },
      { name: "Slack", icon: SiSlack },
      { name: "Jira", icon: SiJira },
      { name: "Confluence", icon: SiConfluence },
      { name: "Vercel", icon: SiVercel },
      { name: "Cpanel", icon: SiCpanel },
    ],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
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
