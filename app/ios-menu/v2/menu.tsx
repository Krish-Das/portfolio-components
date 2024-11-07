"use client";

import { buttonVariants } from "@/app/components/buttons/ButtonV2";
import { MaterialSymbolsRectangleRounded } from "@/app/components/icons/material-symbols";
import { SystemUiconsEpisodes } from "@/app/components/icons/system-ui";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          autoFocus
          className={cn(
            buttonVariants({ size: "icon", className: "bg-background/0" }),
          )}
        >
          <MaterialSymbolsRectangleRounded />
        </Dialog.Trigger>

        <AnimatePresence>
          {open && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  className={cn(
                    "menu__overlay fixed z-20 bg-black/90 backdrop-blur-lg",
                    // "inset-0",
                    "bg-red-300", //TODO: Remove these
                  )}
                  initial="closed"
                  exit="closed"
                  animate="open"
                  // variants={{ open: { opacity: 1 }, closed: { opacity: 0 } }}
                  style={{
                    top: 30,
                    left: 30,
                    right: "calc(100% - 60px)",
                    bottom: "calc(100% - 60px)",
                  }}
                  variants={{
                    open: { top: 0, left: 0, right: 0, bottom: 0 },
                    closed: {
                      top: 30,
                      left: 30,
                      right: `calc(100% - ${60}px)`,
                      bottom: `calc(100% - ${60}px)`,
                    },
                  }}
                />
              </Dialog.Overlay>
              <Dialog.Content className="menu__content bg-blue-300/20s fixed inset-0 z-20">
                {/* --- Close --- */}
                <Dialog.Close
                  autoFocus
                  className={cn(
                    buttonVariants({
                      size: "icon",
                      className: "bg-background/0",
                    }),
                  )}
                >
                  <SystemUiconsEpisodes />
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
