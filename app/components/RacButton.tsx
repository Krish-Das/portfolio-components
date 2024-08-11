"use client";

import { cn } from "@/lib/utils";
import { Button } from "react-aria-components";
import { IoPlay } from "react-icons/io5";

const RacButton = () => {
  return (
    <>
      <Button
        className={cn(
          "border-none outline-none",
          "inline-flex h-9 items-center justify-center gap-1 rounded-full bg-foreground px-5",
          "text-sm leading-none tracking-[0.02em] text-background",
          "rac-focus-visible:ring rac-hover:bg-cyan-700 ring-offset-2 ring-offset-background ",
        )}
      >
        <IoPlay />
        Play
      </Button>
    </>
  );
};

RacButton.displayName = "Button";
export { RacButton as Button };
