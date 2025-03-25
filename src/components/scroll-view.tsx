"use client";

import { InView } from "./motion-primitives/in-view";

export function ScrollView({
  children,
  stagger,
  delay = 0,
}: {
  children: React.ReactNode;
  stagger?: boolean;
  delay?: number;
}) {
  return (
    <InView
      variants={{
        hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            delay: delay,
            staggerChildren: stagger ? 0.09 : 0,
          },
        },
      }}
      viewOptions={{ margin: "0px 0px -200px 0px" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </InView>
  );
}
