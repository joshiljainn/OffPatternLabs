"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Upload, Image, Ruler, FileCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Art",
    description: "Drop a high-res PNG, PDF, or AI file. We accept transparent backgrounds and vector files.",
  },
  {
    icon: FileCheck,
    title: "Free Quality Check",
    description: "Our team reviews resolution, bleed, and color profiles. We send you a digital proof within 4 hours.",
  },
  {
    icon: Ruler,
    title: "Pick Size & Material",
    description: "Choose from vinyl, clear BOPP, or holographic stock. Any shape — die-cut, circle, square, or custom.",
  },
  {
    icon: Image,
    title: "UV Print & Ship",
    description: "We print with UV LED curing for instant drying and durability. Ships in 48 hours with tracking.",
  },
];

const checklist = [
  "Clear background looks good",
  "Image quality is sharp at print size",
  "Lines are thick enough for clean cutting",
  "Colors match your brand guidelines",
];

export default function StickerShowcase() {
  const [uploadState, setUploadState] = useState<"idle" | "uploading" | "success">("idle");
  const [progress, setProgress] = useState(0);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setUploadState("uploading");
    setProgress(0);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setUploadState("uploading");
      setProgress(0);
    }
  };

  React.useEffect(() => {
    if (uploadState === "uploading") {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setTimeout(() => setUploadState("success"), 300);
            return 100;
          }
          return prev + 5;
        });
      }, 50);
      return () => clearInterval(interval);
    }
  }, [uploadState]);

  return (
    <section id="showcase" className="section-padding border-t border-[#E5E5E0]">
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E03E3E] mb-4">
            How It Works
          </span>
          <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl mb-6">
            Upload your art. We handle the rest.
          </h2>
          <p className="text-lg text-[#6B6B6B]">
            No design skills needed. Send us your logo or label art and we will optimize,
            proof, and print it — perfectly.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="minimal-card h-full">
                <div className="w-10 h-10 bg-[#E03E3E] rounded-full flex items-center justify-center mb-4">
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <div className="w-12 h-12 bg-[#F5F5F0] rounded-lg flex items-center justify-center mb-4">
                  <step.icon className="w-6 h-6 text-[#1A1A1A]" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-[#6B6B6B] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-5 h-5 text-[#E5E5E0]" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Upload Zone */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            className={`relative border-2 border-dashed rounded-2xl p-10 md:p-16 text-center transition-all duration-300 overflow-hidden ${
              uploadState === "idle"
                ? "border-[#E5E5E0] bg-white hover:border-[#1A1A1A]"
                : ""
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
                  <div className="w-16 h-16 rounded-2xl bg-[#F5F5F0] flex items-center justify-center">
                    <Upload className="w-7 h-7 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <p className="text-[#1A1A1A] font-medium text-lg mb-1">
                      Drop your clear PNG or PDF file here
                    </p>
                    <p className="text-[#9B9B9B] text-sm">
                      Must be high quality (300 DPI or vector)
                    </p>
                  </div>
                  <label className="cursor-pointer">
                    <input
                      type="file"
                      accept=".png,.pdf,.ai,.eps"
                      onChange={handleFileSelect}
                      className="hidden"
                    />
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-[#1A1A1A] bg-white border border-[#E5E5E0] hover:border-[#1A1A1A] px-5 py-2.5 rounded-lg transition-all">
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
                      <span className="text-[#1A1A1A]">Checking your file...</span>
                      <span className="text-[#9B9B9B]">{progress}%</span>
                    </div>
                    <div className="w-full h-2 bg-[#F5F5F0] rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-[#E03E3E] rounded-full"
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
                    className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center"
                  >
                    <Check className="w-7 h-7 text-green-600" />
                  </motion.div>

                  <div className="w-full space-y-3 text-left">
                    {checklist.map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 + i * 0.15 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-green-500/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-green-600" />
                        </div>
                        <span className="text-[#1A1A1A] text-sm">{item}</span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                    className="text-[#9B9B9B] text-sm mt-2"
                  >
                    Your free proof is on its way!
                  </motion.p>

                  <motion.button
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    onClick={() => setUploadState("idle")}
                    className="text-xs text-[#9B9B9B] hover:text-[#1A1A1A] underline underline-offset-2 transition-colors"
                  >
                    Upload another file
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
