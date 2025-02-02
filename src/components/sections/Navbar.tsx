"use client";

import { motion } from "framer-motion";
import { GithubIcon, LinkedinIcon, Mail } from "lucide-react";
import Link from "next/link";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-sm"
    >
      <nav className="container flex h-16 items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>

        <div className="flex items-center gap-8">
          <div className="hidden sm:flex items-center gap-6">
            <Link href="#about" className="hover:text-primary/80 transition">
              About
            </Link>
            <Link href="#skills" className="hover:text-primary/80 transition">
              Skills
            </Link>
            <Link
              href="#experience"
              className="hover:text-primary/80 transition"
            >
              Experience
            </Link>
            <Link href="#projects" className="hover:text-primary/80 transition">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-primary/80 transition">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com/AFK247"
              target="_blank"
              className="hover:text-primary/80 transition"
            >
              <GithubIcon size={20} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/asifferdous23/"
              target="_blank"
              className="hover:text-primary/80 transition"
            >
              <LinkedinIcon size={20} />
            </Link>
            <Link
              href="mailto:asifferdous23@email.com"
              className="hover:text-primary/80 transition"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  );
}
