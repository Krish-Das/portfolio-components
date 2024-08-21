"use client";

import { cn } from "@/lib/utils";
import { useButton } from "@react-aria/button";
import { FocusRing } from "@react-aria/focus";
import { useRef } from "react";

const RacRadixButton = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { buttonProps, isPressed } = useButton({ onPress: onClick }, ref);

  //

  return (
    <FocusRing focusRingClass="outline-none ring ring-offset-2 ring-offset-background">
      <button
        className={cn(
          "bg-[#424245]s inline-flex h-20 w-20 items-center justify-center gap-2 rounded-full bg-[#353336] text-xl text-foreground",
          "focus:outline-none",
          isPressed && "bg-[#757376]",
          "touch-none select-none",
          className,
        )}
        onClick={onClick}
        {...buttonProps}
        ref={ref}
      >
        {children}
      </button>
    </FocusRing>
  );
};

RacRadixButton.displayname = "button";
export { RacRadixButton };
