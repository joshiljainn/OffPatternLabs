"use client";
import { ScrollView } from "@/components/scroll-view";
import { motion } from "motion/react";

export default function StatsSection() {
  return (
    <section className="py-12 md:py-20" id="stats">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
            My Commitment to Your Success
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
            My work isn&apos;t measured by a large firm&apos;s history. It&apos;s measured by my personal promises to you. This is my direct commitment to your success.


            </p>
          </ScrollView>
        </div>
        <ScrollView stagger delay={0.04}>
        <div className="grid gap-12 divide-y *:text-justify md:grid-cols-3 md:gap-16 md:divide-x md:divide-y-0">        <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">Dedicated Partner</div>
              <p>You won&apos;t be handed off to a junior team. You&apos;ll work directly with me every step of the way, ensuring our partnership is personal and focused.</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">Maximum Clients</div>
              <p>I can only work with a handful of exporters at a time to ensure you get my unwavering focus and full attention.</p>
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                visible: {
                  opacity: 1,
                  scale: 1,
                  filter: "blur(0px)",
                },
              }}
              className="space-y-4"
            >
              <div className="text-5xl font-bold">My Guiding Principle</div>
              <p>My career is built on the love of startups and the passion for creating something meaningful, bigger than myself. I&apos;ll bring that same builder mindset to your export channel.</p>
            </motion.div>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}