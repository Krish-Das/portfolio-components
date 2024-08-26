"use client";

import React, { ButtonHTMLAttributes, forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import { useButton, AriaButtonProps } from "@react-aria/button";
import { FocusRing } from "@react-aria/focus";
import { MotionProps, motion, useAnimation } from "framer-motion";

const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-1 rounded-full px-5 leading-none tracking-[0.01em] whitespace-nowrap",
    "disabled:pointer-events-none disabled:opacity-50", // Button Disabled
    "focus:outline-none focus-visible:outline-none",
    "touch-none select-none", // Disable select
    "h-12 min-w-12 text-base", // Base size
    "sm:h-9 sm:min-h-9 sm:text-sm", // tablet/desktop
  ],
  {
    variants: {
      variant: {
        default: "bg-[#353336] text-foreground",
        destructive: "bg-destructive text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

type ButtonProps = AriaButtonProps &
  VariantProps<typeof buttonVariants> & {
    className?: string;
    onClick?: () => void;
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, className, onClick, variant, ...props }, ref) => {
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
          className={cn(buttonVariants({ variant, className }))}
          ref={localRef}
        >
          {children}
        </motion.button>
      </FocusRing>
    );
  },
);

Button.displayName = "Button";
export { Button };
