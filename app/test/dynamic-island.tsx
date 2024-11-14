"use client"

import { IoBatteryHalf } from "react-icons/io5"

export default function DynamicIsland() {
  return (
    <div className="container fixed inset-x-0 grid max-w-screen-sm place-items-center p-3">
      <div className="h-9s flex w-36 items-center justify-between rounded-full bg-black px-3 py-3 text-sm font-semibold text-white md:h-7 md:w-24 [&>svg:first-of-type]:text-2xl">
        <IoBatteryHalf />
        Ring
      </div>
    </div>
  )
}

// <span className="bg-[#92ea71] [&>svg:first-of-type]:text-xl px-3 py-px rounded-full">
