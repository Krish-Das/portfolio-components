"use client"

import { forwardRef, memo, useEffect } from "react"
import { cva, VariantProps } from "class-variance-authority"
import {
  AnimationControls,
  motion,
  MotionProps,
  useAnimationControls,
} from "motion/react"
import {
  Button as RacButton,
  ButtonProps as RacButtonProps,
  PressEvent as RacPressEvent,
} from "react-aria-components"

import { cn } from "@/lib/utils"

type ButtonProps = VariantProps<typeof buttonVariants> &
  Omit<RacButtonProps, "onPress"> &
  MotionProps & {
    // eslint-disable-next-line no-unused-vars
    onClick?: (e: RacPressEvent) => void
    // eslint-disable-next-line no-unused-vars
    onPress?: (e: RacPressEvent) => void
    controls?: AnimationControls
  }

const buttonVariants = cva(
  [
    "inline-flex gap-2 items-center justify-center rounded-full px-5 leading-none tracking-[0.01em] whitespace-nowrap",
    "focus:outline-none focus-visible:outline-none",
    "disabled:pointer-events-none disabled:opacity-50", // Disabled
    "touch-none cursor-default select-none", // cursor and select
  ],
  {
    variants: {
      variant: {
        default: [
          "text-foreground",
          "[--bg-tap-start:#757376] [--bg-tap-end:#353336] bg-[#353336]",
        ],
        destructive:
          "bg-[#FF453A] text-foreground [--bg-tap-start:#EB948F] [--bg-tap-end:#FF453A]",
      },
      size: {
        default: [
          "h-12 sm:h-9 text-base sm:text-sm",
          "gap-[0.4rem] font-medium sm:px-4 [&>svg:first-of-type]:text-xl sm:[&>svg:first-of-type]:text-base",
        ],
        sm: [
          "h-10 sm:h-8 px-4 text-sm",
          "gap-[0.35rem] font-medium sm:px-3 sm:text-xs [&>svg:first-of-type]:text-base sm:[&>svg:first-of-type]:text-sm",
        ],
        lg: "h-14 sm:h-11 text-base sm:text-sm",
        icon: "h-11 w-11 p-0 sm:h-9 sm:w-9 text-2xl sm:text-lg",
        iconlg: "h-14 w-14 p-0 text-3xl sm:h-11 sm:w-11 sm:text-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

const Button = memo(
  forwardRef<HTMLButtonElement, ButtonProps>(
    (
      {
        className,
        onPress,
        onClick,
        onPressStart,
        onPressEnd,
        variant,
        size,
        controls,
        animate,
        ...props
      },
      ref
    ) => {
      const internalControls = useAnimationControls()
      const activeControls = controls || internalControls

      useEffect(() => {
        activeControls.set({ background: "var(--bg-tap-end, #000)", scale: 1 })
      }, [activeControls])

      function handleClick(e: RacPressEvent) {
        if (onClick) onClick(e)
        if (onPress) onPress(e)
      }
      function handlePressStart(e: RacPressEvent) {
        activeControls.stop()
        activeControls.set({
          background: "var(--bg-tap-start, #FFF)",
          scale: size === "icon" ? 0.96 : 1,
        })
        if (onPressStart) onPressStart(e)
      }
      function handlePressEnd(e: RacPressEvent) {
        activeControls.start({
          background: "var(--bg-tap-end, #000)",
          scale: 1,
        })
        if (onPressEnd) onPressEnd(e)
      }

      return (
        <MotionButton
          className={cn(buttonVariants({ variant, size, className }))}
          onPress={handleClick}
          onPressStart={handlePressStart}
          onPressEnd={handlePressEnd}
          animate={animate || activeControls}
          {...props}
          ref={ref}
        />
      )
    }
  )
)
Button.displayName = "Button"

/**
 *
 * Motion and Forwarded buttons
 *
 **/
const ForwardedButton = forwardRef<HTMLButtonElement, RacButtonProps>(
  (props, ref) => <RacButton {...props} ref={ref} />
)
ForwardedButton.displayName = "ForwardedButton"
const MotionButton = motion.create(ForwardedButton)

export {
  Button,
  ForwardedButton,
  MotionButton,
  buttonVariants,
  type ButtonProps,
}
