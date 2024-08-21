"use client";

import { cn } from "@/lib/utils";
import { useButton } from "@react-aria/button";
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

  return (
    <button
      className={cn(
        "bg-[#424245]s inline-flex h-20 w-20 items-center justify-center gap-2 rounded-full bg-[#353336] text-xl text-foreground",
        "focus:outline-none focus-visible:ring focus-visible:ring-offset-2 focus-visible:ring-offset-background ",
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
  );
};

RacRadixButton.displayname = "button";
export { RacRadixButton };
