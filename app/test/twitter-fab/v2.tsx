"use client"

import { useEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { AnimatePresence, motion, useAnimation, Variants } from "motion/react"
import { IoAddSharp, IoRemove } from "react-icons/io5"
import useMeasure from "react-use-measure"

import { cn } from "@/lib/utils"
import { Button } from "@/app/components/buttons/ButtonV2"

export default function TwitterFabAnimationV2() {
  const [triggerRef, bounds] = useMeasure()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <Button
            size="iconlg"
            variant="destructive"
            className={cn(open && "opacity-0")}
            ref={triggerRef}
            autoFocus
          >
            <IoAddSharp />
          </Button>
        </Dialog.Trigger>

        <AnimatePresence>
          {open && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay
                className="fixed inset-0 bg-black/80 backdrop-blur-sm"
                asChild
              >
                <motion.div
                  key="transaction_add_overlay"
                  animate="open"
                  initial="close"
                  exit="close"
                  variants={{
                    open: { opacity: 1 },
                    close: { opacity: 0 },
                  }}
                />
              </Dialog.Overlay>
              <Dialog.Content
                className="fixed flex flex-col-reverse gap-2"
                style={{
                  bottom: window.innerHeight - bounds.bottom,
                  left: bounds.left,
                }}
              >
                <TransactionAddButton
                  type="expense"
                  open={open}
                  setOpen={setOpen}
                />
                <TransactionAddButton
                  type="income"
                  open={open}
                  setOpen={setOpen}
                  variants={{
                    open: { opacity: 1, scale: 1, filter: "blur(0px)", y: 0 },
                    close: {
                      opacity: 0,
                      scale: 0.6,
                      filter: "blur(5px)",
                      y: 10,
                    },
                  }}
                />

                <Dialog.Title className="sr-only" />
                <Dialog.Description className="sr-only" />
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  )
}

const TransactionAddButton = ({
  type,
  open,
  setOpen,
  variants,
}: {
  type: "expense" | "income"
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
  variants?: Variants
}) => {
  const isButtonForExpense = type === "expense"
  const buttonLabel = isButtonForExpense ? "Expense" : "Income"
  const buttonIcon = isButtonForExpense ? <IoRemove /> : <IoAddSharp />
  const confirmationColor = isButtonForExpense ? "#FF453A" : "#45D483"
  const factor = isButtonForExpense ? 0 : 1

  const controls = useAnimation()

  useEffect(() => {
    if (open) controls.start("open")
  }, [open, controls])

  const handleClick = async () => {
    await controls.start({
      background: [null, confirmationColor],
    })

    setOpen(false)
  }

  return (
    <Button
      size="iconlg"
      variant={isButtonForExpense ? "destructive" : "default"}
      className="transaction__add-button relative origin-bottom"
      controls={controls}
      onClick={handleClick}
      initial="close"
      exit="close"
      variants={{
        open: { background: "#353336", ...variants?.open },
        close: { background: "var(--bg-tap-end, #353336)", ...variants?.close },
      }}
    >
      <motion.span
        className="relative opacity-35"
        animate="open"
        initial="close"
        exit="close"
        variants={{
          open: { opacity: 0, scale: 0, filter: "blur(8px)" },
          close: { opacity: 1, scale: 1, filter: "blur(0px)" },
        }}
      >
        <IoAddSharp />
      </motion.span>

      <motion.span
        className="absolute"
        animate="open"
        initial="close"
        exit="close"
        variants={{
          open: { opacity: 1, scale: 1, filter: "blur(0px)" },
          close: { opacity: 0, scale: 0, filter: "blur(8px)" },
        }}
      >
        {buttonIcon}
      </motion.span>
      <motion.span
        className="absolute left-0 top-1/2 -translate-x-[calc(100%+0.75rem)] -translate-y-1/2 text-base font-medium"
        animate="open"
        initial="close"
        exit="close"
        variants={{
          open: { opacity: 1, filter: "blur(0px)" },
          close: { opacity: 0, filter: "blur(8px)" },
        }}
      >
        {buttonLabel}
      </motion.span>
    </Button>
  )
}
