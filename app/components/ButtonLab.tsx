"use client";

import { RacRadButton } from "./buttons/RacRadixButton";
import { IoMdSend } from "react-icons/io";

export default function ButtonLab() {
  return (
    <>
      <div className="mb-3 flex w-full items-center justify-center gap-1 rounded-2xl bg-[#0F0D13] p-10">
        <RacRadButton>
          <IoMdSend /> Send
        </RacRadButton>
      </div>

      <div className="inline-flex w-full gap-2 overflow-x-scroll p-10">
        <RacRadButton>
          <IoMdSend /> Send
        </RacRadButton>

        <RacRadButton>
          <IoMdSend /> Send
        </RacRadButton>

        <RacRadButton>
          <IoMdSend /> Send
        </RacRadButton>

        <RacRadButton>
          <IoMdSend /> Send
        </RacRadButton>

        <RacRadButton>
          <IoMdSend /> Send
        </RacRadButton>
      </div>

      <div className="sinline-flex mt-5 hidden h-[70dvh] w-full flex-wrap items-center justify-center gap-1">
        <RacRadButton variant="default">
          <IoMdSend /> Send
        </RacRadButton>

        <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 leading-none tracking-[0.01em]">
          <IoMdSend /> Default
        </div>

        <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 leading-none tracking-[0.01em]">
          <IoMdSend /> Primary
        </div>

        <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 leading-none tracking-[0.01em]">
          <IoMdSend /> Secondary
        </div>

        <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 leading-none tracking-[0.01em]">
          <IoMdSend /> Outlined
        </div>

        <div className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full px-5 leading-none tracking-[0.01em]">
          <IoMdSend /> Ghost
        </div>
      </div>
    </>
  );
}

const Display = ({ number }: { number: number }) => {
  return (
    <div className="inline-flex w-full flex-1 items-center justify-end rounded-md border p-6 text-5xl">
      <p>{number}</p>
    </div>
  );
};
