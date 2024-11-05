import { Button } from "@/app/components/buttons/ButtonV2";
import {
  MaterialSymbolsArrowOutward,
  MaterialSymbolsMail,
} from "@/app/components/icons/material-symbols";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { MenuLinks } from "@/lib/menu-links";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/project-images";
import { motion } from "framer-motion";
import { IoChevronForwardSharp } from "react-icons/io5";
import { useEffect, useState } from "react";

const transition = {
  type: "spring",
  bounce: 0,
  duration: 0.75,
};

export default function MenuRight() {
  return (
    <motion.ul
      className="flex h-full w-72 flex-col gap-2 rounded-md md:gap-1"
      initial={{ x: "30%", opacity: 0, scaleX: 1.6, filter: "blur(3px)" }}
      animate={{ x: "0px", opacity: 1, scaleX: 1, filter: "blur(0px)" }}
      exit={{ x: "30%", opacity: 0, scaleX: 1.6, filter: "blur(3px)" }}
      transition={{ ...transition, delay: 0.1 }}
    >
      {MenuLinks.map((link, idx) => (
        <li key={idx} className="">
          {/* TODO: Use variant ghost when added */}
          <Button
            className={cn(
              "[&>svg:first-of-type]:text-foreground/85",
              "bg-[hsl(0,0%,0%,0.0)] [--bg-tap-end:hsla(0,0%,0%,0.0)]",
              "rac-hover:[--bg-tap-end:hsla(0,0%,100%,0.1)]",
            )}
          >
            {link.icon}
            {link.label}
          </Button>
        </li>
      ))}
      <li className="mt-10 flex h-full flex-col gap-3 px-4">
        <p className="flex items-center gap-2 py-1 font-bold tracking-wide text-muted-foreground sm:text-sm">
          <IoChevronForwardSharp />
          Case studies
        </p>
        <Cases />
        <div className="flex-1" />
        <div className="inline-flex items-center gap-1">
          <Button className="[&>svg:first-of-type]:text-foreground/75">
            <MaterialSymbolsArrowOutward />
            Open project
          </Button>
          <Button size="icon">
            <MaterialSymbolsMail />
          </Button>
        </div>
      </li>
    </motion.ul>
  );
}

function Cases() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) return;

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel
        className="relative w-full overflow-hidden rounded-md"
        setApi={setApi}
      >
        <CarouselContent>
          {projects.map(({ imageLink }, idx) => (
            <CarouselItem key={idx} className="pl-2">
              <div
                className={cn(
                  "aspect-video overflow-hidden rounded-md bg-[#27272a]",
                  "bg-cover bg-center",
                )}
                style={{ backgroundImage: `url('${imageLink}')` }}
              />
            </CarouselItem>
          ))}
        </CarouselContent>

        <div className="flex absolute bottom-1 left-1/2 -translate-x-1/2 items-center justify-center gap-1 rounded-full bg-background/20 px-3 py-2 backdrop-blur-md">
          {Array.from({ length: count }).map((_, idx) => (
            <div
              key={idx}
              className={cn(
                "rounded-full",
                idx + 1 === current
                  ? "h-[0.35rem] w-[0.35rem] bg-secondary-foreground/70"
                  : "h-1 w-1 bg-secondary-foreground/40",
              )}
            />
          ))}
        </div>
      </Carousel>

      <div className="flexs hidden h-32 w-full items-center gap-1 overflow-scroll rounded-lg p-1">
        <div className="h-full min-w-[80%] rounded-md bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/975f0b204481991.66a9c401c0232.jpg')] bg-cover bg-center" />
        <div className="h-full min-w-[80%] rounded-md bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/078371132230211.61de2a994cb5a.jpg')] bg-cover bg-center" />
      </div>
    </>
  );

  // "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fe0e1d176922383.64cd13eb4676e.jpg",
  // "https://mir-s3-cdn-cf.behance.net/project_modules/1400/975f0b204481991.66a9c401c0232.jpg",
  // "https://mir-s3-cdn-cf.behance.net/project_modules/1400/078371132230211.61de2a994cb5a.jpg",
}
