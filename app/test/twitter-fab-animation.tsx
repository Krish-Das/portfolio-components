import { IoAddSharp } from "react-icons/io5"

import { Button } from "@/app/components/buttons/ButtonV2"

export default function TwitterFabAnimation() {
  return (
    <section className="grid h-full w-full place-items-center">
      <Button size="iconlg" variant="destructive">
        <IoAddSharp />
      </Button>
    </section>
  )
}
