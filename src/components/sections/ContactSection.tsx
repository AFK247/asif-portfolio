"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { Loader2 } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    const form = e.currentTarget;

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        form,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );

      setStatus({
        type: "success",
        message: "Message sent successfully!",
      });
      form.reset();
    } catch (error) {
      console.log(error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="py-20 px-4 bg-background/60 backdrop-blur-sm"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-6"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-foreground"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-center text-muted-foreground max-w-2xl mx-auto"
          >
            I&apos;m currently open for new opportunities. Whether you have a
            question or just want to say hi, I&apos;ll try my best to get back
            to you!
          </motion.p>

          <motion.form
            variants={fadeInUp}
            onSubmit={handleSubmit}
            className="space-y-6 max-w-xl mx-auto mt-8"
          >
            <div>
              <label
                htmlFor="from_name"
                className="block text-sm font-medium text-foreground/90 mb-2"
              >
                My Email
              </label>
              <input
                type="text"
                name="from_name"
                id="from_name"
                required
                className="w-full px-4 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="John Doe"
                value={"asifferdous23@gmail.com"}
                disabled
              />
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-sm font-medium text-foreground/90 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  id="from_name"
                  required
                  className="w-full px-4 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="from_email"
                  className="block text-sm font-medium text-foreground/90 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="from_email"
                  id="from_email"
                  required
                  className="w-full px-4 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
                  placeholder="john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-foreground/90 mb-2"
              >
                Your Message
              </label>
              <textarea
                name="message"
                id="message"
                required
                rows={5}
                className="w-full px-4 py-2 bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
                placeholder="Lets collaborate..."
              />
            </div>

            {status.message && (
              <div
                className={`text-sm ${
                  status.type === "success"
                    ? "text-green-500"
                    : "text-destructive"
                }`}
              >
                {status.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
