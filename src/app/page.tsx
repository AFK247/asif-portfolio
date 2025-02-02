"use client";
import { HeroSection } from "@/components/sections/HeroSection";
import { WorkExperience } from "@/components/sections/WorkExperience";
import { SkillsSection } from "@/components/sections/SkillSection";
import { Projects } from "@/components/sections/Projects";
import { ContactSection } from "@/components/sections/ContactSection";
import { Education } from "@/components/sections/Education";
import { Navbar } from "@/components/sections/Navbar";
import { Languages } from "@/components/sections/Languages";

export default function Home() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-purple-500/15 to-pink-500/15 animate-gradient-xy" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-15" />
        <div className="absolute inset-0 bg-background/75 backdrop-blur-[120px]" />
      </div>

      {/* Floating orbs with soothing distribution */}
      <div className="fixed inset-0 -z-5">
        {/* Top left */}
        <div className="absolute top-[10%] left-[10%] w-[500px] h-[500px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-2xl opacity-40" />

        {/* Top center */}
        <div className="absolute top-[15%] left-[40%] w-[600px] h-[600px] bg-purple-400/20 rounded-full mix-blend-multiply filter blur-2xl opacity-40" />

        {/* Top right */}
        <div className="absolute top-[8%] right-[10%] w-[400px] h-[400px] bg-pink-400/20 rounded-full mix-blend-multiply filter blur-2xl opacity-40" />

        {/* Center left */}
        <div className="absolute top-[45%] left-[15%] w-[450px] h-[450px] bg-indigo-400/20 rounded-full mix-blend-multiply filter blur-2xl opacity-40" />

        {/* Center right */}
        <div className="absolute top-[50%] right-[15%] w-[550px] h-[550px] bg-violet-400/20 rounded-full mix-blend-multiply filter blur-2xl opacity-40" />

        {/* Bottom center */}
        <div className="absolute bottom-[15%] left-[35%] w-[500px] h-[500px] bg-blue-400/20 rounded-full mix-blend-multiply filter blur-2xl opacity-40" />
      </div>

      {/* Content */}
      <div className="relative">
        <Navbar />
        <main className="flex flex-col min-h-screen">
          <HeroSection />
          <SkillsSection />
          <WorkExperience />
          <Projects />
          <Education />
          <Languages />
          <ContactSection />
        </main>

        <footer className="py-6 px-4 border-t bg-background/60 backdrop-blur-sm">
          <div className="container mx-auto text-center text-sm text-foreground/80">
            © {new Date().getFullYear()} Asif Ferdous. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
}
