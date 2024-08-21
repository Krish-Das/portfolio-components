"use client";

import { ButtonHTMLAttributes, useRef } from "react";
import { cn } from "@/lib/utils";
import { useButton } from "@react-aria/button";
import { FocusRing } from "@react-aria/focus";
import { MotionProps, motion, useAnimation } from "framer-motion";

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
    ref,
  );
  const controls = useAnimation();

  return (
    <FocusRing focusRingClass="outline-none ring ring-offset-2 ring-offset-background">
      {/* TODO: optimize this button prop types */}
      <motion.button
        style={{ WebkitTapHighlightColor: "transparent" }}
        className={cn(
          "inline-flex h-20 w-20 items-center justify-center gap-2 rounded-full bg-[#353336] text-xl text-foreground",
          "focus:outline-none",
          "touch-none select-none",
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
};

RacRadixButton.displayname = "button";
export { RacRadixButton };
