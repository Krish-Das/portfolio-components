"use client";

import { Drawer } from "vaul";
import { buttonVariants } from "@/app/components/buttons/ButtonV2";
import { MaterialSymbolsRectangleRounded } from "@/components/icons/material-symbols";
import MenuRight from "./menu-right";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { projects } from "@/lib/project-images";

const transition = {
  type: "spring",
  bounce: 0,
  duration: 0.75,
};

export default function VaulSidebar() {
  const [selectedProject, setSelectedProject] = useState(0);

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
          <Drawer.Content className="fixed bottom-2 right-2 top-2 z-10 flex outline-none [--initial-transform:calc(100%+8px)]">
            {/* TODO: use dynamic colors */}
            <motion.div
              className="flex h-full gap-5 overflow-hidden rounded-[16px] border border-white/5 bg-[#18181b]/85 p-5 backdrop-blur-lg"
              // "inline-flex h-14 min-w-14 items-center gap-3 rounded-full border border-white/5 bg-[#424245]/70 px-5 text-xs backdrop-blur-[8px]"
              initial={{ x: "60%", scaleX: 1.5 }}
              animate={{ x: 0, scaleX: 1 }}
              exit={{ x: "60%", scaleX: 1.5 }}
              transition={transition}
            >
              <motion.div
                key={selectedProject}
                className="h-full w-[28rem] self-center rounded-md bg-black bg-cover bg-center max-sm:hidden"
                style={{
                  backgroundImage: `url('${projects[selectedProject].imageLink}')`,
                }}
                initial={{ y: 250, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={transition}
              />
              <MenuRight
                selectedProject={selectedProject}
                setSelectedProject={setSelectedProject}
              />
            </motion.div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  );
}
