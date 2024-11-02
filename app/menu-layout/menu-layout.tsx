"use client";

import { Button } from "@/app/components/buttons/ButtonV2";
import {
  MaterialSymbolsMail,
  MaterialSymbolsRectangleRounded,
} from "@/app/components/icons/material-symbols";
import { cn } from "@/lib/utils";
import { RawLogo } from "./raw-logo";

function Navbar() {
  return (
    <nav
      className={cn(
        "container fixed inset-x-0 top-0 isolate z-20 p-0",
        "flex items-center justify-end gap-2 p-3 sm:p-5",
      )}
    >
      <StaticMarkup />

      <Button className="bg-background/0 [--bg-tap-end:#00000000]" size="icon">
        <MaterialSymbolsRectangleRounded />
      </Button>
    </nav>
  );
}

function Portal() {
  const isOpen = !true;

  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 isolate z-10 overflow-hidden bg-background/85 backdrop-blur-2xl"></div>
      )}
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

export { Navbar, Portal };
