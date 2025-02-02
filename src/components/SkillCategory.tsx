"use client";
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

export function SkillCategory({ title, skills }: SkillCategoryProps) {
  return (
    <div className="p-6 rounded-lg border bg-background/50 backdrop-blur-sm">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <div className="flex flex-wrap gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center gap-2 border rounded-full px-3 py-1.5 cursor-pointer transform transition-all duration-200 hover:scale-105"
          >
            <div>
              <skill.icon
                className={`w-4 h-4 ${iconColors[skill.name] || ""}`}
              />
            </div>
            <span className="text-sm font-medium">{skill.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
