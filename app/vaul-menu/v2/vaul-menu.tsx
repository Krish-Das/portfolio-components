"use client";

import { Drawer } from "vaul";
import { buttonVariants } from "@/app/components/buttons/ButtonV2";
import { MaterialSymbolsRectangleRounded } from "@/app/components/icons/material-symbols";
import { cn } from "@/lib/utils";

export default function VaulMenu() {
  return (
    <>
      <Drawer.Root direction="top">
        <Drawer.Trigger
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
              className="flex h-full w-full gap-5 overflow-hidden rounded-[16px] border border-white/5 bg-[#18181b]/85 p-5 backdrop-blur-lg"
              // "inline-flex h-14 min-w-14 items-center gap-3 rounded-full border border-white/5 bg-[#424245]/70 px-5 text-xs backdrop-blur-[8px]"
            >
              hehe
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
