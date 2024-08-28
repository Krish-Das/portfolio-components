"use client";

import { RacRadButton } from "./buttons/RacRadixButton";
import { IoMdSend } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";

export default function ButtonLab() {
  return (
    <>
      <div className="mb-3 flex w-full items-center justify-center gap-1 rounded-2xl bg-[#0F0D13] p-10">
        <RacRadButton>
          <IoMdSend /> Send
        </RacRadButton>
      </div>

      <h3 className="pt-3 text-xl font-bold">Default</h3>
      <div className="inline-flex w-full gap-2 overflow-x-scroll p-10">
        <RacRadButton className="bg-[#36343B] text-[#E6E0E9]">
          <IoMdSend /> Default
        </RacRadButton>

        <RacRadButton className="bg-[#FFF] text-[#000]">
          <IoMdSend /> Primary
        </RacRadButton>

        <RacRadButton className="border border-[#322F35] bg-[#00000000] text-foreground">
          <IoMdSend /> Outlined
        </RacRadButton>

        <RacRadButton className="bg-[#00000000] text-foreground">
          <IoMdSend /> Ghost
        </RacRadButton>
      </div>

      <h3 className="pt-3 text-xl font-bold">Brand</h3>
      <div className="inline-flex w-full gap-2 overflow-x-scroll p-10">
        <RacRadButton className="bg-[#0727f2] text-[#EADDFF]">
          <IoMdSend /> Brand Primary
        </RacRadButton>

        <RacRadButton className="bg-[#000443] text-[#aec9ff]">
          <IoMdSend /> Brand Secondary
        </RacRadButton>
      </div>

      <h3 className="pt-3 text-xl font-bold">Ui</h3>
      <div className="inline-flex w-full gap-2 overflow-x-scroll p-10">
        <RacRadButton className="bg-[#0857f2] text-[#EADDFF]">
          <IoMdSend /> Ui-Blue
        </RacRadButton>

        <RacRadButton className="bg-[#F20823] text-[#EADDFF]">
          <IoMdSend /> Ui-Red
        </RacRadButton>
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
