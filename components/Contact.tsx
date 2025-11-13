"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Title */}
          <h2 className="mb-8">Let's Start Something That Sells</h2>

          {/* Copy */}
          <p className="text-lg md:text-xl text-foreground/80 mb-10">
            Tell us what you make.
            <br />
            We'll tell you how to make it sell online — clearly, quickly, and properly.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="https://wa.me/918076958506?text=Hi,%20I%20would%20like%20to%20know%20more."
              target="_blank"
              rel="noopener noreferrer"
              className="button-primary text-center"
            >
              WhatsApp
            </Link>
            <Link
              href="mailto:joshil@offpatternlabs.com"
              className="button-secondary text-center"
            >
              Email
            </Link>
          </div>

          {/* Subline */}
          <p className="text-sm text-foreground/60">
            We onboard only a few brands each month. Keeps our work clean and focused.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
