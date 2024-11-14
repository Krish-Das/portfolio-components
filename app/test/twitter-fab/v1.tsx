"use client"

import { Fragment, useEffect, useState } from "react"
import { AnimatePresence, motion, useAnimationControls } from "motion/react"
import { IoAddSharp } from "react-icons/io5"

import { cn } from "@/lib/utils"
import { MaterialSymbolsRectangleRounded } from "@/components/icons/material-symbols"
import { Button } from "@/app/components/buttons/ButtonV2"

export default function TwitterFabAnimationV1() {
  const controls = useAnimationControls()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (open) {
      controls.start("open")
    } else {
      controls.start("close")
    }
  }, [open, controls])

  return (
    <section className="grid h-full w-full place-items-center">
      <div className="relative isolate">
        <Button
          size="iconlg"
          variant="destructive"
          className={cn("rounded-lg", open && "[--bg-tap-end:#21211F]")}
          controls={controls}
          onClick={() => setOpen(!open)}
          initial="close"
          variants={{
            open: { borderRadius: 30, rotate: 45 },
            close: { borderRadius: 13, rotate: 0 },
          }}
          autoFocus
        >
          <IoAddSharp />
        </Button>
        <AnimatePresence>
          {open && (
            <Fragment>
              <motion.div
                // className="absolute left-1/2 top-1/2 size-[50%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-300"
                className="absolute left-1/2 top-1/2 -z-10 grid size-[80%] place-items-center rounded-full bg-rose-950/40 text-rose-500"
                style={{
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                exit="close"
                initial="close"
                animate="open"
                // TODO: Try blur
                variants={{
                  open: { opacity: 1, y: `-${130 * 1}%`, scale: 1, filter: "blur(0px)" },
                  close: { opacity: 0, y: 0, scale: 0.3, filter: "blur(8px)" },
                }}
                // transition={{ duration: 2 }}
              >
                <MaterialSymbolsRectangleRounded />
              </motion.div>

              <motion.div
                className="absolute left-1/2 top-1/2 -z-10 grid size-[80%] place-items-center rounded-full bg-emerald-950/40 text-emerald-500"
                style={{
                  translateX: "-50%",
                  translateY: "-50%",
                }}
                exit="close"
                initial="close"
                animate="open"
                variants={{
                  open: { opacity: 1, y: `-${130 * 2}%`, scale: 1 },
                  close: { opacity: 0, y: 0, scale: 0.3 },
                }}
              >
                <MaterialSymbolsRectangleRounded />
              </motion.div>
            </Fragment>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}
