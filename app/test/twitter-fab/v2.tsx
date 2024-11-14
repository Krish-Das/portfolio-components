"use client"

import { useState } from "react"
import * as Dialog from "@radix-ui/react-dialog"
import { IoAddSharp, IoRemove } from "react-icons/io5"
import useMeasure from "react-use-measure"

import { cn } from "@/lib/utils"
import { Button } from "@/app/components/buttons/ButtonV2"

export default function TwitterFabAnimationV2() {
  const [ref, bounds] = useMeasure()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Trigger asChild>
          <Button
            size="iconlg"
            variant="destructive"
            className={cn(open && "opacity-0")}
            ref={ref}
            autoFocus
          >
            <IoAddSharp />
          </Button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm" />
          <Dialog.Content
            className="fixed flex flex-col-reverse gap-2"
            style={{
              bottom: window.innerHeight - bounds.bottom,
              left: bounds.left,
            }}
          >
            <TransactionAddButton type="expense" />
            <TransactionAddButton type="income" />

            <Dialog.Title className="sr-only" />
            <Dialog.Description className="sr-only" />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  )
}

const TransactionAddButton = ({ type }: { type: "expense" | "income" }) => {
  const buttonLabel = type === "expense" ? "Expense" : "Income"
  const buttonIcon = type === "expense" ? <IoRemove /> : <IoAddSharp />

  return (
    <Button size="iconlg" className="relative">
      {buttonIcon}
      <span className="absolute left-0 top-1/2 -translate-x-[calc(100%+0.75rem)] -translate-y-1/2 text-base font-medium">
        {buttonLabel}
      </span>
    </Button>
  )
}
