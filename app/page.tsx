"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Zap,
  Layers,
  Droplets,
  Upload,
  Check,
  ArrowRight,
  Mail,
  Shield,
  Clock,
} from "lucide-react";

/* ───────────────────────────────────────────────────────────
   Fade-in wrapper
   ─────────────────────────────────────────────────────────── */
function FadeIn({
  children,
  delay = 0,
  direction = "up",
}: {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────────
   Navbar
   ─────────────────────────────────────────────────────────── */
function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#09090b]/80 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-custom flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
            <Layers className="w-4 h-4 text-white" />
          </div>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            VarnishRoll
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#why" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Why Us
          </a>
          <a href="#upload" className="text-sm text-zinc-400 hover:text-white transition-colors">
            Upload Art
          </a>
        </div>
        <a
          href="#upload"
          className="hidden md:inline-flex items-center gap-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-4 py-2 rounded-lg transition-all"
        >
          Get Started
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </motion.nav>
  );
}

/* ───────────────────────────────────────────────────────────
   Animated Sticker Sheet (Hero visual)
   ─────────────────────────────────────────────────────────── */
function StickerSheet() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePos({ x, y });
  }, []);

  const stickers = [
    { color: "from-rose-500 to-orange-500", shape: "rounded-full", size: "w-20 h-20 md:w-24 md:h-24", text: "VR" },
    { color: "from-blue-500 to-cyan-500", shape: "rounded-2xl", size: "w-24 h-16 md:w-28 md:h-20", text: "COOL" },
    { color: "from-emerald-500 to-green-600", shape: "rounded-full", size: "w-16 h-16 md:w-20 md:h-20", text: "3D" },
    { color: "from-violet-500 to-purple-600", shape: "rounded-xl", size: "w-20 h-20 md:w-24 md:h-24", text: "PRO" },
    { color: "from-amber-400 to-yellow-500", shape: "rounded-full", size: "w-14 h-14 md:w-16 md:h-16", text: "★" },
    { color: "from-pink-500 to-rose-600", shape: "rounded-2xl", size: "w-20 h-14 md:w-24 md:h-16", text: "LOVE" },
    { color: "from-sky-400 to-blue-600", shape: "rounded-full", size: "w-18 h-18 md:w-22 md:h-22", text: "WOW" },
    { color: "from-lime-400 to-green-500", shape: "rounded-xl", size: "w-16 h-16 md:w-20 md:h-20", text: "GO" },
    { color: "from-fuchsia-500 to-pink-600", shape: "rounded-full", size: "w-20 h-20 md:w-24 md:h-24", text: "FUN" },
  ];

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      initial={{ opacity: 0, scale: 0.9, rotateX: 10 }}
      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
      transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative w-full max-w-md mx-auto perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Sheet background */}
      <div className="relative bg-zinc-900/50 border border-zinc-800 rounded-3xl p-6 md:p-8 backdrop-blur-sm overflow-hidden">
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        {/* Sticker grid */}
        <div className="relative grid grid-cols-3 gap-4 md:gap-5 place-items-center">
          {stickers.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.08, duration: 0.5 }}
              whileHover={{ scale: 1.1, rotate: Math.random() * 6 - 3 }}
              className={`${s.size} ${s.shape} bg-gradient-to-br ${s.color} flex items-center justify-center text-white font-bold text-sm md:text-base shadow-lg cursor-pointer`}
              style={{
                boxShadow: "0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)",
              }}
            >
              {s.text}
            </motion.div>
          ))}
        </div>

        {/* Glossy sheen overlay — follows mouse */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-150 ease-out"
          style={{
            background: `radial-gradient(circle 180px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.18) 0%, transparent 70%)`,
          }}
        />

        {/* Secondary sharper highlight */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-100 ease-out"
          style={{
            background: `radial-gradient(circle 80px at ${mousePos.x}% ${mousePos.y}%, rgba(255,255,255,0.35) 0%, transparent 60%)`,
          }}
        />
      </div>

      {/* Decorative glow behind */}
      <div className="absolute -inset-4 bg-gradient-to-r from-green-500/10 via-emerald-500/5 to-blue-500/10 rounded-[2rem] blur-2xl -z-10" />
    </motion.div>
  );
}

/* ───────────────────────────────────────────────────────────
   Hero Section
   ─────────────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background ambient blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container-custom grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="flex flex-col gap-8">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-zinc-800 bg-zinc-900/50 w-fit">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs text-zinc-400 font-medium">
                Free 3D proof with every order
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-semibold text-white leading-[1.05] tracking-tight">
              Get Thick, Shiny Stickers for Your Brand.{" "}
              <span className="text-zinc-500">Fast 4-Day Shipping.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-lg md:text-xl text-zinc-400 max-w-lg leading-relaxed">
              We print beautiful 3D logo stickers for your cups, boxes, and jars.
              No long waits. Just upload your art and we do the rest.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a
                href="#upload"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center gap-2 btn-primary text-base px-8 py-4"
              >
                <Upload className="w-5 h-5" />
                Upload Your Art
                <span className="text-green-100/80 text-sm">(Get Free 3D Proof)</span>
              </motion.a>
            </div>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex items-center gap-6 text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Ships in 4 days</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4" />
                <span>Free proof check</span>
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="relative">
          <StickerSheet />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   Why Choose Us Section
   ─────────────────────────────────────────────────────────── */
function WhyChooseUs() {
  const cards = [
    {
      icon: Zap,
      title: "Super Fast Printing",
      description:
        "We print everything within 24 hours so you never run out of stock. Your stickers ship the next day.",
      color: "text-amber-400",
      bg: "bg-amber-400/10",
    },
    {
      icon: Layers,
      title: "Amazing 3D Feel",
      description:
        "Our stickers have a thick, raised texture you can actually feel with your fingers. It makes your brand pop.",
      color: "text-emerald-400",
      bg: "bg-emerald-400/10",
    },
    {
      icon: Droplets,
      title: "Waterproof & Tough",
      description:
        "Perfect for cups, bottles, and glasses. They stay stuck even in the dishwasher and never peel off.",
      color: "text-sky-400",
      bg: "bg-sky-400/10",
    },
  ];

  return (
    <section id="why" className="section-padding relative">
      <div className="container-custom">
        <FadeIn>
          <div className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white mb-4">
              Why Teams Love Us
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
              We focus on one thing: making your stickers look and feel amazing.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <FadeIn key={card.title} delay={0.1 + i * 0.15}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="minimal-card group h-full"
              >
                <div
                  className={`w-12 h-12 rounded-xl ${card.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <card.icon className={`w-6 h-6 ${card.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-zinc-400 text-base leading-relaxed">
                  {card.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   File Drop Zone Section
   ─────────────────────────────────────────────────────────── */
function FileDropZone() {
  const [isDragging, setIsDragging] = useState(false);
  const [uploadState, setUploadState] = useState<
    "idle" | "uploading" | "success"
  >("idle");
  const [progress, setProgress] = useState(0);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    setUploadState("uploading");
    setProgress(0);
  }, []);

  const handleFileSelect = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setUploadState("uploading");
        setProgress(0);
      }
    },
    []
  );

  // Simulate upload progress
  useEffect(() => {
    if (uploadState === "uploading") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setUploadState("success"), 300);
            return 100;
          }
          return prev + 4;
        });
      }, 60);
      return () => clearInterval(interval);
    }
  }, [uploadState]);

  const checklist = [
    "Clear background looks good",
    "Image quality looks sharp",
    "Lines are thick enough to stick well",
  ];

  return (
    <section id="upload" className="section-padding relative">
      <div className="container-custom max-w-4xl">
        <FadeIn>
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold text-white mb-4">
              Upload Your Art in Seconds
            </h2>
            <p className="text-zinc-400 text-lg max-w-xl mx-auto">
              Drag and drop your file. We will check it and send you a free 3D proof.
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-2xl p-8 md:p-16 text-center transition-all duration-300 overflow-hidden ${
              isDragging
                ? "border-green-400/60 bg-green-400/5"
                : "border-zinc-700 bg-zinc-900/30 hover:border-zinc-500 hover:bg-zinc-900/50"
            }`}
          >
            <AnimatePresence mode="wait">
              {uploadState === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center gap-5"
                >
                  <div className="w-16 h-16 rounded-2xl bg-zinc-800 flex items-center justify-center">
                    <Upload className="w-7 h-7 text-zinc-300" />
                  </div>
                  <div>
                    <p className="text-white font-medium text-lg mb-1">
                      Drop your clear PNG or PDF file here
                    </p>
                    <p className="text-zinc-500 text-sm">
                      (Must be high quality)
                    </p>
                  </div>
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept=".png,.pdf"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-white bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-lg transition-all">
                      Browse Files
                    </span>
                  </label>
                </motion.div>
              )}

              {uploadState === "uploading" && (
                <motion.div
                  key="uploading"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto"
                >
                  <div className="w-full">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-zinc-300">Checking your file...</span>
                      <span className="text-zinc-500">{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.1 }}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {uploadState === "success" && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-6 w-full max-w-sm mx-auto"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="w-14 h-14 rounded-full bg-green-500/20 flex items-center justify-center"
                  >
                    <Check className="w-7 h-7 text-green-400" />
                  </motion.div>

                  <div className="w-full space-y-3">
                    {checklist.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.15 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-zinc-300 text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-zinc-500 text-sm mt-2"
                  >
                    Your free 3D proof is on its way!
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    onClick={() => setUploadState("idle")}
                    className="text-xs text-zinc-500 hover:text-zinc-300 underline underline-offset-2 transition-colors"
                  >
                    Upload another file
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ───────────────────────────────────────────────────────────
   Footer
   ─────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-zinc-800/60 py-10">
      <div className="container-custom flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center">
            <Layers className="w-3 h-3 text-white" />
          </div>
          <span className="font-display text-sm font-medium text-white">
            VarnishRoll
          </span>
        </div>

        <div className="flex items-center gap-6 text-sm text-zinc-500">
          <a href="mailto:hello@varnishroll.com" className="flex items-center gap-1.5 hover:text-zinc-300 transition-colors">
            <Mail className="w-3.5 h-3.5" />
            hello@varnishroll.com
          </a>
        </div>

        <p className="text-xs text-zinc-600">
          © {new Date().getFullYear()} VarnishRoll. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

/* ───────────────────────────────────────────────────────────
   Main Page
   ─────────────────────────────────────────────────────────── */
export default function VarnishRollPage() {
  return (
    <main className="relative w-full min-h-screen bg-[#09090b] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <FileDropZone />
      <Footer />
    </main>
  );
}
