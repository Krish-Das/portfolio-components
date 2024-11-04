"use client";

import { Drawer } from "vaul";
import { Button } from "@/app/components/buttons/ButtonV2";
import { MaterialSymbolsRectangleRounded } from "@/app/components/icons/material-symbols";
import MenuRight from "./menu-right";

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
