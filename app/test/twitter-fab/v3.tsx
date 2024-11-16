"use client"

import { motion, Variants } from "motion/react"
import { DialogTrigger, Modal, ModalOverlay } from "react-aria-components"
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5"
import useMeasure from "react-use-measure"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/app/components/buttons/ButtonV2"

const iconVariants = {
  hidden: { opacity: 0, scale: 0, filter: "blur(8px)", rotate: 45 },
  visible: { opacity: 1, scale: 1, filter: "blur(0px)", rotate: 0 },
} satisfies Variants

export default function TwitterFabAnimationV3() {
  const [triggerRef, bounds] = useMeasure()
  const buttonStyles = buttonVariants({ size: "iconlg" })

  return (
    <>
      <DialogTrigger>
        <Button size="iconlg" ref={triggerRef} autoFocus>
          <IoAddSharp />
        </Button>
        <ModalOverlay
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
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
                animate="open"
                initial="close"
                exit="close"
                variants={{
                  open: iconVariants.visible,
                  close: iconVariants.hidden,
                }}
              >
                <IoRemoveSharp />
              </motion.span>

              <motion.span
                className="absolute"
                animate="open"
                initial="close"
                exit="close"
                variants={{
                  open: iconVariants.hidden,
                  close: iconVariants.visible,
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
              animate="open"
              initial="close"
              exit="close"
              variants={{
                open: { opacity: 1, scale: 1, filter: "blur(0px)", y: 0 },
                close: {
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
        </ModalOverlay>
      </DialogTrigger>
    </>
  )
}
