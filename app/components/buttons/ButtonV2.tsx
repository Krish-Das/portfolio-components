"use client";

import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";
import {
  PressEvent as RacPressEvent,
  Button as RacButton,
  ButtonProps as RacButtonProps,
} from "react-aria-components";
import { motion, MotionProps } from "framer-motion";

// TODO: Rename
type NewButtonProps = Omit<RacButtonProps, "onPress"> &
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

// TODO: Rename
const FButton = forwardRef<HTMLButtonElement, RacButtonProps>((props, ref) => (
  <RacButton {...props} ref={ref} />
));
FButton.displayName = "FButton";
const MotionButton = motion.create(FButton);

// TODO: Rename
const NewButton = forwardRef<HTMLButtonElement, NewButtonProps>(
  ({ className, onPress, onClick, ...props }, ref) => {
    function handleClick(e: RacPressEvent) {
      if (onClick) onClick(e);
      if (onPress) onPress(e);
    }
    return (
      <MotionButton
        className={cn("p-2", className)}
        onPress={handleClick}
        {...props}
        ref={ref}
      />
    );
  },
);
NewButton.displayName = "NewButton";

/*
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, onPress, onClick, ...props }, ref) => {
    function handleClick(e: RacPressEvent) {
      if (onClick) onClick(e);
      if (onPress) onPress(e);
    }

    return (
      <RacButton
        className={cn("p-2", className)}
        ref={ref}
        onPress={handleClick}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";
*/

// TODO: Export the prop
export { NewButton as Button };
