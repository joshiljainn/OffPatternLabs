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
    bgColor: "bg-gray-100",
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
    bgColor: "bg-gray-50",
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
    bgColor: "bg-background",
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
    bgColor: "bg-orange-50",
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
    bgColor: "bg-orange-100",
    emoji: "🌟",
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null);

  // Track scroll progress of this section only
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Map scroll progress to horizontal translation
  const x = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    ["0%", "0%", `-${(scenes.length - 1) * 100}%`, `-${(scenes.length - 1) * 100}%`]
  );

  return (
    <div ref={sectionRef} className="relative h-[500vh]">
      {/* Sticky container that stays in viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden bg-background">
        {/* Fixed Title */}
        <div className="absolute top-8 md:top-12 left-0 right-0 z-30 text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            How It Feels to Go Online with OffPattern.
          </h2>
        </div>

        {/* Horizontal scenes container */}
        <motion.div
          style={{ x }}
          className="absolute inset-0 flex will-change-transform"
        >
          {scenes.map((scene) => (
            <div
              key={scene.id}
              className={`flex-shrink-0 w-full h-full flex items-center justify-center ${scene.bgColor}`}
            >
              <div className="max-w-4xl mx-auto px-6 text-center">
                {/* Scene number */}
                <p className="text-sm uppercase tracking-widest text-foreground/40 mb-6">
                  {scene.id} / {scenes.length}
                </p>

                {/* Scene title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-foreground">
                  {scene.title}
                </h3>

                {/* Scene text */}
                <div className="space-y-4 md:space-y-6 mb-12">
                  {scene.text.map((line, i) => (
                    <p key={i} className="text-lg md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground/80">
                      {line}
                    </p>
                  ))}
                </div>

                {/* Emoji */}
                <div className="text-6xl md:text-7xl">
                  {scene.emoji}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <div className="flex gap-2 mb-3">
            {scenes.map((_, i) => {
              const segmentStart = 0.2 + (i * 0.6) / scenes.length;
              const segmentEnd = 0.2 + ((i + 1) * 0.6) / scenes.length;

              const segmentProgress = useTransform(
                scrollYProgress,
                [segmentStart, segmentEnd],
                [0, 1]
              );

              return (
                <div
                  key={i}
                  className="w-8 h-1 bg-foreground/20 rounded-full overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-accent origin-left"
                    style={{ scaleX: segmentProgress }}
                  />
                </div>
              );
            })}
          </div>
          <p className="text-xs text-center text-foreground/50">
            Scroll to continue
          </p>
        </div>
      </div>
    </div>
  );
}
