import { CustomCursorElement } from "@/components/custom-cursor-element";
import { InView } from "@/components/motion-primitives/in-view";
import { ScrollView, ScrollViewStaggerWrapper } from "@/components/scroll-view";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    title: "Product Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    image: "/images/abstract-3.png",
    tags: ["Visual Design", "Dashboard", "UI/UX"],
    link: "#",
  },
  {
    title: "Motion Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    image: "/images/abstract-4.png",
    tags: ["Animation", "After Effects", "Lottie Animation"],
    link: "#",
  },
  {
    title: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    image: "/images/abstract-5.png",
    tags: ["Branding", "Logo Design", "Illustration", "Typography"],
    link: "#",
  },
  {
    title: "Digital Marketing",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    image: "/images/abstract-1.png",
    tags: ["Marketing", "Social Media", "Content Creation", "SEO"],
    link: "#",
  },
];

export default function ServicesSection2() {
  return (
    <section className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Tailus UI in numbers
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              Gemini is evolving to be more than just the models. It supports an
              entire to the APIs and platforms helping developers and businesses
              innovate.
            </p>
          </ScrollView>
        </div>
        <div className="mt-12 md:mt-24">
          <div className="space-y-10">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group overflow-hidden border-b py-10"
              >
                <div className="flex gap-10 jsutify-between flex-col lg:flex-row">
                  <div className="self-end">
                    <div className="flex flex-col gap-8 ">
                      <div className="space-y-4">
                        <ScrollView>
                          <h3 className="text-title text-2xl font-medium">
                            {service.title}
                          </h3>
                        </ScrollView>

                        <ScrollView stagger delay={0.04}>
                          <div>
                            {service.tags.map((tag, index) => (
                              <div key={index} className="inline-block">
                                <ScrollViewStaggerWrapper>
                                  <Badge
                                    className="mr-2 mb-2"
                                    variant="secondary"
                                  >
                                    {tag}
                                  </Badge>
                                </ScrollViewStaggerWrapper>
                              </div>
                            ))}
                          </div>
                        </ScrollView>
                      </div>
                      <ScrollView delay={0.04}>
                        <p className="text-muted-foreground">
                          {service.description}
                        </p>
                      </ScrollView>
                    </div>
                  </div>
                  <div className="w-full lg:w-3/2">
                    <CustomCursorElement
                      cursor={
                        <div className="text-zinc-950 text-lg font-medium">
                          View
                        </div>
                      }
                    >
                      <InView
                        variants={{
                          hidden: {
                            opacity: 0,
                            y: 20,
                            filter: "blur(14px)",
                            scale: 0.5,
                            originX: 0,
                            originY: 0,
                          },
                          visible: {
                            opacity: 1,
                            scale: 1,
                            y: 0,
                            filter: "blur(0px)",
                            transition: {
                              delay: 0.01,
                              duration: 0.5,
                            },
                          },
                        }}
                        viewOptions={{ margin: "0px 0px -250px 0px" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <Link href={service.link}>
                          <Image
                            src={service.image}
                            alt="team image"
                            height="720"
                            width="1080"
                            loading="lazy"
                            className=" object-cover object-top  transition-all duration-500 w-full  aspect-[16/9]"
                          />
                        </Link>
                      </InView>
                    </CustomCursorElement>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
