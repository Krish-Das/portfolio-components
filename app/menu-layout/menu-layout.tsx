"use client";

import { Button } from "@/app/components/buttons/ButtonV2";
import {
  MaterialSymbolsCasesOutline,
  MaterialSymbolsMail,
  MaterialSymbolsRectangleRounded,
} from "@/app/components/icons/material-symbols";
import { cn } from "@/lib/utils";
import { RawLogo } from "./raw-logo";
import { MenuLinks } from "@/lib/menu-links";
import { projects } from "@/lib/project-images";

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
  const isOpen = true;

  return (
    <>
      {isOpen && (
        <div className="m__overlay fixed inset-0 isolate z-10 overflow-hidden bg-background/85 backdrop-blur-2xl">
          <div className="m__body container grid h-full grid-cols-[2fr,1fr] p-0">
            <div className="m__left flex h-full items-center justify-end max-sm:hidden">
              <MThumbnail />
            </div>
            <div className="m__right h-full py-[5rem] pl-11">
              <MMenu />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function MThumbnail() {
  return (
    <div className="h-[calc(100%-5rem*2)] w-[26rem] rounded-xl bg-secondary" />
  );
}
function MMenu() {
  return (
    <ul className="flex flex-col gap-2 md:gap-1">
      {MenuLinks.map((link, idx) => (
        <li key={idx} className="">
          {/* TODO: Use variant ghost when added */}
          <Button className="bg-[hsl(0,0%,5%)] [--bg-tap-end:hsl(0,0%,5%)] rac-hover:[--bg-tap-end:hsl(0,0%,8%)] md:bg-[hsl(0,0%,2%)] md:[--bg-tap-end:hsl(0,0%,2%)] [&>svg:first-of-type]:text-foreground/85">
            {link.icon}
            {link.label}
          </Button>
        </li>
      ))}
      <li className="mt-10 space-y-3 px-4">
        <div className="flex items-center gap-2 py-1 font-bold tracking-wide text-muted-foreground sm:text-sm">
          <span className="text-lg">
            <MaterialSymbolsCasesOutline />
          </span>
          Case studies
        </div>
        <ProjectSwitcher />
      </li>
    </ul>
  );
}
function ProjectSwitcher() {
  const isSelected = 0;

  return (
    <ul className="space-y-2 pl-6">
      {projects.map(({ id, label, completed }, idx) => (
        <li key={id}>
          <Button
            size="sm"
            className={cn(
              "antialiased",
              idx === isSelected &&
                "bg-[hsl(210,100%,52%)] [--bg-tap-end:hsl(210,100%,52%)] [--bg-tap-start:hsl(211,100%,63%)]",
              !completed
                ? "bg-[hsl(0,0%,4%)] text-muted-foreground [--bg-tap-end:hsl(0,0%,4%)]"
                : "border border-white/5 antialiased",
            )}
          >
            {label}
          </Button>
        </li>
      ))}
    </ul>
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
