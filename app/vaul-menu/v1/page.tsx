import { Main } from "@/components/layout/mainwrapper";
import Image from "next/image";
import Navbar from "./navbar";

export default function Page() {
  return (
    <>
      <div className="h-dvh w-full bg-[url('https://mir-s3-cdn-cf.behance.net/project_modules/source/e0d974193755513.65f2572fa0391.png')] bg-cover bg-center" />
      <Main className="h-dvhs grid place-items-center p-0">
        <div className="relative grid h-full w-full place-items-center">
          <Navbar />
          <div className="grids hidden relative isolate h-full w-full place-items-center md:aspect-square md:w-auto">
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
