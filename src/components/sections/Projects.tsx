"use client";
import { motion } from "framer-motion";
import { Link } from "lucide-react";

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
            className="border rounded-lg p-8 hover:bg-secondary/50 transition backdrop-brightness-75"
          >
            <div className="space-y-4">
              <div className="flex justify-between">
                <h3 className="text-2xl font-bold mt-1 text-blue-500 flex items-center gap-1">
                  <a
                    href="http://incolink.net"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Incolink
                  </a>
                  <Link size={20} />
                </h3>
                <span className="text-sm text-muted-foreground">
                  Oct 2024 - Jan 2025
                </span>
              </div>

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
                <li>
                  Integrated real-time push notifications using Socket.io for
                  instant updates.
                </li>
                <li>
                  Ensured robust error handling with Zod on both client and
                  server.
                </li>
                <li>
                  Customized React Hook Form for reusability and modular UI
                  components.
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
                  RTK Query
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Socket.IO
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Zod
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  MongoDB
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Mongoose
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="border rounded-lg p-8 hover:bg-secondary/50 transition backdrop-brightness-75"
          >
            <div className="space-y-4">
              <div className="flex justify-between">
                <h3 className="text-2xl font-bold mt-1 text-blue-500 flex items-center gap-1">
                  <a
                    href="https://netfeebd.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Netfee
                  </a>
                  <Link size={20} />
                </h3>
                <span className="text-sm text-muted-foreground">
                  Feb 2023 - Aug 2023
                </span>
              </div>

              <p className="text-foreground">
                NetFee is an ISP billing software. You can use the software
                completely in Bengali and English. You also manage your ISP
                business more easily and effectively. It provides comprehensive
                management and billing solutions. Including complete business
                management options. NetFee can give you the ability to manage
                your clients and incoming request without any hassle.
              </p>

              <ul className="list-disc list-inside space-y-2 text-foreground">
                <li>
                  Used React table for handling complex data structures and
                  visualize them
                </li>
                <li>
                  The whole app has been built with React and Redux Toolkit with
                  proper state management
                </li>
                <li>Created complex animations with CSS</li>
              </ul>

              <div className="flex flex-wrap gap-2 pt-4">
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  React
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  React Table
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Redux Toolkit
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  Node
                </span>
                <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                  MongoDB
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
