"use client"

import { useEffect, useState } from "react"
import { useAnimationControls } from "motion/react"
import { IoAddSharp } from "react-icons/io5"

import { cn } from "@/lib/utils"
import { Button } from "@/app/components/buttons/ButtonV2"

export default function TwitterFabAnimationV2() {
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
      </div>
    </section>
  )
}
