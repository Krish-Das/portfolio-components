"use client";

import { useState } from "react";
import { RacRadixButton } from "./RacRadixButton";
import { HiOutlineDownload } from "react-icons/hi";
import { Button as TestButton } from "./TestButton";

export default function ButtonLab() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <Display number={number} />

      <div className="mt-5 inline-flex h-[70dvh] w-full items-center justify-center">
        <RacRadixButton
          onClick={() => setNumber(Math.round(Math.random() * 100))}
        >
          <HiOutlineDownload /> Download
        </RacRadixButton>
        <TestButton>this</TestButton>
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
