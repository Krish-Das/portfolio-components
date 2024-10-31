"use client";

import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";
import {
  PressEvent as RacPressEvent,
  Button as RacButton,
  ButtonProps as RacButtonProps,
} from "react-aria-components";
import { motion, MotionProps } from "framer-motion";
import { cva, VariantProps } from "class-variance-authority";

type ButtonProps = VariantProps<typeof buttonVariants> &
  Omit<RacButtonProps, "onPress"> &
  MotionProps &
  (
    | (RacButtonProps & {
        // eslint-disable-next-line no-unused-vars
        onClick: (e: RacPressEvent) => void;
        onPress?: never;
      })
    | (RacButtonProps & {
        // eslint-disable-next-line no-unused-vars
        onPress: (e: RacPressEvent) => void;
        onClick?: never;
      })
  );

const buttonVariants = cva(
  [
    "inline-flex gap-2 items-center justify-center rounded-full px-5 leading-none tracking-[0.01em] whitespace-nowrap",
    "focus:outline-none focus-visible:outline-none",
    "disabled:pointer-events-none disabled:opacity-50", // Button Disabled
    "touch-none cursor-default select-none", // Disable select
    "[--bg-while-tap:#757376]",
  ],
  {
    variants: {
      variant: {
        default: "bg-[#353336] text-foreground",
        destructive: "bg-[#FF453A] text-foreground",
      },
      size: {
        default: "h-12 sm:h-9 text-base sm:text-sm",
        sm: "gap-1 h-10 sm:h-8 px-4 text-sm",
        lg: "h-14 sm:h-11 text-base sm:text-sm",
        icon: "h-14 w-14 p-0 sm:h-9 sm:w-9 text-xl sm:text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onPress, onClick, variant, size, ...props }, ref) => {
    function handleClick(e: RacPressEvent) {
      if (onClick) onClick(e);
      if (onPress) onPress(e);
    }

    return (
      <MotionButton
        className={cn(buttonVariants({ variant, size, className }))}
        whileTap={{ background: "var(--bg-while-tap)" }}
        onPress={handleClick}
        {...props}
        ref={ref}
      />
    );
  },
);
Button.displayName = "Button";

/**
 *
 * Motion and Forwarded buttons
 *
 **/
const ForwardedButton = forwardRef<HTMLButtonElement, RacButtonProps>(
  (props, ref) => <RacButton {...props} ref={ref} />,
);
ForwardedButton.displayName = "ForwardedButton";
const MotionButton = motion.create(ForwardedButton);

export { Button, ForwardedButton, type ButtonProps };
