import { Circle, Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const ourPrinciples = [
  {
    title: "Creativity with Purpose",
    description:
      "Our designs aren’t just pretty; they’re built to solve problems and make an impact.",
  },
  {
    title: "Collaboration is Key",
    description:
      "We work with you, not just for you. Great ideas come from teamwork.",
  },

  {
    title: "Honest & Transparent",
    description:
      "No confusing jargon or hidden fees. Just clear communication and real results.",
  },
  {
    title: "Details Matter",
    description:
      "The little things make a big difference. We sweat the small stuff, so you don’t have to.",
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
              I’m Joshil – a builder, student, and explorer. I’ve worked on growth and execution across different domains, and now I’m diving into the export world. Instead of selling a polished service, I want to work hands-on with a small group of exporters, learn the ropes, and support you with whatever needs to be done to grow your export channel.
            </p>
          </ScrollView>
        </div>
        <ScrollView>
          <Image
            className="rounded-(--radius) grayscale-75 object-cover aspect-[16/9] w-full"
            src="/images/office.jpeg"
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
