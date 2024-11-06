"use client";

import { Drawer } from "vaul";
import { buttonVariants } from "@/app/components/buttons/ButtonV2";
import { MaterialSymbolsRectangleRounded } from "@/app/components/icons/material-symbols";
import { cn } from "@/lib/utils";
import { IoChevronForwardSharp } from "react-icons/io5";
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
              className="flex h-[27rem] w-full flex-col overflow-hidden rounded-[16px] bg-[#0e0e0d] p-5 sm:p-8"
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
                        label.toLowerCase() === "get in touch" && "underline underline-offset-8",
                        idx === 0 && "italic font-semibold"
                      )}
                    >
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <p className="mb-3 flex items-center gap-2 py-1 font-bold tracking-wide text-muted-foreground sm:text-sm">
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
