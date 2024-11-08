"use client";

import { buttonVariants } from "@/app/components/buttons/ButtonV2";
import {
  MaterialSymbolsMagnificationLarge,
  MaterialSymbolsRectangleRounded,
} from "@/app/components/icons/material-symbols";
import { transition } from "@/lib/animation-utils";
import { cn, wait } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useMeasure from "react-use-measure";

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [shouldOverlayExitHaveDelay, setShouldOverlayExitHaveDelay] =
    useState(false);
  const [ref, bounds] = useMeasure();
  const overlayCloseDelay = 0.5;

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          autoFocus
          onClick={async () => {
            setShouldOverlayExitHaveDelay(false);
            await wait(500);
            setShouldOverlayExitHaveDelay(true);
          }}
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
                      transition: {
                        ...transition,
                        delay: shouldOverlayExitHaveDelay
                          ? overlayCloseDelay
                          : 0,
                      },
                    },
                    open: {
                      borderRadius: "0px",
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      transition,
                    },
                  }}
                />
              </Dialog.Overlay>

              <Dialog.Content
                className={cn(
                  "menu__content fixed inset-0 z-20",
                  "grid place-items-center",
                )}
              >
                <motion.div
                  className={cn(
                    "menu__thumbnail w-[90vw] sm:w-[28rem] h-[86dvh] rounded-sm bg-[#3f3f46] origin-top-right",
                    "bg-cover bg-center bg-[url('https://dr.savee-cdn.com/image-fallbacks/original/6/5/6506b84c19486e146dac5b.jpg')]",
                    "[--width-to:90vw] sm:[--width-to:28rem]",
                    // 'https://dr.savee-cdn.com/image-fallbacks/original/6/7/26d96e3c9caf177be4e9d4.jpg',
                    // 'https://dr.savee-cdn.com/image-fallbacks/original/6/5/6506b84c19486e146dac5b.jpg',
                  )}
                  initial="close"
                  exit="close"
                  animate="open"
                  variants={{
                    close: {
                      opacity: 0,
                      filter: "blur(20px)",
                      x: 30,
                      y: -30,
                      scaleY: 1.05,
                      scaleX: 1.15,
                      // height: "60dvh",
                      // height: "100dvh",
                      // width: "100vw",
                      transition: { ...transition, duration: 1 },
                    },
                    open: {
                      opacity: 1,
                      filter: "blur(0px)",
                      x: 0,
                      y: 0,
                      scaleY: 1,
                      scaleX: 1,
                      // height: "86dvh",
                      // width: "var(--width-to)",
                      transition: { ...transition, delay: 0.4 },
                    },
                  }}
                />

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

                <Dialog.Title className="sr-only">Menu Content</Dialog.Title>
                <Dialog.Description className="sr-only">
                  Navigate the site from here
                </Dialog.Description>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
