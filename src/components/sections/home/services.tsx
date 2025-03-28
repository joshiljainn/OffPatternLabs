import { ServicesCard } from "@/components/services-card";

const services = [
  {
    title: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    image: "/images/04.png",
  },
  {
    title: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    image: "/images/06.png",
  },
  {
    title: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.",
    image: "/images/30.png",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 md:py-32">
      <div className="container max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <ServicesCard key={service.title} />
          ))}
        </div>
      </div>
    </section>
  );
}
