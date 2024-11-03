"use client";
import { Button } from "@/app/components/buttons/ButtonV2";
// import { Button } from "react-aria-components";
import { MaterialSymbolsRectangleRounded } from "@/app/components/icons/material-symbols";
import { cn } from "@/lib/utils";
import {
  AnimationSequence,
  stagger,
  Transition,
  useAnimate,
} from "framer-motion";
import { useEffect, useMemo, useState } from "react";

function useMenuAnimation(isOpen: boolean) {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const parentState = {
      open: { height: "100%", width: "100%" },
      close: { height: "1.25rem", width: "1.25rem" },
    };
    const childState = {
      open: { opacity: 1, scale: 1, filter: "blur(0px)" },
      close: { opacity: 0, scale: 0.3, filter: "blur(20px)" },
    };

    const animateTest = () => {
      const sequence = [
        [
          "#some__id",
          isOpen ? parentState.open : parentState.close,
          { duration: 2 },
        ],
        [
          ".some__paragraph",
          isOpen ? childState.open : childState.close,
          { at: isOpen ? "-1" : "<", delay: stagger(0.1) },
        ],
      ];

      animate(sequence as AnimationSequence);
    };

    animateTest();
  }, [isOpen, animate]);

  return scope;
}

export default function TestComponent() {
  const [isOpen, setOpen] = useState(false);
  const [scope, animate] = useAnimate();
  // const scope = useMenuAnimation(isOpen);

  const parentState = {
    open: { height: "100%", width: "100%" },
    close: { height: "1.25rem", width: "1.25rem" },
  };
  const childState = {
    open: { opacity: 1, scale: 1, filter: "blur(0px)" },
    close: { opacity: 0, scale: 0.3, filter: "blur(20px)" },
  };

  const animateTest = () => {
    const sequence = [
      ["#some__id", isOpen ? parentState.open : parentState.close],
      [
        ".some__paragraph",
        isOpen ? childState.open : childState.close,
        { at: isOpen ? "-0.4" : "<", delay: stagger(0.1) },
      ],
    ];

    animate(sequence as AnimationSequence);
  };

  // NOTE: --- new from here ---

  const transition: Transition = {
    type: "spring",
    bounce: 0,
    duration: 0.75,
  };
  const bodyState = {
    close: {
      height: "2.25rem",
      width: "2.25rem",
      borderRadius: "30px",
    },
    open: {
      height: "100%",
      width: "100%",
      borderRadius: "0px",
    },
  };
  const thumbnailState = {
    close: {
      opacity: 0,
      filter: "blur(20px)",
      height: "calc(100% - 5rem * 5)",
      width: "2rem",
    },
    open: {
      opacity: 1,
      filter: "blur(0px)",
      height: "calc(100% - 5rem * 2)",
      width: "26rem",
    },
  };

  const handleOpenMenu = async () => {
    // animateMenu();
    setOpen(!isOpen);
  };

  useEffect(() => {
    const animateMenu = async () => {
      animate("#m__body", isOpen ? bodyState.open : bodyState.close, {
        ...transition,
      } as any);

      animate(
        "#m__thumbnail",
        isOpen ? thumbnailState.open : thumbnailState.close,
        {
          ...transition,
          delay: isOpen ? 0.2 : 0,
          // duration: 2
        } as any,
      );
    };

    animateMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, animate]);

  return (
    <div className="fixed inset-0 isolate z-10 flex flex-col overflow-hidden">
      <div className="grid place-items-center p-10">
        <Button
          autoFocus
          size="icon"
          onPress={() => setOpen(!isOpen)}
          className="relative"
        >
          <MaterialSymbolsRectangleRounded />
        </Button>
      </div>

      {/* Animate from here */}
      <div className="m__overlay fixed -z-10 h-full w-full" ref={scope}>
        <div
          id="m__body"
          className="grid h-9 w-9 place-items-center overflow-hidden rounded-full bg-secondary/40"
        >
          <div
            id="m__thumbnail"
            className="h-[calc(100%-5rem*2)] w-[26rem] rounded-xl bg-secondary"
          />
        </div>
      </div>
    </div>
  );
}
