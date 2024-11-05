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
      <Drawer.Root direction="right" handleOnly>
        <Drawer.Trigger
          className={cn(
            buttonVariants({ size: "icon", className: "bg-background/0" }),
          )}
        >
          <MaterialSymbolsRectangleRounded />
        </Drawer.Trigger>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="fixed bottom-2 right-2 top-2 z-10 flex outline-none [--initial-transform:calc(100%+8px)]">
            {/* TODO: use dynamic colors */}
            <motion.div className="flex h-full gap-3 overflow-hidden rounded-[16px] bg-[#18181B] p-3"
              initial={{ x: "60%", scaleX: 1.5 }}
              animate={{ x: 0, scaleX: 1 }}
              exit={{ x: "60%", scaleX: 1.5 }}
              transition={transition}
            >
              <div
                className="h-full w-[28rem] self-center rounded-md bg-black bg-cover bg-center max-sm:hidden"
                style={{
                  backgroundImage:
                  "url('https://mir-s3-cdn-cf.behance.net/project_modules/1400/fe0e1d176922383.64cd13eb4676e.jpg')",
                }}
              />
              <MenuRight />
            </motion.div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
