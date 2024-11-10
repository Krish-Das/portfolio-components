"use client";

import { Drawer } from "vaul";
import { Button, buttonVariants } from "@/app/components/buttons/ButtonV2";
import {
  MaterialSymbolsRectangleRounded,
} from "@/components/icons/material-symbols";
import { cn } from "@/lib/utils";
import { IoArrowForward, IoChevronForwardSharp } from "react-icons/io5";
import { RawLogo } from "@/app/menu-layout/raw-logo";
import { MenuLinks } from "@/lib/menu-links";

export default function VaulMenu() {
  return (
    <>
      <Drawer.Root direction="top">
        <Drawer.Trigger
          autoFocus
          className={cn(
            buttonVariants({ size: "icon", className: "bg-background/0" }),
          )}
        >
          <MaterialSymbolsRectangleRounded />
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="fixed inset-x-2 top-2 z-10 outline-none [--initial-transform:calc(100%+8px)]">
            <div className="relative isolate flex w-full gap-px overflow-hidden">
              <section className="relative flex h-[80dvh] flex-1 flex-col justify-between overflow-hidden rounded-[16px] rounded-r-[5px] p-5 sm:h-[37rem] sm:p-8">
                {/* NOTE: LOGO */}
                <div className="brand__logo relative left-0 top-0 grid h-6 w-16 origin-bottom-left -translate-y-full rotate-90 place-items-center [&>svg:first-of-type]:rotate-180">
                  <RawLogo className="h-full w-full" />
                </div>

                {/* --- Sliders --- */}
                <div className="space-y-3">
                  <p className="mb-3 flex items-center gap-2 py-1 font-bold tracking-wide opacity-80 sm:text-sm">
                    <IoChevronForwardSharp />
                    Case studies
                  </p>
                  <div className="flex gap-2">
                    <div className="aspect-video h-32 rounded-lg bg-[#887F90] ring" />
                    <div className="aspect-video h-32 rounded-lg bg-[#161616]" />
                  </div>
                </div>

                {/* --- Background --- */}
                <div className="absolute inset-0 -z-20 bg-[url('https://dr.savee-cdn.com/image-fallbacks/original/6/7/26d96e3c9caf177be4e9d4.jpg')] bg-cover bg-center" />
                {/* <div className="absolute inset-0 -z-20 bg-[url('https://dr.savee-cdn.com/image-fallbacks/original/6/5/6506b84c19486e146dac5b.jpg')] bg-cover bg-center" /> */}

                {/* --- Call-to-actions --- */}
                <div
                  className={cn(
                    "absolute left-[51.5%] top-[47.5%] -translate-x-1/2 -translate-y-full",
                    "flex items-center gap-2",
                    "text-md px-4 py-2 font-semibold",
                    "opacity-50",
                  )}
                >
                  Explore now
                  <IoArrowForward />
                </div>

                <div
                  className={cn(
                    "absolute left-[51.5%] top-[47.5%] -translate-x-1/2 -translate-y-full",
                    "flex items-center gap-2",
                    "text-md rounded-full border border-white/5 bg-white/10 px-4 py-2 font-semibold backdrop-blur-[8px]",
                  )}
                >
                  Explore now
                  <IoArrowForward />
                </div>
              </section>

              <ul className="h-[80dvh] w-64 rounded-[16px] rounded-l-[5px] border border-border/30 bg-[#0e0e0d]/80 p-5 backdrop-blur-lg sm:h-[37rem] sm:p-8">
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
              </ul>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
