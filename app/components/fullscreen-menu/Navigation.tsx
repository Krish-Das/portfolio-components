"use client";

import { Menu, MenuBody, MenuTrigger, useMenu } from "./Menu";
import {
  MaterialSymbolsInfoOutline,
  MaterialSymbolsMagnificationLarge,
  MaterialSymbolsMail,
  MaterialSymbolsRectangleRounded,
} from "../icons/material-symbols";
import { Button } from "@/app/components/buttons/ButtonV2";
import { projects } from "@/lib/project-images";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export default function Navigation() {
  const { isMenuOpen } = useMenu();

  return (
    <section className="navigation__wraper fixed left-0 right-0 top-0 z-50">
      <nav className="navbar relative mx-auto flex max-w-[1920px] items-center justify-end gap-2 p-3">
        <StaticMarkup />

        <Menu>
          <MenuTrigger className="h-10 w-10" autoFocus>
            {!isMenuOpen ? (
              <MaterialSymbolsRectangleRounded />
            ) : (
              <MaterialSymbolsMagnificationLarge />
            )}
          </MenuTrigger>
          <MenuBody
            className="grid grid-cols-[1fr,1.15fr,1.05fr] place-items-center"
            delay={0.16}
          >
            <motion.div
              variants={{
                hidden: {
                  // scaleY: 0.3,
                  height: "calc( 20% - 0rem)",
                  width: "20%",
                  opacity: 0,
                  filter: "blur(10px)",
                },
                visible: {
                  // scaleY: 1,
                  height: "calc( 100% - 7rem)",
                  width: "100%",
                  opacity: 1,
                  filter: "blur(0px)",
                  transition: { delay: 0.25, type: "spring", bounce: 0.25 },
                },
              }}
              className="col-start-2 h-[calc(100%-7rem)] w-full origin-center overflow-hidden rounded-xl bg-[#353336]"
            />
            <div className="col-start-3 h-full w-full self-start justify-self-start" />
          </MenuBody>
        </Menu>
      </nav>
    </section>
  );
}

function ProjectButtons({
  activeProject,
  switchActiveProject,
}: {
  activeProject: number;
  // eslint-disable-next-line no-unused-vars
  switchActiveProject: (id: number) => void;
}) {
  return (
    <div className="inline-flex flex-col items-start gap-2 pl-6">
      {projects.map(({ completed, label }, idx) => {
        const isActive = idx === activeProject;

        return (
          <Button
            className={cn(
              "w-fit rounded-full",
              "relative",
              isActive
                ? "bg-[#006FEE] text-white hover:bg-[#006FEE]/80"
                : "bg-secondary/50 hover:bg-secondary/70",
            )}
            size="sm"
            key={idx}
            // variant={!isActive ? "secondary" : "default"}
            onClick={() => switchActiveProject(idx)}
          >
            {label}
            {!completed && (
              <p
                className="
                          absolute -top-2 right-5 translate-x-full rounded-md border
                          border-zinc-600/10 bg-zinc-800/40 px-1 text-[0.7rem] text-zinc-200 backdrop-blur-md
                          "
              >
                soon
              </p>
            )}
          </Button>
        );
      })}
    </div>
  );
}

function ProjectDescription() {
  return (
    <article className="inline-flex flex-1 flex-col justify-end">
      <div className="space-y-2 rounded-xl border border-zinc-600/10 bg-secondary/20 p-2 pr-4 text-zinc-200 backdrop-blur-md">
        <h3 className="inline-flex items-center gap-1 rounded-full border border-zinc-600/10 bg-secondary/20 px-2 py-1 text-[0.7rem] leading-none text-zinc-200">
          <span className="text-xs">
            <MaterialSymbolsInfoOutline />
          </span>
          About this project
        </h3>
        <p className="pl-1 text-sm text-foreground/80">
          A shorth description of the project.
        </p>
      </div>
    </article>
  );
}

function StaticMarkup() {
  return (
    <>
      <div className="brand__logo absolute left-3 top-3 origin-top-left translate-x-0 translate-y-[300%] -rotate-90">
        <div className="h-8 w-24 rounded-xl bg-zinc-100" />
      </div>
      <Button size="sm">
        <MaterialSymbolsMail className="text-foreground/70" />
        Cont.
      </Button>
    </>
  );
}
