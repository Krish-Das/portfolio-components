"use client";

import { Drawer } from "vaul";
import { buttonVariants } from "@/app/components/buttons/ButtonV2";
import { MaterialSymbolsRectangleRounded } from "@/app/components/icons/material-symbols";
import MenuRight from "./menu-right";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const transition = {
  type: "spring",
  bounce: 0,
  duration: 0.75,
};

export default function VaulSidebar() {
  return (
    <>
      <Drawer.Root direction="right">
        <Drawer.Trigger
          className={cn(
            buttonVariants({ size: "icon", className: "bg-background/0" }),
          )}
        >
          <MaterialSymbolsRectangleRounded />
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
            <div className="flex h-full gap-3 bg-[#18181B] overflow-hidden rounded-[16px] p-3">
              <motion.div
                className="h-full w-[28rem] self-center rounded-md bg-black bg-cover bg-center max-sm:hidden"
                style={{
                  backgroundImage:
                    "url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/975f0b204481991.66a9c401c0232.jpg')",
                }}
                initial={{ opacity: 0, filter: "blur(5px)", x: "60%", scaleX: 1.5 }}
                animate={{ opacity: 1, filter: "blur(0px)", x: 0, scaleX: 1 }}
                exit={{ opacity: 0, filter: "blur(5px)", x: "60%", scaleX: 1.5 }}
                transition={transition}
              />
              <MenuRight />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
