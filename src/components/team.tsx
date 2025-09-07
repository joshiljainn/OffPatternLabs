"use client";
import Link from "next/link";
import { motion } from "motion/react";
import { ScrollView } from "./scroll-view";

const members = [
  {
    name: "Joshil Jain",
    role: "Founder",
    avatar: "/profile.jpg",
    link: "https://www.linkedin.com/in/joshiljain/",
  },
  {
    name: "Go-to-Market Strategy",
    role: "The 0 to 1 Builder",
    avatar: "/Go-to-Market Plan/1.png",
    link: "#",
  },
  {
    name: "Global Outreach",
    role: "Outbound Demand Generation",
    avatar: "/Go-to-Market Plan/2.png",
    link: "#",
  },
  {
    name: "Partnerships",
    role: "Strategic Alliances",
    avatar: "/Go-to-Market Plan/3.png",
    link: "#",
  },
  {
    name: "Growth & Marketing",
    role: "Hands-on Execution",
    avatar: "/Go-to-Market Plan/4.png",
    link: "#",
  },
  {
    name: "Market Research",
    role: "Data-Driven Insights",
    avatar: "/Go-to-Market Plan/5.png",
    link: "#",
  },
];

export default function TeamSection() {
  return (
    <section
      className="bg-gray-50 py-16 md:py-32 dark:bg-transparent"
      id="team"
    >
      <div className="mx-auto max-w-5xl border-t px-6">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-gray-50 px-6 dark:bg-gray-950">
          Why Us?
        </span>
        <ScrollView>
          <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
            <div className="sm:w-2/5">
              <h2 className="text-3xl font-bold sm:text-4xl">My Core Competencies</h2>
            </div>

            <div className="mt-6 sm:mt-0">
              <p>
              My professional background has made me a generalist who loves figuring things out. I have a proven track record of hands-on execution across various industries, including e-commerce, SaaS, and marketing. I bring the ability to build, execute, and grow—a skill set I am now applying to the export industry to help you succeed.
              </p>
            </div>
          </div>
        </ScrollView>
        <div className="mt-12 md:mt-24">
          <ScrollView stagger delay={0.02}>
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
                      className="h-96 w-full rounded-md object-contain object-top grayscale-0 transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl"
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
                          LinkedIn
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  );
}
