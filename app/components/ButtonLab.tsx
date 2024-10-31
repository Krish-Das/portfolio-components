"use client";

import { useState } from "react";
import { IoLogoGoogle } from "react-icons/io";
import { IoMdOpen } from "react-icons/io";
import { Button } from "@/app/components/buttons/ButtonV2";

export default function ButtonLab() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <Display number={number} />

      <div className="mt-5 inline-flex h-[70dvh] w-full flex-wrap items-center justify-center gap-1">
        <Button onClick={() => setNumber(Math.round(Math.random() * 100))}>
          <IoMdOpen /> Open
        </Button>

        <Button
          onClick={() => setNumber(Math.round(Math.random() * 100))}
          size="icon"
        >
          <IoLogoGoogle />
        </Button>

        <Button
          autoFocus
          onClick={() => setNumber(Math.round(Math.random() * 101))}
          className=""
          size="icon"
        >
          <IoLogoGoogle />
        </Button>
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
