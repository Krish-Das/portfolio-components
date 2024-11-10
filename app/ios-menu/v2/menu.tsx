"use client"

import { buttonVariants } from "@/app/components/buttons/ButtonV2"
import {
  MaterialSymbolsMagnificationLarge,
  MaterialSymbolsRectangleRounded,
} from "@/components/icons/material-symbols"
import { transition } from "@/lib/animation-utils"
import { MenuLinks } from "@/lib/menu-links"
import { projects } from "@/lib/project-images"
import { cn, debounce } from "@/lib/utils"
import * as Dialog from "@radix-ui/react-dialog"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"
import { IoChevronForwardSharp } from "react-icons/io5"
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

              <Dialog.Content className="menu__content container fixed inset-0 z-20 gap-5 p-0 md:grid md:grid-cols-[2fr,1fr] md:place-items-center">
                <div className="menu__thumbnail-wraper flex h-full w-full items-center justify-center max-md:absolute max-md:left-1/2 max-md:top-1/2 max-md:-translate-x-1/2 max-md:-translate-y-1/2 md:static md:justify-end">
                  <motion.div
                    className={cn(
                      "menu__thumbnail-image h-[95dvh] w-[90vw] rounded-sm bg-[#3f3f46] md:h-[90dvh] md:w-[28rem]",
                      "bg-[url('https://dr.savee-cdn.com/image-fallbacks/original/6/7/290e653c9caf1f8beebecd.jpg')] bg-cover bg-center"
                      // 'https://dr.savee-cdn.com/image-fallbacks/original/6/6/0fc00b6652caded38349ff.jpg'
                      // 'https://dr.savee-cdn.com/image-fallbacks/original/6/5/6506b84c19486e146dac5b.jpg'
                      // 'https://dr.savee-cdn.com/things/6/7/2c06e23c9caf2d5afcf3ac.png'
                      // 'https://dr.savee-cdn.com/image-fallbacks/original/6/6/f437193c9caf18281b6a67.jpg'
                      // 'https://dr.savee-cdn.com/image-fallbacks/original/6/7/290e653c9caf1f8beebecd.jpg'
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
                  <ul className="flex h-[95dvh] w-[90vw] flex-col gap-3 overflow-y-scroll px-4 max-md:justify-end max-md:py-4 md:h-[90dvh] md:w-full">
                    {MenuLinks.map(({ label, icon }, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2.5 text-foreground/85 [&>svg:first-of-type]:text-foreground/80"
                      >
                        {icon}
                        {label}
                      </li>
                    ))}
                    <li className="mt-7 flex flex-col gap-3">
                      <p className="flex items-center gap-2.5 font-medium [&>svg:first-of-type]:text-foreground/40">
                        <IoChevronForwardSharp />
                        Case studies
                      </p>

                      <ul className="flex flex-col gap-2 pl-5">
                        {projects.map(({ label }, idx) => {
                          const bgColor = "1 90% 38%"
                          const borderColor = "3 85% 54%"
                          const textColor = "11 100% 96%"

                          // const bgColor = "241 26% 30%"
                          // const borderColor = "241 21% 47%"
                          // const textColor = "240 21% 95%"

                          // const bgColor = "3 79% 26%"
                          // const borderColor = "3 85% 54%"
                          // const textColor = "11 100% 96%"

                          return (
                            <li
                              key={idx}
                              className={cn(
                                "flex w-fit items-center justify-center rounded-full border border-primary/5 bg-secondary/30 backdrop-blur-lg",
                                "h-10 px-4 text-sm font-medium sm:h-8 sm:px-3 sm:text-xs",
                                idx === 0 && "bg-primary text-background"
                                //   "border border-[var(--border-color)] bg-[var(--bg-color)] font-semibold text-[var(--text-color)] backdrop-blur-sm"
                              )}
                              style={
                                {
                                  "--bg-color": `hsl(${bgColor} / 0.2)`,
                                  "--border-color": `hsl(${borderColor} / 0.1)`,
                                  "--text-color": `hsl(${textColor} / 1.0)`,
                                } as React.CSSProperties
                              }
                            >
                              {label}
                            </li>
                          )
                        })}
                      </ul>
                    </li>
                  </ul>
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
