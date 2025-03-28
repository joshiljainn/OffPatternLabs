import Image from "next/image";
import { CustomCursorElement } from "./custom-cursor-element";
import { ScrollView } from "./scroll-view";

export default function PortfolioCard({
  card,
}: {
  card: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
}) {
  return (
    <div>
      <CustomCursorElement
        cursor={<div className="text-zinc-950 text-lg font-medium">View</div>}
      >
        <ScrollView>
          <div className="group hover:scale-105 transition-all duration-500 ">
            <a href={card.link} target="_blank" rel="noreferrer">
              <img
                className=" w-full grayscale-25 hover:grayscale-0 rounded-md object-cover object-top  transition-all duration-500  "
                src={card.image}
                alt={card.title}
              />
              <div className="mt-4">
                <h3 className="text-title text-2xl font-medium ">
                  {card.title}
                </h3>
                <p className="text-muted-foreground">{card.description}</p>
              </div>
            </a>
          </div>
        </ScrollView>
      </CustomCursorElement>
    </div>
  );
}
