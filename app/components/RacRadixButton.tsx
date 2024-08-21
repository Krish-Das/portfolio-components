"use client";

import { ButtonHTMLAttributes, forwardRef, useRef } from "react";
import { cn } from "@/lib/utils";
import { useButton } from "@react-aria/button";
import { FocusRing } from "@react-aria/focus";
import { MotionProps, motion, useAnimation } from "framer-motion";

const RacRadixButton = forwardRef<
  HTMLButtonElement,
  {
    children: React.ReactNode;
    className?: string;
    onClick?: () => void;
  }
>(({ children, className, onClick }, ref) => {
  const localRef = useRef<HTMLButtonElement | null>(null);
  const { buttonProps } = useButton(
    {
      onPressStart: () => {
        controls.stop();
        controls.set({ background: "#757376" });
      },
      onPressEnd: () => {
        controls.start({ background: ["#757376", "#353336"] });
      },
      onPress: onClick,
    },
    localRef,
  );
  const controls = useAnimation();

  return (
    <FocusRing focusRingClass="outline-none ring ring-offset-2 ring-offset-background">
      {/* TODO: optimize this button prop types */}
      <motion.button
        style={{ WebkitTapHighlightColor: "transparent" }}
        className={cn(
          "inline-flex items-center justify-center gap-1 rounded-full bg-[#353336] px-5 leading-none tracking-[0.01em] text-foreground",
          "focus:outline-none",
          "touch-none select-none", // Disable select
          "h-12 min-w-12 text-base", // Base size
          "sm:h-9 sm:min-h-9 sm:text-sm", // tablet/desktop
          className,
        )}
        animate={controls}
        onClick={onClick}
        {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement> &
          MotionProps)}
        ref={ref}
      >
        {children}
      </motion.button>
    </FocusRing>
  );
});

RacRadixButton.displayName = "button";
export { RacRadixButton };
