import { IoAddSharp, IoEllipse, IoRemove } from "react-icons/io5"

import { Button } from "@/app/components/buttons/ButtonV2"

export default function FloatingNav() {
  return (
    <div className="fixed bottom-0 left-1/2 inline-flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full">
      <div className="inline-flex h-14 min-w-14 items-center gap-3 rounded-full border border-white/5 bg-[#424245]/70 px-5 text-xs backdrop-blur-[8px]">
        <IoEllipse />
        <IoEllipse />
        <IoRemove className="text-3xl" />
        <IoEllipse />
      </div>
      <Button size="iconlg" variant="destructive" autoFocus>
        <IoAddSharp />
      </Button>
    </div>
  )
}
