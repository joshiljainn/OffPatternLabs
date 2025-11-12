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
  const scrollRef = useRef<HTMLDivElement>(null);

  // full scroll range = all scenes combined
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // horizontal translation for the track
  const x = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(scenes.length - 1) * 100}%`]
  );

  return (
    <section ref={scrollRef} className="relative" style={{ height: `${scenes.length * 100}vh` }}>
      {/* fixed viewport layer */}
      <div className="fixed top-0 left-0 h-screen w-screen overflow-hidden bg-background z-20">
        <motion.div
          style={{ x }}
          className="flex h-full w-[500vw] will-change-transform"
        >
          {scenes.map((scene) => (
            <div
              key={scene.id}
              className={`flex-shrink-0 w-screen h-screen flex items-center justify-center ${scene.bgColor}`}
            >
              <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="text-sm uppercase tracking-widest text-foreground/40 mb-6">
                  {scene.id} / {scenes.length}
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-foreground">
                  {scene.title}
                </h3>
                <div className="space-y-4 md:space-y-6 mb-12">
                  {scene.text.map((line, i) => (
                    <p
                      key={i}
                      className="text-lg md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground/80"
                    >
                      {line}
                    </p>
                  ))}
                </div>
                <div className="text-6xl md:text-7xl">{scene.emoji}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <div className="flex gap-2 mb-3">
            {scenes.map((_, i) => {
              const start = i / scenes.length;
              const end = (i + 1) / scenes.length;
              const progressSegment = useTransform(scrollYProgress, [start, end], [0, 1]);
              return (
                <div
                  key={i}
                  className="w-8 h-1 bg-foreground/20 rounded-full overflow-hidden"
                >
                  <motion.div
                    className="h-full bg-accent origin-left"
                    style={{ scaleX: progressSegment }}
                  />
                </div>
              );
            })}
          </div>
          <p className="text-xs text-center text-foreground/50">Scroll to continue</p>
        </div>
      </div>
    </section>
  );
}
