"use client"

import { DialogTrigger, Modal, ModalOverlay } from "react-aria-components"
import { IoAddSharp, IoRemoveSharp } from "react-icons/io5"

import { cn } from "@/lib/utils"
import { Button, buttonVariants } from "@/app/components/buttons/ButtonV2"

export default function TwitterFabAnimationV3() {
  const buttonStyles = buttonVariants({ size: "iconlg" })

  return (
    <>
      <DialogTrigger>
        <Button size="iconlg" autoFocus>
          <IoAddSharp />
        </Button>
        <ModalOverlay className="fixed inset-0 bg-red-300/10" isDismissable>
          <Modal className="flex w-fit flex-col-reverse gap-1">
            <button className={cn(buttonStyles)}>
              <IoAddSharp />
            </button>

            <button className={cn(buttonStyles)}>
              <IoRemoveSharp />
            </button>
          </Modal>
        </ModalOverlay>
      </DialogTrigger>
    </>
  )
}
