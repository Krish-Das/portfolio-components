"use client";

import React, { forwardRef } from "react";

import { cn } from "@/lib/utils";
import {
  PressEvent as RacPressEvent,
  Button as RacButton,
  ButtonProps as RacButtonProps,
} from "react-aria-components";

type ButtonProps = Omit<RacButtonProps, "onPress"> &
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
export { Button, type ButtonProps };
