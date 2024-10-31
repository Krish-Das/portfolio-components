"use client";

import { MotionModal, MotionModalOverlay } from "../MotionComponents";
import { cn, debounce } from "@/lib/utils";
import { MotionProps, Transition } from "framer-motion";
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Button, ButtonProps } from "@/app/components/buttons/ButtonV2";
import {
  // Button,
  ButtonProps as RacButtonProps,
  DialogTrigger,
  DialogTriggerProps,
  ModalOverlayProps,
} from "react-aria-components";

type AnimationState = "unmounted" | "hidden" | "visible";
type MenuContextType = {
  animation: AnimationState;
  setAnimation: React.Dispatch<React.SetStateAction<AnimationState>>;
  triggerRef: React.RefObject<HTMLButtonElement>;
  isMenuOpen: boolean;
  triggerBounds: DOMRect | undefined;
  // isAnimating //TODO: To be add later
  // eslint-disable-next-line no-unused-vars
  handleOpenChange: (isOpen: boolean) => void;
  // eslint-disable-next-line no-unused-vars
  handleAnimationComplete: (animation: AnimationState) => void;
};

const MenuContext = createContext<MenuContextType | null>(null);
const MenuProvider = ({ children }: { children: React.ReactNode }) => {
  const [animation, setAnimation] = useState<AnimationState>("unmounted");
  const triggerRef = useRef<HTMLButtonElement>(null);
  const isMenuOpen = animation === "visible";

  const [bounds, setBounds] = useState<DOMRect>();

  const handleOpenChange = (isOpen: boolean) => {
    setAnimation(isOpen ? "visible" : "hidden");
  };

  const handleAnimationComplete = (animation: AnimationState) => {
    setAnimation((currentAnimation) =>
      animation === "hidden" && currentAnimation === "hidden"
        ? "unmounted"
        : currentAnimation,
    );
  };

  useEffect(() => {
    const element = triggerRef.current;
    if (!element) return;

    const updateBound = () => {
      const rect = element.getBoundingClientRect();
      setBounds(rect);
    };

    updateBound();
    const debouncedUpdate = debounce(updateBound, 100);
    window.addEventListener("resize", debouncedUpdate);
    return () => {
      window.removeEventListener("resize", debouncedUpdate);
      debouncedUpdate.cancel();
    };
  }, [triggerRef]);

  return (
    <MenuContext.Provider
      value={{
        animation,
        setAnimation,
        isMenuOpen,
        handleOpenChange,
        handleAnimationComplete,
        triggerRef,
        triggerBounds: bounds,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
};

// FIX: MANAGE
const useMenu = () => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useMenu must be used within a MenuContext.Provider");
  }
  return context;
};

const transition: Transition = {
  type: "spring",
  bounce: 0,
  duration: 0.75,
};

const Menu = ({ ...props }: DialogTriggerProps) => {
  const { handleOpenChange } = useMenu();

  return <DialogTrigger {...props} onOpenChange={handleOpenChange} />;
};

const MenuTrigger = ({ className, ...props }: RacButtonProps) => {
  const { triggerRef } = useMenu();
  return (
    <Button
      size="icon"
      className={cn("menu__trigger", className)}
      ref={triggerRef}
      {...(props as ButtonProps)}
    />
  );
};

const MenuBody = ({ className, ...props }: ModalOverlayProps & MotionProps) => {
  const {
    animation,
    handleAnimationComplete,
    triggerBounds: bounds,
  } = useMenu();

  return (
    <>
      {bounds && (
        <MotionModalOverlay
          className="menu__overlay fixed isolate overflow-hidden bg-background/85 backdrop-blur-2xl"
          isExiting={animation === "hidden"}
          onAnimationComplete={(animation) => {
            handleAnimationComplete(animation as AnimationState);
          }}
          style={{
            top: bounds.top,
            left: bounds.left,
            bottom: window.innerHeight - bounds.bottom,
            right: window.innerWidth - bounds.right,
          }}
          variants={{
            hidden: {
              borderRadius: "30px",
              top: bounds.top,
              left: bounds.left,
              bottom: window.innerHeight - bounds.bottom,
              right: window.innerWidth - bounds.right,
            },
            visible: {
              borderRadius: "0px",
              top: 0,
              left: 0,
              bottom: 0,
              right: 0,
            },
          }}
          initial="hidden"
          animate={animation}
          transition={{ ...transition }}
        >
          <MotionModal
            className={cn(
              "menu__body",
              "container h-full w-full p-0",
              "relative overflow-hidden",
              className,
            )}
            {...props}
          />
        </MotionModalOverlay>
      )}
    </>
  );
};

export {
  Menu,
  MenuTrigger,
  MenuBody,
  MenuProvider,
  useMenu,
  type AnimationState,
  type MenuContextType,
  transition as MenuTransition,
};
