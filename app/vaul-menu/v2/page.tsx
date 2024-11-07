import { Button } from "@/app/components/buttons/ButtonV2";
import { MaterialSymbolsMail } from "@/app/components/icons/material-symbols";
import { RawLogo } from "@/app/menu-layout/raw-logo";
import { cn } from "@/lib/utils";
import VaulMenu from "./vaul-menu-v3";
import { Main } from "@/components/layout/mainwrapper";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <div className="h-dvh w-full bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/source/e0d974193755513.65f2572fa0391.png')] bg-cover bg-center" />
      <Main className="h-dvhs grid place-items-center p-0">
        <div className="relative grid h-full w-full place-items-center">
          <nav
            className={cn(
              "container fixed inset-x-0 top-0 isolate z-10 p-0",
              "flex items-center justify-end gap-2 p-3 sm:p-5",
            )}
          >
            <StaticMarkup />
            <VaulMenu />
          </nav>
          <div className="grids relative isolate hidden h-full w-full place-items-center md:aspect-square md:w-auto">
            <Image
              alt="One star image"
              src="/one-star.jpg"
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        </div>
      </Main>
    </>
  );
}

function StaticMarkup() {
  return (
    <>
      <div className="brand__logo absolute left-3 top-3 origin-top-left translate-x-0 translate-y-[300%] -rotate-90 sm:left-5 sm:top-5">
        <div className="grid h-6 w-16 place-items-center">
          <RawLogo className="h-full w-full" />
        </div>
      </div>

      <Button size="sm">
        <MaterialSymbolsMail className="text-foreground/70" />
        Cont.
      </Button>
    </>
  );
}
