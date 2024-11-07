"use client";

import { buttonVariants } from "@/app/components/buttons/ButtonV2";
import {
  MaterialSymbolsMagnificationLarge,
  MaterialSymbolsRectangleRounded,
} from "@/app/components/icons/material-symbols";
import { transition } from "@/lib/animation-utils";
import { cn } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [ref, bounds] = useMeasure();

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          autoFocus
          ref={ref}
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
                  key="menu-overlay"
                  className={cn(
                    "menu__overlay fixed z-20 bg-black/85 backdrop-blur-lg",
                  )}
                  initial="closed"
                  exit="closed"
                  animate="open"
                  style={{
                    top: bounds.top,
                    left: bounds.left,
                    bottom: window.innerHeight - bounds.bottom,
                    right: window.innerWidth - bounds.right,
                    borderRadius: "30px",
                  }}
                  variants={{
                    closed: {
                      borderRadius: "30px",
                      top: bounds.top,
                      left: bounds.left,
                      bottom: window.innerHeight - bounds.bottom,
                      right: window.innerWidth - bounds.right,
                    },
                    open: {
                      borderRadius: "0px",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                    },
                  }}
                  transition={transition}
                />
              </Dialog.Overlay>
              <Dialog.Content className="menu__content fixed inset-0 z-20">
                {/* --- Close --- */}
                <Dialog.Close
                  autoFocus
                  className={cn(
                    buttonVariants({
                      size: "icon",
                      className: "bg-background/0",
                    }),
                    "absolute",
                  )}
                  style={{
                    top: bounds.top,
                    left: bounds.left,
                    bottom: window.innerHeight - bounds.bottom,
                    right: window.innerWidth - bounds.right,
                    borderRadius: "30px",
                  }}
                >
                  <MaterialSymbolsMagnificationLarge />
                </Dialog.Close>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
