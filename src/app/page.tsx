"use client";

import { Nav } from "@/components/nav";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { SkillsSection } from "@/components/sections/SkillSection";
import { Projects } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/ContactSection";
import { Education } from "@/components/sections/Education";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-pink-500/15 animate-gradient-xy" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15" />
        <div className="absolute inset-0 bg-background/75 backdrop-blur-[120px]" />
      </div>

      {/* Floating orbs */}
      <div className="fixed inset-0 -z-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/25 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob" />
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-purple-500/25 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/3 left-1/2 w-96 h-96 bg-pink-500/25 rounded-full mix-blend-multiply filter blur-xl opacity-50 animate-blob animation-delay-4000" />
      </div>

      {/* Content */}
      <div className="relative">
        <Nav />
        <main className="flex flex-col min-h-screen">
          <HeroSection />
          <SkillsSection />
          <WorkExperience />
          <Projects />
          <Education />
          <ContactSection />
        </main>

        <footer className="py-6 px-4 border-t bg-background/60 backdrop-blur-sm">
          <div className="container mx-auto text-center text-sm text-foreground/80">
            © {new Date().getFullYear()} Your Name. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
