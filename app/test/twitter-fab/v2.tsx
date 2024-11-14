"use client"

import { IoAddSharp } from "react-icons/io5"

import { Button } from "@/app/components/buttons/ButtonV2"

export default function TwitterFabAnimationV2() {
  return (
    <>
      <Button
        size="iconlg"
        variant="destructive"
        className="fixed bottom-24 right-4 rounded-lg md:right-1/2 md:translate-x-1/2"
        autoFocus
      >
        <IoAddSharp />
      </Button>
      {/* <div className="fixed bottom-24 right-4 size-12 rounded-lg bg-red-400 md:right-1/2 md:translate-x-1/2" /> */}
    </>
  )
}
