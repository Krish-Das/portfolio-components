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
        <RacRadButton className="bg-[#36343B] text-[#E6E0E9]">
          <IoMdSend /> Default
        </RacRadButton>

        <RacRadButton className="bg-[#D0BCFF] text-[#381E72]">
          <IoMdSend /> Primary
        </RacRadButton>

        <RacRadButton className="bg-[#6750A4] text-[EADDFF]">
          <IoMdSend /> Secondary
        </RacRadButton>

        <RacRadButton className="border border-[#322F35] bg-[#00000000] text-[#D0BCFF]">
          <IoMdSend /> Outlined
        </RacRadButton>

        <RacRadButton className="bg-[#00000000] text-[#D0BCFF]">
          <IoMdSend /> Ghost
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
