"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const scenes = [
  { id: 1, title: "Before OffPattern", text: ["You make great products.", "But online? It's quiet. No clear system.", "No sales you can count on."], bgColor: "bg-gray-100", emoji: "📦" },
  { id: 2, title: "We Step In", text: ["We set up your full system —", "website, ads, and tracking.", "No fees. No risk. Just clean execution."], bgColor: "bg-gray-50", emoji: "🚀" },
  { id: 3, title: "The Build", text: ["Launch goes live.", "Ads start running.", "Orders start pinging in."], bgColor: "bg-background", emoji: "💻" },
  { id: 4, title: "The Results", text: ["Now you're selling daily.", "You pay us only when you profit.", "You finally have a system that works."], bgColor: "bg-orange-50", emoji: "📈" },
  { id: 5, title: "The Future", text: ["Scale, repeat, grow.", "That's what OffPattern builds.", "Let's make your brand next."], bgColor: "bg-orange-100", emoji: "🌟" },
];

export default function HowItWorks() {
  const wrapperRef = useRef<HTMLDivElement | null>(null); // the tall scroll area
  const sectionTopSentinel = useRef<HTMLDivElement | null>(null); // small sentinel at top for IO
  const [isActive, setIsActive] = useState(false); // show fixed layer only when active

  // measure scroll progress for wrapperRef
  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start start", "end end"],
  });

  // map scroll progress to horizontal translate
  const x = useTransform(scrollYProgress, [0, 1], ["0%", `-${(scenes.length - 1) * 100}%`]);

  // show fixed layer only when the user is within the section bounds
  useEffect(() => {
    const sentinel = sectionTopSentinel.current;
    if (!sentinel) return;

    const io = new IntersectionObserver(
      (entries) => {
        const e = entries[0];
        // When the sentinel enters the viewport from the top by any amount, activate.
        // When it leaves (scrolled past section), deactivate.
        setIsActive(e.isIntersecting);
      },
      { root: null, threshold: 0 } // any intersection
    );

    io.observe(sentinel);
    return () => io.disconnect();
  }, []);

  // progress indicator segmentation helper (used inline below)

  return (
    <>
      {/* 1) Tall wrapper - provides scroll space equal to scenes.length * 100vh */}
      <div
        ref={wrapperRef}
        className="relative"
        style={{ height: `${scenes.length * 100}vh` }}
      >
        {/* top sentinel — tiny element at top of the wrapper used to detect when the section enters the viewport */}
        <div ref={sectionTopSentinel} style={{ position: "absolute", top: 0, height: 1, width: "100%" }} />

        {/* optionally show the title in-flow (if you want) */}
        {/* <div className="absolute top-6 left-0 right-0 text-center z-10 pointer-events-none">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">How It Feels to Go Online with OffPattern.</h2>
        </div> */}
      </div>

      {/* 2) Fixed viewport layer - rendered only when the wrapper is active */}
      {/* This prevents the fixed layer from hiding the rest of the page at initial load */}
      <div
        aria-hidden={!isActive}
        className={`fixed top-0 left-0 w-screen h-screen overflow-hidden bg-background z-[60] pointer-events-auto ${isActive ? "opacity-100" : "opacity-0 pointer-events-none"}`}
        style={{ transition: "opacity 200ms ease" }}
      >
        {/* Optional in-fixed title */}
        <div className="absolute top-6 md:top-12 left-0 right-0 z-30 text-center px-4 pointer-events-none">
          <h2 className="text-2xl md:text-4xl font-bold text-foreground">
            How It Feels to Go Online with OffPattern.
          </h2>
        </div>

        {/* horizontal track */}
        <motion.div
          style={{ x, width: `${scenes.length * 100}vw` }}
          className="flex h-full will-change-transform"
        >
          {scenes.map((scene) => (
            <div key={scene.id} className={`flex-shrink-0 min-w-[100vw] h-screen flex items-center justify-center ${scene.bgColor}`}>
              <div className="max-w-4xl mx-auto px-6 text-center">
                <p className="text-sm uppercase tracking-widest text-foreground/40 mb-6">{scene.id} / {scenes.length}</p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-8 text-foreground">{scene.title}</h3>
                <div className="space-y-4 md:space-y-6 mb-12">
                  {scene.text.map((line, i) => (
                    <p key={i} className="text-lg md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground/80">{line}</p>
                  ))}
                </div>
                <div className="text-6xl md:text-7xl">{scene.emoji}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* progress indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 pointer-events-none">
          <div className="flex gap-2 mb-3">
            {scenes.map((_, i) => {
              const start = i / scenes.length;
              const end = (i + 1) / scenes.length;
              const seg = useTransform(scrollYProgress, [start, end], [0, 1]); // per-segment
              return (
                <div key={i} className="w-8 h-1 bg-foreground/20 rounded-full overflow-hidden">
                  <motion.div className="h-full bg-accent origin-left" style={{ scaleX: seg }} />
                </div>
              );
            })}
          </div>
          <p className="text-xs text-center text-foreground/50">Scroll to continue</p>
        </div>
      </div>
    </>
  );
}
