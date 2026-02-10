"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Mobile Gaming App",
    description: "Built and ran ad systems reaching 2L+ spend, 15x return, with performance creatives and event funnels.",
  },
  {
    title: "Home & Décor Brand",
    description: "Set up complete D2C system — website, creative direction, ads, and logistics workflows.",
  },
  {
    title: "Ayurveda & Blended Teas Brand",
    description: "Built entire online presence from scratch — website, content, paid campaigns, automation, and first sales.",
  },
  {
    title: "Essential Oils & Wellness Label",
    description: "Designed full launch funnel, ran initial campaigns, and helped brand position itself as a premium, calm lifestyle product.",
  },
];

export default function Work() {
  return (
    <section id="work" className="section-padding bg-foreground text-background">
      <div className="container-custom">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-8">What We've Done So Far</h2>
          <p className="text-lg md:text-xl text-background/80 max-w-3xl mb-12">
            We've helped brands across gaming, décor, and lifestyle build real online systems from scratch.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4 p-8 border border-background/10 rounded-2xl hover:border-background/20 transition-colors"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-background/70 leading-relaxed">
                {project.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center text-background/60 max-w-2xl mx-auto"
        >
          We work quietly, build fast, and make sure things perform.
          <br />
          No noise. Just progress.
        </motion.p>
      </div>
    </section>
  );
}
