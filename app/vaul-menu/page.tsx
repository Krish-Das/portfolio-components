import { Main } from "@/components/layout/mainwrapper";
import Image from "next/image";
import Navbar from "./navbar";

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
    </>
  );
}
