"use client";

import { Drawer } from "vaul";
import { Button } from "@/app/components/buttons/ButtonV2";
import {
  MaterialSymbolsArrowOutward,
  MaterialSymbolsMail,
  MaterialSymbolsRectangleRounded,
} from "@/app/components/icons/material-symbols";
import { MenuLinks } from "@/lib/menu-links";
import { cn } from "@/lib/utils";
import { IoChevronForwardSharp } from "react-icons/io5";

export default function VaulSidebar() {
  return (
    <>
      <Drawer.Root direction="right">
        <Drawer.Trigger asChild>
          <Button
            autoFocus
            className="bg-background/0 [--bg-tap-end:#00000000]"
            size="icon"
          >
            <MaterialSymbolsRectangleRounded />
          </Button>
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content
            className="fixed bottom-2 right-2 top-2 z-10 flex outline-none"
            // The gap between the edge of the screen and the drawer is 8px in this case.
            style={
              {
                "--initial-transform": "calc(100% + 8px)",
              } as React.CSSProperties
            }
          >
            {/* TODO: use dynamic colors */}
            <div className="flex h-full gap-3 rounded-[16px] bg-[#18181B] p-3">
              <div className="h-full w-[28rem] rounded-md bg-black" />
              <MenuRight />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}

function MenuRight() {
  return (
    <ul className="flex h-full w-72 flex-col gap-2 rounded-md md:gap-1">
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
    </ul>
  );
}
