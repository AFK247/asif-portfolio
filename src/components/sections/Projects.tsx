"use client";
import { motion } from "framer-motion";

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold mb-8 text-foreground">
          Featured Projects
        </h2>
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border rounded-lg p-8 hover:bg-secondary/50 transition"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold mt-1">Incolink</h3>

              <p className="text-foreground">
                Built this anonymous social platform totally by myself from
                scratch for professionals which tried to solve salary
                exploitation and unfairness in job sector in Bangladesh
              </p>

              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>
                  Developed frontend with Next.js and backend with Node.js and
                  Express, adhering to best practices
                </li>
                <li>
                  Ensured security with HTTP-only cookies and in-memory Redux
                  login persistence
                </li>
                <li>
                  Optimized data fetching, mutation, and state management using
                  RTK Query with lazy loading
                </li>
                <li>Used Socket.IO for real-time push notifications</li>
                <li>
                  Implemented proper error handling on both client and server
                  sides with Zod
                </li>
                <li>
                  Customized React Hook Form for reusing different components
                </li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Next.js
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Node.js
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Express
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Redux Toolkit
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  RTK Query
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Socket.IO
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Zod
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
