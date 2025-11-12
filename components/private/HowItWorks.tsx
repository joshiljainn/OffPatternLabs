"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const scenes = [
  {
    id: 1,
    title: "Before OffPattern",
    text: [
      "You make great products.",
      "But online? It's quiet. No clear system.",
      "No sales you can count on.",
    ],
    bgColor: "bg-gray-400/20",
    textColor: "text-foreground/70",
  },
  {
    id: 2,
    title: "We Step In",
    text: [
      "We set up your full system —",
      "website, ads, and tracking.",
      "No fees. No risk. Just clean execution.",
    ],
    bgColor: "bg-gray-300/10",
    textColor: "text-foreground/80",
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
    textColor: "text-foreground",
  },
  {
    id: 4,
    title: "The Results",
    text: [
      "Now you're selling daily.",
      "You pay us only when you profit.",
      "You finally have a system that works.",
    ],
    bgColor: "bg-accent/5",
    textColor: "text-foreground",
  },
  {
    id: 5,
    title: "The Future",
    text: [
      "Scale, repeat, grow.",
      "That's what OffPattern builds.",
      "Let's make your brand next.",
    ],
    bgColor: "bg-accent/10",
    textColor: "text-foreground",
  },
];

export default function HowItWorks() {
  const [activeScene, setActiveScene] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("how-it-feels");
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)));
      const sceneIndex = Math.floor(scrollProgress * scenes.length);
      setActiveScene(Math.min(sceneIndex, scenes.length - 1));
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="how-it-feels" className="relative min-h-[500vh]">
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Title - Fixed at top */}
        <div className="absolute top-8 left-0 right-0 z-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-foreground"
          >
            How It Feels to Go Online with OffPattern.
          </motion.h2>
        </div>

        {/* Scenes Container - Horizontal Slide */}
        <div className="flex h-full transition-transform duration-700 ease-out"
             style={{ transform: `translateX(-${activeScene * 100}%)` }}>
          {scenes.map((scene, index) => (
            <div
              key={scene.id}
              className={`min-w-full h-full flex flex-col items-center justify-center ${scene.bgColor} transition-all duration-1000`}
            >
              <div className="container-custom max-w-4xl mx-auto text-center px-6">
                {/* Scene Title */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{
                    opacity: activeScene === index ? 1 : 0.3,
                    scale: activeScene === index ? 1 : 0.95
                  }}
                  transition={{ duration: 0.6 }}
                  className="mb-12"
                >
                  <p className="text-sm uppercase tracking-widest text-foreground/40 mb-6">
                    {scene.id} / {scenes.length}
                  </p>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-8 text-foreground/90">
                    {scene.title}
                  </h3>
                </motion.div>

                {/* Scene Text */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: activeScene === index ? 1 : 0.5,
                    y: activeScene === index ? 0 : 20
                  }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className={`space-y-6 ${scene.textColor}`}
                >
                  {scene.text.map((line, i) => (
                    <p key={i} className="text-xl md:text-3xl font-light leading-relaxed">
                      {line}
                    </p>
                  ))}
                </motion.div>

                {/* Visual Indicator - Symbolic */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeScene === index ? 1 : 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="mt-16"
                >
                  {scene.id === 1 && (
                    <div className="text-6xl opacity-30">📦</div>
                  )}
                  {scene.id === 2 && (
                    <div className="text-6xl">🚀</div>
                  )}
                  {scene.id === 3 && (
                    <div className="text-6xl">💻</div>
                  )}
                  {scene.id === 4 && (
                    <div className="text-6xl">📈</div>
                  )}
                  {scene.id === 5 && (
                    <div className="text-6xl">🌟</div>
                  )}
                </motion.div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Bar - Fixed at bottom */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="flex gap-2">
            {scenes.map((_, index) => (
              <div
                key={index}
                className={`h-1 rounded-full transition-all duration-500 ${
                  activeScene === index
                    ? 'w-12 bg-accent'
                    : activeScene > index
                    ? 'w-8 bg-foreground/40'
                    : 'w-4 bg-foreground/20'
                }`}
              />
            ))}
          </div>
          <p className="text-xs text-center mt-4 text-foreground/50">
            Scroll to continue
          </p>
        </div>
      </div>
    </section>
  );
}
