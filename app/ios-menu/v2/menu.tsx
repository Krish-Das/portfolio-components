"use client";

import { buttonVariants } from "@/app/components/buttons/ButtonV2";
import {
  MaterialSymbolsMagnificationLarge,
  MaterialSymbolsRectangleRounded,
} from "@/app/components/icons/material-symbols";
import { transition } from "@/lib/animation-utils";
import { cn, debounce } from "@/lib/utils";
import * as Dialog from "@radix-ui/react-dialog";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";

export function useExitTransitionDelay(isOpen: boolean, delay: number = 500) {
  const [shouldHaveExitDelay, setShouldHaveExitDelay] = useState(false);

  useEffect(() => {
    const scheduleExitDelay = debounce(() => {
      setShouldHaveExitDelay(true);
    }, delay);

    if (isOpen) {
      scheduleExitDelay();
    } else {
      scheduleExitDelay.cancel();
      setShouldHaveExitDelay(false);
    }

    return () => {
      scheduleExitDelay.cancel();
    };
  }, [isOpen, delay]);

  return shouldHaveExitDelay;
}

export default function Menu() {
  const [open, setOpen] = useState(false);
  const shouldOverlayHaveExitDelay = useExitTransitionDelay(open, 700);
  const [ref, bounds] = useMeasure();
  const overlayExitDelay = 0.5;

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
                      transition: {
                        ...transition,
                        delay: shouldOverlayHaveExitDelay
                          ? overlayExitDelay
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

              <Dialog.Content className="menu__content fixed inset-0 z-20 container p-0 md:grid md:place-items-center md:grid-cols-[2fr,1fr]">
                <div className="menu__thumbnail-wraper h-full w-full md:static max-md:absolute max-md:top-1/2 max-md:left-1/2 max-md:-translate-y-1/2 max-md:-translate-x-1/2 flex items-center md:justify-end justify-center">
                  <motion.div
                    className={cn(
                      "menu__thumbnail-image w-[90vw] md:w-[28rem] h-[95dvh] md:h-[90dvh] rounded-sm bg-[#3f3f46]",
                      "bg-cover bg-center bg-[url('https://dr.savee-cdn.com/image-fallbacks/original/6/6/0fc00b6652caded38349ff.jpg')]",
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
                        transition: { ...transition, duration: 1 },
                      },
                      open: {
                        opacity: 1,
                        filter: "blur(0px)",
                        x: 0,
                        y: 0,
                        scaleY: 1,
                        scaleX: 1,
                        transition: {
                          ...transition,
                          duration: 0.85,
                          delay: 0.43,
                        },
                      },
                    }}
                  />
                </div>

                {/* Menu links */}
                <div className="menu__link-wraper relative h-full w-full grid place-items-center">
                  <div className="md:w-full w-[90vw] h-[95dvh] md:h-[90dvh]" />
                </div>

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
