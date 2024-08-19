import { Main } from "@/components/layout/mainwrapper";
import { cn } from "@/lib/utils";
import { IoPlay } from "react-icons/io5";
import AppleBottomNav from "./AppleBottomNav";

export default function ComponentPage() {
  return (
    <>
      <Main className="dark relative w-full bg-background p-4 text-foreground">
        <div className="h-[50vh]" />

        {/* --- Images  */}
        <div className="flex w-full flex-col gap-4 p-3">
          <div className="inline-flex w-full items-center gap-4">
            <ColImage className="bg-[url('https://i.pinimg.com/564x/ee/04/63/ee0463138bca9b97c624748524b519e7.jpg')]" />
            <ColImage className="bg-[url('https://i.pinimg.com/564x/a4/fd/1c/a4fd1ced6fd8d53a3a49eab81eb74f80.jpg')]" />
          </div>

          {/* --- Videos  */}
          <ColImage className="bg-[url('https://i.pinimg.com/564x/9e/94/82/9e948281c4311add20d0aecc6e3f3931.jpg')]">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full border border-white/5 bg-white/30 pl-1 text-3xl backdrop-blur-xl">
              <IoPlay />
            </div>
          </ColImage>

          <ColImage className="bg-[url('https://i.pinimg.com/564x/23/e8/3f/23e83f2279ea3700c1703b6effe35ba1.jpg')]" />
          <ColImage className="bg-[url('https://i.pinimg.com/564x/a6/61/0a/a6610aa8cea8a8a696a1564f05190790.jpg')]" />

          {/* --- Images  */}
          <div className="inline-flex w-full items-center gap-4">
            <ColImage className="bg-[url('https://i.pinimg.com/564x/23/e8/3f/23e83f2279ea3700c1703b6effe35ba1.jpg')]" />
            <ColImage className="bg-[url('https://i.pinimg.com/564x/a6/61/0a/a6610aa8cea8a8a696a1564f05190790.jpg')]" />
          </div>
        </div>

        <div className="h-[30vh]" />

        <AppleBottomNav />
      </Main>
    </>
  );
}

function ColImage({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "contains_image rounded-md bg-white bg-cover bg-center",
        !!children
          ? "inline-grid aspect-video w-full place-content-center"
          : "aspect-video w-full",
        className,
      )}
    >
      {children}
    </div>
  );
}
