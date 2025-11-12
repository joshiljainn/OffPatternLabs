"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const scenes = [
  {
    id: 1,
    title: "Before OffPattern",
    text: [
      "You make great products.",
      "But online? It's quiet. No clear system.",
      "No sales you can count on.",
    ],
    bgColor: "from-gray-400/20 to-gray-300/10",
    emoji: "📦",
  },
  {
    id: 2,
    title: "We Step In",
    text: [
      "We set up your full system —",
      "website, ads, and tracking.",
      "No fees. No risk. Just clean execution.",
    ],
    bgColor: "from-gray-300/10 to-background",
    emoji: "🚀",
  },
  {
    id: 3,
    title: "The Build",
    text: [
      "Launch goes live.",
      "Ads start running.",
      "Orders start pinging in.",
    ],
    bgColor: "from-background to-accent/5",
    emoji: "💻",
  },
  {
    id: 4,
    title: "The Results",
    text: [
      "Now you're selling daily.",
      "You pay us only when you profit.",
      "You finally have a system that works.",
    ],
    bgColor: "from-accent/5 to-accent/10",
    emoji: "📈",
  },
  {
    id: 5,
    title: "The Future",
    text: [
      "Scale, repeat, grow.",
      "That's what OffPattern builds.",
      "Let's make your brand next.",
    ],
    bgColor: "from-accent/10 to-accent/15",
    emoji: "🌟",
  },
];

export default function HowItWorks() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(scenes.length - 1) * 100}%`]
  );

  return (
    <div ref={containerRef} className="relative h-[500vh]">
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Fixed Title */}
        <div className="absolute top-8 left-0 right-0 z-30 text-center pointer-events-none">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground px-4">
            How It Feels to Go Online with OffPattern.
          </h2>
        </div>

        {/* Horizontal scrolling container */}
        <motion.div
          style={{ x }}
          className="absolute inset-0 flex"
        >
          {scenes.map((scene, index) => (
            <div
              key={scene.id}
              className={`min-w-full h-full flex flex-col items-center justify-center bg-gradient-to-br ${scene.bgColor} px-6`}
            >
              <div className="max-w-4xl mx-auto text-center space-y-8">
                {/* Scene number */}
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-sm uppercase tracking-widest text-foreground/40"
                >
                  {scene.id} / {scenes.length}
                </motion.p>

                {/* Scene title */}
                <motion.h3
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="text-2xl md:text-3xl font-semibold text-foreground/90"
                >
                  {scene.title}
                </motion.h3>

                {/* Scene text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-6"
                >
                  {scene.text.map((line, i) => (
                    <p key={i} className="text-xl md:text-3xl font-light leading-relaxed text-foreground/80">
                      {line}
                    </p>
                  ))}
                </motion.div>

                {/* Emoji */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-7xl pt-8"
                >
                  {scene.emoji}
                </motion.div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
        >
          <div className="flex gap-2 mb-4">
            {scenes.map((_, i) => (
              <motion.div
                key={i}
                className="h-1 bg-foreground/20 rounded-full overflow-hidden"
                style={{ width: 32 }}
              >
                <motion.div
                  className="h-full bg-accent"
                  style={{
                    scaleX: useTransform(
                      scrollYProgress,
                      [i / scenes.length, (i + 1) / scenes.length],
                      [0, 1]
                    ),
                    transformOrigin: "left"
                  }}
                />
              </motion.div>
            ))}
          </div>
          <p className="text-xs text-center text-foreground/50">
            Scroll to continue
          </p>
        </motion.div>
      </div>
    </div>
  );
}
