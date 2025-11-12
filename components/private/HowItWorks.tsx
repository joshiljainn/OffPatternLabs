"use client";

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

const scenes = [
  { id: 1, title: "Before OffPattern", text: ["You make great products.", "But online? It's quiet.", "No sales you can count on."], bg: "#f3f4f6", emoji: "📦" },
  { id: 2, title: "We Step In", text: ["We set up your system —", "site, ads, tracking.", "No fees. No risk."], bg: "#fafafa", emoji: "🚀" },
  { id: 3, title: "The Build", text: ["Launch goes live.", "Ads start running.", "Orders start pinging in."], bg: "#ffffff", emoji: "💻" },
  { id: 4, title: "The Results", text: ["You're selling daily.", "You pay only when you profit.", "Finally a system that works."], bg: "#fff7ed", emoji: "📈" },
  { id: 5, title: "The Future", text: ["Scale. Repeat. Grow.", "That's what OffPattern builds.", "Let's make your brand next."], bg: "#ffedd5", emoji: "🌟" },
];

export default function HowItWorks() {
  const triggerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start start", "end end"],
  });

  // horizontal movement smoothed
  const rawX = useTransform(scrollYProgress, [0, 1], ["0%", `-${(scenes.length - 1) * 100}%`]);
  const x = useSpring(rawX, { stiffness: 120, damping: 20 });

  // simple fade in/out for the fixed layer
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  return (
    <section ref={triggerRef} style={{ height: `${scenes.length * 100}vh` }} className="relative">
      {/* fixed viewport */}
      <motion.div
        style={{ opacity }}
        className="fixed top-0 left-0 w-screen h-screen overflow-hidden z-[50]"
      >
        <motion.div
          style={{ x, width: `${scenes.length * 100}vw` }}
          className="flex h-full will-change-transform"
        >
          {scenes.map((scene) => (
            <div
              key={scene.id}
              style={{ backgroundColor: scene.bg }}
              className="flex-shrink-0 w-screen h-screen flex items-center justify-center"
            >
              <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="text-sm uppercase tracking-widest text-neutral-500 mb-6">
                  {scene.id} / {scenes.length}
                </p>
                <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-gray-900">
                  {scene.title}
                </h3>
                <div className="space-y-4 md:space-y-6 mb-12 text-gray-700">
                  {scene.text.map((t, i) => (
                    <p key={i} className="text-lg md:text-2xl leading-relaxed">
                      {t}
                    </p>
                  ))}
                </div>
                <div className="text-6xl md:text-7xl">{scene.emoji}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* progress bar */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30">
          <div className="flex gap-2 mb-3">
            {scenes.map((_, i) => {
              const start = i / scenes.length;
              const end = (i + 1) / scenes.length;
              const seg = useTransform(scrollYProgress, [start, end], [0, 1]);
              return (
                <div key={i} className="w-8 h-1 bg-gray-300 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-black origin-left" style={{ scaleX: seg }} />
                </div>
              );
            })}
          </div>
          <p className="text-xs text-gray-500 text-center">Scroll to continue</p>
        </div>
      </motion.div>
    </section>
  );
}
