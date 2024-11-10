import { Button } from "@/app/components/buttons/ButtonV2";
import {
  MaterialSymbolsArrowOutward,
  MaterialSymbolsMail,
} from "@/components/icons/material-symbols";
import { MenuLinks } from "@/lib/menu-links";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/project-images";
import { motion } from "framer-motion";
import { IoChevronForwardSharp } from "react-icons/io5";
import { Fragment } from "react";

const transition = {
  type: "spring",
  bounce: 0,
  duration: 0.75,
};

export default function MenuRight({
  selectedProject,
  setSelectedProject,
}: {
  selectedProject: number;
  setSelectedProject: React.Dispatch<React.SetStateAction<number>>;
}) {
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
        <ul className="flex flex-col gap-2 pl-5">
          {projects.map(({ label, completed }, idx) => (
            <li
              key={idx}
              className="relative w-fit"
            >
              <Button
                size="sm"
                className={cn(
                  "w-fit",
                  idx === selectedProject
                    ? "bg-[#006FEE] [--bg-tap-end:#006FEE]"
                    : "bg-[hsl(var(--secondary)/0.4)] [--bg-tap-end:hsl(var(--secondary)/0.4)]",
                  // "bg-[hsla(240,51%,61%,0.4)] [--bg-tap-end:hsla(240,51%,61%,0.4)]"
                  // "bg-[hsla(255,64%,75%,0.9)] [--bg-tap-end:hsla(255,64%,75%,0.9)]"
                )}
                onClick={() => setSelectedProject(idx)}
              >
                {label}
              </Button>

              {!completed && (
                <span className="absolute -right-10 top-0 rounded-full border-border bg-muted/40 px-3 py-1 text-[0.7rem] leading-none backdrop-blur-md">
                  soon
                </span>
              )}
            </li>
          ))}
        </ul>
      </li>

      <div className="flex-1" />
      <MenuFooter />
    </motion.ul>
  );
}

function MenuFooter() {
  return (
    <div className="inline-flex items-center gap-1">
      <Button className="[&>svg:first-of-type]:text-foreground/75">
        <MaterialSymbolsArrowOutward />
        Open project
      </Button>
      <Button size="icon">
        <MaterialSymbolsMail />
      </Button>
    </div>
  );
}

// "https://mir-s3-cdn-cf.behance.net/project_modules/1400/fe0e1d176922383.64cd13eb4676e.jpg",
// "https://mir-s3-cdn-cf.behance.net/project_modules/1400/975f0b204481991.66a9c401c0232.jpg",
// "https://mir-s3-cdn-cf.behance.net/project_modules/1400/078371132230211.61de2a994cb5a.jpg",
