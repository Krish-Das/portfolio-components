"use client";

import { useState } from "react";
import { IoLogoGoogle } from "react-icons/io";
import { IoMdOpen } from "react-icons/io";
import { Button as TestButton } from "./buttons/Button";

export default function ButtonLab() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <Display number={number} />

      <div className="mt-5 inline-flex h-[70dvh] w-full flex-wrap items-center justify-center gap-1">
        <TestButton onClick={() => setNumber(Math.round(Math.random() * 100))}>
          <IoMdOpen /> Open
        </TestButton>

        <TestButton
          onClick={() => setNumber(Math.round(Math.random() * 100))}
          size="icon"
        >
          <IoLogoGoogle />
        </TestButton>
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
