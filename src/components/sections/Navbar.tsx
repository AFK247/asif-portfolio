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
            <Link href="#projects" className="hover:text-primary/80 transition">
              Projects
            </Link>
            <Link href="#contact" className="hover:text-primary/80 transition">
              Contact
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="https://github.com"
              target="_blank"
              className="hover:text-primary/80 transition"
            >
              <GithubIcon size={20} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              className="hover:text-primary/80 transition"
            >
              <LinkedinIcon size={20} />
            </Link>
            <Link
              href="mailto:your@email.com"
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
