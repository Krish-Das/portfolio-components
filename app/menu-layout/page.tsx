import { Main } from "@/components/layout/mainwrapper";
import Image from "next/image";

export default function Page() {
  return (
    <Main className="grid h-dvh place-items-center p-0">
      <div className="grid h-full w-full place-items-center">
        <div className="relative isolate aspect-square h-full">
          <Image
            alt="One star image"
            src="/one-star.jpg"
            style={{ objectFit: "cover" }}
            fill
          />
        </div>
      </div>
    </Main>
  );
}
