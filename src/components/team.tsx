"use client";
import Link from "next/link";
import { AnimatedGroup } from "./motion-primitives/animated-group";
import { InView } from "./motion-primitives/in-view";
import { motion } from "motion/react";

const members = [
  {
    name: "Liam Brown",
    role: "Founder - CEO",
    avatar: "https://alt.tailus.io/images/team/member-one.webp",
    link: "#",
  },
  {
    name: "Elijah Jones",
    role: "Co-Founder - CTO",
    avatar: "https://alt.tailus.io/images/team/member-two.webp",
    link: "#",
  },
  {
    name: "Isabella Garcia",
    role: "Sales Manager",
    avatar: "https://alt.tailus.io/images/team/member-three.webp",
    link: "#",
  },
  {
    name: "Henry Lee",
    role: "UX Engeneer",
    avatar: "https://alt.tailus.io/images/team/member-four.webp",
    link: "#",
  },
  {
    name: "Ava Williams",
    role: "Interaction Designer",
    avatar: "https://alt.tailus.io/images/team/member-five.webp",
    link: "#",
  },
  {
    name: "Olivia Miller",
    role: "Visual Designer",
    avatar: "https://alt.tailus.io/images/team/member-six.webp",
    link: "#",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-gray-50 py-16 md:py-32 dark:bg-transparent">
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          Team
        </span>
        <InView
          variants={{
            hidden: { opacity: 0, y: 20, filter: "blur(12px)" },
            visible: { opacity: 1, y: 0, filter: "blur(0px)" },
          }}
          viewOptions={{ margin: "0px 0px -100px 0px" }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
            <div className="sm:w-2/5">
              <h2 className="text-3xl font-bold sm:text-4xl">Our dream team</h2>
            </div>

            <div className="mt-6 sm:mt-0">
              <p>
                During the working process, we perform regular fitting with the
                client because he is the only person who can feel whether a new
                suit fits or not.
              </p>
            </div>
          </div>
        </InView>
        <div className="mt-12 md:mt-24">
          <InView
            viewOptions={{ once: false, margin: "0px 0px -250px 0px" }}
            variants={{
              hidden: {
                opacity: 0,
              },
              visible: {
                opacity: 1,
                transition: {
                  delay: 0.2,
                  staggerChildren: 0.09,
                },
              },
            }}
          >
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member, index) => (
                <div key={index} className="group overflow-hidden">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                      },
                    }}
                  >
                    <img
                      className="h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
                      src={member.avatar}
                      alt="team member"
                      width="826"
                      height="1239"
                    />
                    <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                      <div className="flex justify-between">
                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                          {member.name}
                        </h3>
                        <span className="text-xs">_0{index + 1}</span>
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          {member.role}
                        </span>
                        <Link
                          href={member.link}
                          className="group-hover:text-primary-600 dark:group-hover:text-primary-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100"
                        >
                          {" "}
                          Linktree
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </InView>
        </div>
      </div>
    </section>
  );
}
