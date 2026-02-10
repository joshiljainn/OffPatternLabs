"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Websites & Stores",
    description: "Fast, mobile-friendly, clean. Shopify, WooCommerce, or custom — we build what fits your product best. Clear pages, easy checkout, full control.",
  },
  {
    title: "Ads & Creatives",
    description: "We run smart Meta and Google campaigns. Test fast, fix fast. Find what sells, then scale it up.",
  },
  {
    title: "Growth Systems",
    description: "WhatsApp + email setup, automation, analytics. We make sure your store runs smooth — even while you sleep.",
  },
];

export default function WhatWeDo() {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="mb-8">What We Build</h2>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl">
            We help businesses go online the right way.
            We set up your website, make your brand look sharp, and run ads that bring real buyers.
            Everything done properly — once, so it works.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-2xl">{service.title}</h3>
              <p className="text-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
