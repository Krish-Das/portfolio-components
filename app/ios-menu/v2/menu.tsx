"use client"

import { buttonVariants } from "@/app/components/buttons/ButtonV2"
import {
  MaterialSymbolsMagnificationLarge,
  MaterialSymbolsRectangleRounded,
} from "@/app/components/icons/material-symbols"
import { transition } from "@/lib/animation-utils"
import { cn, debounce } from "@/lib/utils"
import * as Dialog from "@radix-ui/react-dialog"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import useMeasure from "react-use-measure"

export function useExitTransitionDelay(isOpen: boolean, delay: number = 500) {
  const [shouldHaveExitDelay, setShouldHaveExitDelay] = useState(false)

  useEffect(() => {
    const scheduleExitDelay = debounce(() => {
      setShouldHaveExitDelay(true)
    }, delay)

    if (isOpen) {
      scheduleExitDelay()
    } else {
      scheduleExitDelay.cancel()
      setShouldHaveExitDelay(false)
    }

    return () => {
      scheduleExitDelay.cancel()
    }
  }, [isOpen, delay])

  return shouldHaveExitDelay
}

export default function Menu() {
  const [open, setOpen] = useState(false)
  const shouldOverlayHaveExitDelay = useExitTransitionDelay(open, 700)
  const [ref, bounds] = useMeasure()
  const overlayExitDelay = 0.5

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger
          autoFocus
          ref={ref}
          className={cn(
            buttonVariants({ size: "icon", className: "bg-background/0" })
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
                  className="menu__overlay fixed z-20 bg-black/85 backdrop-blur-lg"
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

              <Dialog.Content className="menu__content container fixed inset-0 z-20 p-0 md:grid md:grid-cols-[2fr,1fr] md:place-items-center">
                <div className="menu__thumbnail-wraper flex h-full w-full items-center justify-center max-md:absolute max-md:left-1/2 max-md:top-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2 md:static md:justify-end">
                  <motion.div
                    className={cn(
                      "menu__thumbnail-image h-[95dvh] w-[90vw] rounded-sm bg-[#3f3f46] md:h-[90dvh] md:w-[28rem]",
                      "bg-[url('https://dr.savee-cdn.com/image-fallbacks/original/6/6/0fc00b6652caded38349ff.jpg')] bg-cover bg-center"
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
                <div className="menu__link-wraper relative grid h-full w-full place-items-center">
                  <div className="h-[95dvh] w-[90vw] md:h-[90dvh] md:w-full" />
                </div>

                <Dialog.Close
                  autoFocus
                  className={cn(
                    buttonVariants({
                      size: "icon",
                      className: "absolute bg-background/0",
                    })
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
  )
}
