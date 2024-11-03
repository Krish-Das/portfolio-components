"use client";

import { Button } from "@/app/components/buttons/ButtonV2";
import {
  MaterialSymbolsArrowOutward,
  MaterialSymbolsCasesOutline,
  MaterialSymbolsInfoOutline,
  MaterialSymbolsMail,
  MaterialSymbolsRectangleRounded,
} from "@/app/components/icons/material-symbols";
import { cn } from "@/lib/utils";
import { RawLogo } from "./raw-logo";
import { MenuLinks } from "@/lib/menu-links";
import { projects } from "@/lib/project-images";
import MenuTest from "./test-2";

function Navbar() {
  return (
    <nav
      className={cn(
        "container fixed inset-x-0 top-0 isolate z-20 p-0",
        "flex items-center justify-end gap-2 p-3 sm:p-5",
      )}
    >
      <StaticMarkup />

      <Button
        className="hidden bg-background/0 [--bg-tap-end:#00000000]"
        size="icon"
      >
        <MaterialSymbolsRectangleRounded />
      </Button>
      <MenuTest />
    </nav>
  );
}

function Portal() {
  const isOpen = !true;

  return (
    <>
      {isOpen && (
        <div className="m__overlay fixed inset-0 isolate z-10 overflow-hidden bg-background/85 backdrop-blur-2xl">
          <div className="m__body container grid h-full grid-cols-[2fr,1fr] p-0 max-md:grid-cols-1">
            <div className="m__left flex h-full items-center justify-end max-md:hidden">
              <MThumbnail />
            </div>
            <MenuRight />
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
function MenuRight() {
  return (
    // "m__right h-full py-[5rem] pl-11"
    <ul className="m__right flex h-full flex-col gap-2 py-[5rem] pl-11 md:gap-1">
      {MenuLinks.map((link, idx) => (
        <li key={idx} className="">
          {/* TODO: Use variant ghost when added */}
          <Button className="bg-[hsl(0,0%,5%)] [--bg-tap-end:hsl(0,0%,5%)] rac-hover:[--bg-tap-end:hsl(0,0%,8%)] md:bg-[hsl(0,0%,2%)] md:[--bg-tap-end:hsl(0,0%,2%)] [&>svg:first-of-type]:text-foreground/85">
            {link.icon}
            {link.label}
          </Button>
        </li>
      ))}
      <li className="mt-10 flex h-full flex-col gap-3 px-4">
        <p className="flex items-center gap-2 py-1 font-bold tracking-wide text-muted-foreground sm:text-sm">
          <span className="text-lg">
            <MaterialSymbolsCasesOutline />
          </span>
          Case studies
        </p>
        <ProjectSwitcher />
        <div className="flex-1" />
        <ProjectInfo />
      </li>
    </ul>
  );
}
function ProjectSwitcher() {
  const isSelected = 0;

  return (
    <ul className="space-y-2 pl-6">
      {projects.map(({ id, label, completed }, idx) => (
        <li key={id} className="flex items-center gap-1">
          <Button
            size="sm"
            className={cn(
              "rounded-lg antialiased",
              idx === isSelected &&
                "bg-[hsl(210,100%,52%)] [--bg-tap-end:hsl(210,100%,52%)] [--bg-tap-start:hsl(211,100%,63%)]",
              !completed
                ? "bg-[hsl(0,0%,4%)] text-muted-foreground [--bg-tap-end:hsl(0,0%,4%)]"
                : "border border-white/5",
            )}
          >
            {label}
          </Button>
          {idx === isSelected && (
            <Button
              size="icon"
              className={cn(
                "h-10 w-10 border border-muted/40 text-2xl sm:h-8 sm:w-8 sm:text-lg",
                "bg-[hsla(210,100%,52%,0.2)] text-[hsl(210,95%,48%)] [--bg-tap-end:hsla(210,100%,52%,0.2)] [--bg-tap-start:hsla(210,100%,52%,0.5)]",
                "md:hidden",
              )}
            >
              <MaterialSymbolsArrowOutward />
            </Button>
          )}
        </li>
      ))}
    </ul>
  );
}
function ProjectInfo() {
  return (
    // "border border-zinc-600/10 bg-secondary/20 rounded-xl p-2 pr-6 backdrop-blur-md space-y-2 font-medium"
    <article className="space-y-2 pl-5 font-medium max-sm:hidden">
      <h3 className="inline-flex items-center gap-1 rounded-full border border-zinc-600/10 bg-secondary/20 px-2 py-1 text-[0.7rem] leading-none text-muted-foreground">
        <span className="text-xs">
          <MaterialSymbolsInfoOutline />
        </span>
        About this project
      </h3>
      <p className="max-w-[37ch] pl-1 text-xs leading-[1.7] tracking-wide text-foreground/80">
        We&apos;ve helped the most inovative startups desgin, build, and ship
        products.
      </p>
    </article>
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
