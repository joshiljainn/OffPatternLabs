"use client";

import { motion } from "framer-motion";

const cases = [
  {
    icon: "🎮",
    title: "Fantasy Gaming App",
    metrics: "15x ROAS, 2L ad spend.",
    description: "From test campaigns to thousands of installs.",
    testimonial: "They built everything fast and made it work.",
  },
  {
    icon: "🏠",
    title: "Home Decor Brand",
    metrics: "Zero to consistent sales in 4 weeks.",
    description: "Site + ads + full D2C setup.",
    testimonial: "We got our first sale online within 10 days.",
  },
];

export default function ProofSection() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-6 text-4xl md:text-5xl">Brands That Trusted Us</h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Real brands. Real results. Real fast.
          </p>
        </motion.div>

        {/* Case Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {cases.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-10 border-2 border-foreground/10 rounded-3xl hover:border-accent/30 transition-all bg-background hover:shadow-xl"
            >
              {/* Icon */}
              <div className="text-5xl mb-6">{item.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>

              {/* Metrics */}
              <p className="text-lg font-semibold text-accent mb-4">
                {item.metrics}
              </p>

              {/* Description */}
              <p className="text-foreground/70 mb-6 leading-relaxed">
                {item.description}
              </p>

              {/* Testimonial */}
              <div className="pt-6 border-t border-foreground/10">
                <p className="text-foreground/80 italic leading-relaxed">
                  "{item.testimonial}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
