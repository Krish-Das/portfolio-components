"use client"

import { IoAddSharp } from "react-icons/io5"

import { Button } from "@/app/components/buttons/ButtonV2"

export default function TwitterFabAnimationV2() {
  return (
    <>
      <Button
        size="iconlg"
        variant="destructive"
        autoFocus
      >
        <IoAddSharp />
      </Button>
    </>
  )
}
