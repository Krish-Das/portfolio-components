"use client"

import { useState } from "react"
import { motion, Variants } from "motion/react"
import { DialogTrigger, Modal, ModalOverlay } from "react-aria-components"
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5"
import useMeasure from "react-use-measure"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/app/components/buttons/ButtonV2"
import { MotionModalOverlay } from "@/app/components/MotionComponents"

type AnimationState = "unmounted" | "hidden" | "visible"
const iconVariants = {
  hidden: { opacity: 0, scale: 0, filter: "blur(8px)", rotate: 45 },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", rotate: 0 },
} satisfies Variants

export default function TwitterFabAnimationV3() {
  const [triggerRef, bounds] = useMeasure()
  const [isOpen, setOpen] = useState(false)
  const [animation, setAnimation] = useState<AnimationState>("unmounted")

  const buttonStyles = buttonVariants({ size: "iconlg" })

  return (
    <>
      <DialogTrigger
        onOpenChange={(isOpen) => setAnimation(isOpen ? "visible" : "hidden")}
      >
        <Button size="iconlg" ref={triggerRef} autoFocus>
          <IoAddSharp />
        </Button>
        <MotionModalOverlay
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
          isExiting={animation === "hidden"}
          onAnimationComplete={(animation) => {
            setAnimation((a) =>
              animation === "hidden" && a === "hidden" ? "unmounted" : a
            )
          }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 },
          }}
          initial="hidden"
          animate={animation}
          isDismissable
        >
          <Modal
            className="absolute flex w-fit flex-col-reverse gap-1"
            style={{
              bottom: window.innerHeight - bounds.bottom,
              left: bounds.left,
            }}
          >
            {/**
             ** NOTE: EXPENSE button
             ** No button animation, only SVG animation
             **/}
            <button className={cn(buttonStyles)} autoFocus>
              <motion.span
                className="relative"
                initial="hidden"
                animate={animation}
                variants={{
                  visible: iconVariants.visible,
                  hidden: iconVariants.hidden,
                }}
              >
                <IoRemoveSharp />
              </motion.span>

              <motion.span
                className="absolute"
                initial="hidden"
                animate={animation}
                variants={{
                  visible: iconVariants.hidden,
                  hidden: iconVariants.visible,
                }}
              >
                <IoAddSharp />
              </motion.span>
            </button>

            {/**
             ** NOTE: INCOME button
             ** Only button animation
             **/}
            <motion.button
              className={cn(buttonStyles)}
              initial="hidden"
              animate={animation}
              variants={{
                visible: { opacity: 1, scale: 1, filter: "blur(0px)", y: 0 },
                hidden: {
                  opacity: 0,
                  scale: 0.6,
                  filter: "blur(5px)",
                  y: 10,
                },
              }}
            >
              <IoAddSharp />
            </motion.button>
          </Modal>
        </MotionModalOverlay>
      </DialogTrigger>
    </>
  )
}
