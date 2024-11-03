import { Main } from "@/components/layout/mainwrapper";
import Image from "next/image";
import { Navbar, Portal } from "./menu-layout";
// import TestComponent from "./test-component";

export default function Page() {
  return (
    <>
      <Main className="grid h-dvh place-items-center p-0">
        <div className="relative grid h-full w-full place-items-center">
          <Navbar />
          <div className="relative isolate grid h-full w-full place-items-center md:aspect-square md:w-auto">
            <Image
              alt="One star image"
              src="/one-star.jpg"
              style={{ objectFit: "cover" }}
              fill
            />
          </div>
        </div>
      </Main>
      <Portal />
      <div className="h-screen w-full bg-red-300" />
      <div className="h-screen w-full bg-green-300" />
      
      {/* <TestComponent /> */}
    </>
  );
}
