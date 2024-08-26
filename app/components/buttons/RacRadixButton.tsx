"use client";

import React, { ButtonHTMLAttributes, forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { FocusRing } from "@react-aria/focus";
import { useButton, AriaButtonProps } from "@react-aria/button";
import { MotionProps, motion, useAnimation } from "framer-motion";

type ButtonProps = AriaButtonProps & {
  className?: string;
  onClick?: () => void;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, onClick, ...props }, ref) => {
    const domRef = useRef<HTMLButtonElement>(null);
    const localRef = ref || domRef;
    const controls = useAnimation();

    const { buttonProps } = useButton(
      {
        onPressStart: () => {
          controls.stop();
          controls.set({ background: "#757376" });
        },
        onPressEnd: () => {
          controls.start({ background: "#353336" });
        },
        onPress: onClick,
        ...props,
      },
      localRef as React.RefObject<HTMLButtonElement>,
    );

    return (
      <FocusRing focusRingClass="outline-none ring ring-offset-2 ring-offset-background">
        <motion.button
          {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement> &
            MotionProps)}
          animate={controls}
          className={cn(
            "inline-flex items-center justify-center gap-1 rounded-full bg-[#353336] px-5 leading-none tracking-[0.01em] text-foreground",
            "focus:outline-none",
            "touch-none select-none", // Disable select
            "h-12 min-w-12 text-base", // Base size
            "sm:h-9 sm:min-h-9 sm:text-sm", // tablet/desktop
            className,
          )}
          ref={localRef}
        >
          {children}
        </motion.button>
      </FocusRing>
    );
  },
);

Button.displayName = "Button";
export { Button as RacRadixButton };
