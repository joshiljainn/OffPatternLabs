import { Circle, Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const ourPrinciples = [
  {
    title: "Hands-On Support",
    description:
      "I’ll roll up my sleeves and do what needs to be done—research, outreach, market building, and coordination.",
  },
  {
    title: "Ridiculously Affordable",
    description:
      "Because I’m learning, I’ll charge a fraction of what agencies or consultants would, ensuring you get immense value.",
  },

  {
    title: "Only 5 Exporters",
    description:
      "I’m limiting my work to a maximum of five clients to ensure I can give each of you my full focus and attention.",
  },
  {
    title: "Mutual Growth",
    description:
      "You get a dedicated partner who helps with the heavy lifting, and I get to learn the ropes of your industry directly with you.",
  },
];

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              Who Am I?
            </h2>
          </ScrollView>
          <ScrollView>
            <p>
            For years, I&apos;ve been a 0 to 1 builder and a generalist, helping startups and businesses with their go-to-market strategies and outreach efforts. My journey has been driven by an insatiable curiosity for growth, marketing, and the challenge of building something from nothing. I&apos;m now applying this hands-on, executional mindset to a new and exciting space: the export industry. I believe the best way to master a new domain is by doing the work—and that&apos;s what I&apos;m here to do with you.


            </p>
          </ScrollView>
        </div>
        <ScrollView>
          <Image
            className="rounded-(--radius) grayscale-35 object-cover aspect-[16/9] w-full"
            src="/guiding-philosophy.png"
            alt="team image"
            height="480"
            width="720"
            loading="lazy"
          />
        </ScrollView>
        <ScrollView>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {ourPrinciples.map((principle, index) => (
              <div className="space-y-3" key={index}>
                <div className="flex items-center gap-2">
                  <Circle className="size-4" />
                  <h3 className="text-sm font-medium">{principle.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
