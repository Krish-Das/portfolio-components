"use client"

import { useEffect, useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { AnimatePresence, motion, useAnimation, Variants } from "motion/react"
import { IoAddSharp, IoRemove } from "react-icons/io5"
import useMeasure from "react-use-measure"
import { Drawer } from "vaul"

import { cn } from "@/lib/utils"
import { Button } from "@/app/components/buttons/ButtonV2"

export default function TwitterFabAnimationV2() {
  const [triggerRef, bounds] = useMeasure()
  const [open, setOpen] = useState(false)
  const [isDrawerOpen, setDrawerOpen] = useState(false)

  function afterClick() {
    setOpen(false)
    setDrawerOpen(true)
  }

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <Button
            size="iconlg"
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
                  afterClick={afterClick}
                />
                <TransactionAddButton
                  type="income"
                  open={open}
                  afterClick={afterClick}
                />

                <Dialog.Title className="sr-only" />
                <Dialog.Description className="sr-only" />
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>

      <Drawer.Root open={isDrawerOpen} onOpenChange={setDrawerOpen}>
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="fixed bottom-0 left-0 right-0 h-fit bg-gray-100 outline-none">
            <div className="h-dvh bg-white p-4">
              <Drawer.Title />
              <Drawer.Description />
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </>
  )
}

const TransactionAddButton = ({
  type,
  open,
  afterClick,
}: {
  type: "expense" | "income"
  open: boolean
  afterClick: () => void
}) => {
  const isButtonForExpense = type === "expense"
  const buttonLabel = isButtonForExpense ? "Expense" : "Income"
  const buttonIcon = isButtonForExpense ? <IoRemove /> : <IoAddSharp />
  const confirmationColor = isButtonForExpense ? "#FF453A" : "#45D483"
  const buttonId = isButtonForExpense
    ? "transaction__add-expense"
    : "transaction__add-income"

  const controls = useAnimation()

  useEffect(() => {
    if (open) controls.start("open")
  }, [open, controls])

  const handleClick = async () => {
    await Promise.all([
      // controls.set("open"),
      controls.start("open", { duration: 0.05 }),
      controls.start({
        background: [null, confirmationColor, "var(--bg-tap-end)"],
        transition: { duration: 0.3 },
      }),
    ])

    afterClick()
  }

  const variants: Variants | undefined = isButtonForExpense
    ? undefined
    : {
        open: {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          y: 0,
          pointerEvents: "auto",
          touchAction: "auto",
        },
        close: {
          opacity: 0,
          scale: 0.6,
          filter: "blur(5px)",
          y: 10,
          pointerEvents: "none",
          touchAction: "none",
        },
      }

  const iconVariants = {
    hidden: { opacity: 0, scale: 0, filter: "blur(8px)", rotate: 45 },
    visible: { opacity: 1, scale: 1, filter: "blur(0px)", rotate: 0 },
  } satisfies Variants

  return (
    <>
      <Button
        id={buttonId}
        size="iconlg"
        className="transaction__add-button relative origin-bottom"
        controls={controls}
        initial="close"
        exit="close"
        variants={variants}
        onClick={handleClick}
      >
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
          {buttonIcon}
        </motion.span>

        <motion.label
          htmlFor={buttonId}
          className="absolute left-0 top-1/2 origin-right text-base font-medium"
          style={{
            x: "calc((100% + 0.75rem) * -1)",
            y: "-50%",
          }}
          animate="open"
          initial="close"
          exit="close"
          variants={{
            open: {
              opacity: 1,
              x: "calc((100% + 0.75rem) * -1)",
              scale: 1,
              filter: "blur(0px)",
              transition: { delay: 0.1 },
            },
            close: {
              opacity: 0,
              x: "calc((100% + 0.5rem) * -1)",
              scale: 0.3,
              filter: "blur(5px)",
            },
          }}
          onClick={handleClick}
        >
          {buttonLabel}
        </motion.label>

        {isButtonForExpense && (
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
        )}
      </Button>
    </>
  )
}
