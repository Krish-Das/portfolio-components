"use client";

import React, { ButtonHTMLAttributes, forwardRef, useRef } from "react";
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
      <motion.button
        {...(buttonProps as ButtonHTMLAttributes<HTMLButtonElement> &
          MotionProps)}
        animate={controls}
        className={className}
        ref={localRef}
      >
        {children}
      </motion.button>
    );
  },
);

Button.displayName = "Button";
export { Button };
