"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Trada team. Sales inquiries, support, partnerships, and more.",
  openGraph: {
    title: "Contact | Trada",
    description:
      "Get in touch with the Trada team. Sales inquiries, support, partnerships, and more.",
  },
};

const contactMethods = [
  {
    title: "Sales",
    email: "sales@trada.io",
    description: "Questions about pricing, plans, or features.",
  },
  {
    title: "Support",
    email: "support@trada.io",
    description: "Technical issues and account support.",
  },
  {
    title: "Partnerships",
    email: "partners@trada.io",
    description: "Affiliate and integration partnerships.",
  },
  {
    title: "General Inquiries",
    email: "hello@trada.io",
    description: "Any other questions.",
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const formRef = useRef(null);
  const formInView = useInView(formRef, { once: true, margin: "-100px" });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate form submission
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-grid py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--color-trada-red)]/8 rounded-full blur-[120px]" />
        </div>

        <div className="container-trada relative z-10 text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs uppercase tracking-widest text-[var(--color-trada-red)] mb-4"
          >
            Contact
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold tracking-tight mb-6"
          >
            Let's talk.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-[var(--color-dark-text-muted)] max-w-2xl mx-auto"
          >
            Have a question or feedback? We'd love to hear from you. Reach out
            to our team.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-[var(--spacing-section)] relative">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[var(--color-trada-red)]/5 rounded-full blur-[100px]" />

        <div className="container-trada relative">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="glass-card p-8"
              >
                <h3 className="text-lg font-bold mb-2">{method.title}</h3>
                <p className="text-sm text-[var(--color-dark-text-muted)] mb-4">
                  {method.description}
                </p>
                <a
                  href={`mailto:${method.email}`}
                  className="text-[var(--color-trada-red)] font-medium text-sm hover:underline"
                >
                  {method.email}
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-[var(--spacing-section)] relative overflow-hidden" ref={formRef}>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[var(--color-trada-red)]/8 rounded-full blur-[120px]" />

        <div className="container-trada relative z-10">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              className="text-3xl md:text-4xl font-bold mb-4 text-center"
            >
              Send us a message
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-[var(--color-dark-text-muted)] text-center mb-12"
            >
              Fill out the form below and we'll get back to you within 24 hours.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={formInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 md:p-12"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-[var(--radius-md)] text-white placeholder:text-[var(--color-dark-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-trada-red)]/50 focus:border-[var(--color-trada-red)]/50 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-[var(--radius-md)] text-white placeholder:text-[var(--color-dark-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-trada-red)]/50 focus:border-[var(--color-trada-red)]/50 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-[var(--radius-md)] text-white focus:outline-none focus:ring-2 focus:ring-[var(--color-trada-red)]/50 focus:border-[var(--color-trada-red)]/50 transition-all"
                  >
                    <option value="">Select a subject</option>
                    <option value="sales">Sales Inquiry</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-[var(--radius-md)] text-white placeholder:text-[var(--color-dark-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-trada-red)]/50 focus:border-[var(--color-trada-red)]/50 transition-all resize-none"
                    placeholder="Tell us what's on your mind..."
                  />
                </div>

                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 bg-green-500/10 border border-green-500/30 rounded-[var(--radius-md)] text-green-400 text-sm"
                  >
                    Thanks for reaching out! We'll be in touch soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-4 bg-red-500/10 border border-red-500/30 rounded-[var(--radius-md)] text-red-400 text-sm"
                  >
                    Something went wrong. Please try again or email us directly.
                  </motion.div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[var(--color-trada-red)] text-white font-medium rounded-[var(--radius-md)] hover:bg-[var(--color-trada-red)]/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-[var(--spacing-section)] relative">
        <div className="container-trada relative">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Our Office
          </motion.h2>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card p-8"
              >
                <h3 className="text-lg font-bold mb-6">Headquarters</h3>
                <div className="space-y-4 text-[var(--color-dark-text-muted)]">
                  <div>
                    <p className="text-sm font-medium text-white">Address</p>
                    <p className="text-sm">
                      123 Trading Street, New York, NY 10001
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Phone</p>
                    <p className="text-sm">
                      <a
                        href="tel:+12015551234"
                        className="text-[var(--color-trada-red)] hover:underline"
                      >
                        +1 (201) 555-1234
                      </a>
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white">Hours</p>
                    <p className="text-sm">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="glass-card p-8"
              >
                <h3 className="text-lg font-bold mb-6">Connect</h3>
                <div className="space-y-4">
                  <p className="text-sm text-[var(--color-dark-text-muted)]">
                    Follow us on social media for product updates, market
                    insights, and engineering deep-dives.
                  </p>
                  <div className="flex gap-4">
                    <a
                      href="https://twitter.com/tabortrading"
                      className="text-[var(--color-trada-red)] hover:underline text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Twitter
                    </a>
                    <a
                      href="https://linkedin.com/company/trada"
                      className="text-[var(--color-trada-red)] hover:underline text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                    <a
                      href="#"
                      className="text-[var(--color-trada-red)] hover:underline text-sm font-medium"
                    >
                      Discord
                    </a>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
