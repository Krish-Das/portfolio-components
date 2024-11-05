import { Button } from "@/app/components/buttons/ButtonV2";
import {
  MaterialSymbolsArrowOutward,
  MaterialSymbolsMail,
} from "@/app/components/icons/material-symbols";
import { MenuLinks } from "@/lib/menu-links";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { IoChevronForwardSharp } from "react-icons/io5";

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
