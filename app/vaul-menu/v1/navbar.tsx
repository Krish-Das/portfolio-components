import { cn } from "@/lib/utils";
import { Button } from "@/app/components/buttons/ButtonV2";
import { MaterialSymbolsMail } from "@/components/icons/material-symbols";
import { RawLogo } from "@/app/menu-layout/raw-logo";
import VaulSidebar from "./vaul-sidebar";

export default function Navbar() {
  return (
    <nav
      className={cn(
        "container fixed inset-x-0 top-0 isolate z-10 p-0",
        "flex items-center justify-end gap-2 p-3 sm:p-5",
      )}
    >
      <StaticMarkup />
      <VaulSidebar />
    </nav>
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
