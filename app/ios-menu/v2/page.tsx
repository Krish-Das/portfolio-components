import Navbar from "@/components/layout/navbar"
import { MenuLinks } from "@/lib/menu-links"
import { projects } from "@/lib/project-images"
import { cn } from "@/lib/utils"
import { IoChevronForwardSharp } from "react-icons/io5"
import ColorConverter from "./color-converter"
import Menu from "./menu"

export default function Page() {
  return (
    <>
      <div className="h-dvh w-full bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/source/e0d974193755513.65f2572fa0391.png')] bg-cover bg-center" />
      <Navbar>
        <Menu />
      </Navbar>

      <div className="grid h-dvh w-full place-items-center">
        <ColorConverter />

        <ul className="flex w-fit flex-col gap-3">
          {MenuLinks.map(({ label, icon }, idx) => (
            <li
              key={idx}
              className="flex items-center gap-2.5 text-foreground/85 [&>svg:first-of-type]:text-foreground/80"
            >
              {icon}
              {label}
            </li>
          ))}
          <li className="mt-7 flex flex-col gap-3">
            <p className="flex items-center gap-2.5 font-medium [&>svg:first-of-type]:text-foreground/40">
              <IoChevronForwardSharp />
              Case studies
            </p>

            <ul className="flex flex-col gap-2 pl-5">
              {projects.map(({ label }, idx) => (
                <li
                  key={idx}
                  className={cn(
                    "flex w-fit items-center justify-center rounded-full",
                    "bg-[#353336]",
                    "h-10 px-4 text-sm font-medium sm:h-8 sm:px-3 sm:text-xs"
                  )}
                >
                  {label}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}
