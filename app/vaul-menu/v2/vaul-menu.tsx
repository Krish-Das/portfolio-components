"use client";

import { Drawer } from "vaul";
import { buttonVariants } from "@/app/components/buttons/ButtonV2";
import {
  MaterialSymbolsArrowOutward,
  MaterialSymbolsRectangleRounded,
} from "@/app/components/icons/material-symbols";
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
            <div
              className="relative isolate flex h-[80dvh] w-full flex-col overflow-hidden rounded-[16px] bg-[#0e0e0d] p-5 sm:h-[27rem] sm:p-8"
              // "flex h-full w-full gap-5 overflow-hidden rounded-[16px] border border-white/5 bg-[#18181b]/85 p-5 backdrop-blur-lg"
            >
              {/* TODO: check flex-row-reverse */}
              <div className="flex h-full w-full flex-1 justify-between">
                {/* NOTE: LOGO */}
                <div className="brand__logo relative left-0 top-0 grid h-6 w-16 origin-bottom-left -translate-y-full rotate-90 place-items-center [&>svg:first-of-type]:rotate-180">
                  <RawLogo className="h-full w-full" />
                </div>

                <ul className="">
                  {MenuLinks.map(({ label }, idx) => (
                    <li
                      key={idx}
                      className={cn(
                        "text-xl font-medium leading-8",
                        label.toLowerCase() === "get in touch" &&
                          "underline underline-offset-8",
                        idx === 0 && "font-semibold italic",
                      )}
                    >
                      {label}
                    </li>
                  ))}
                </ul>

                {/* --- Background --- */}
                <div className="absolute inset-0 -z-20 bg-[url('https://dr.savee-cdn.com/image-fallbacks/original/6/7/26d96e3c9caf177be4e9d4.jpg')] bg-cover bg-center" />
                {/* <div className="absolute inset-0 -z-20 bg-[url('https://dr.savee-cdn.com/image-fallbacks/original/6/5/a67f32e731eae685a53cb3.jpg')] bg-cover bg-center" /> */}

                {/* "https://dr.savee-cdn.com/image-fallbacks/original/6/7/26d96e3c9caf177be4e9d4.jpg" */}
                {/* "https://dr.savee-cdn.com/image-fallbacks/original/6/5/a67f32e731eae685a53cb3.jpg" */}

                {/* --- Overlay --- */}
                <div className="absolute inset-y-0 right-0 -z-10 w-40 bg-gradient-to-l from-black/70 mix-blend-overlay sm:w-48" />

                {/* --- Call-to-actions --- */}
                {/* TODO: Try using a glow */}
                <div className="inline-grids absolute left-1/2 top-1/2 hidden h-16 w-16 -translate-x-1/2 -translate-y-full place-items-center rounded-full border border-white/5 bg-white/10 text-3xl backdrop-blur-[8px]">
                  <MaterialSymbolsArrowOutward />
                </div>

                <div
                  className={cn(
                    "absolute left-1/2 top-1/2 inline-grid -translate-x-1/2 -translate-y-full place-items-center",
                    "flex items-center gap-2",
                    "px-4 py-2 text-lg font-semibold",
                    "opacity-50",
                  )}
                >
                  Explore now
                  <IoArrowForward />
                </div>

                <div
                  className={cn(
                    "absolute left-1/2 top-1/2 inline-grid -translate-x-1/2 -translate-y-full place-items-center",
                    "flex items-center gap-2",
                    "rounded-full border border-white/5 bg-white/10 px-4 py-2 text-lg font-semibold backdrop-blur-[8px]",
                  )}
                >
                  Explore now
                  <IoArrowForward />
                </div>
              </div>

              {/* --- Sliders --- */}
              <p className="mb-3 flex items-center gap-2 py-1 font-bold tracking-wide opacity-80 sm:text-sm">
                <IoChevronForwardSharp />
                Case studies
              </p>
              <div className="flex gap-2">
                <div className="aspect-video h-32 rounded-lg bg-[#887F90] ring" />
                <div className="aspect-video h-32 rounded-lg bg-[#161616]" />
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
