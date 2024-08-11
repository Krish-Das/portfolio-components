import { Main } from "@/components/layout/mainwrapper";
// import { Button } from "./RacButton";
import { Dialog } from "./DeleteDialog";
import { cn } from "@/lib/utils";

export default function ComponentPage() {
  return (
    <>
      <Main>
        <div className="wrapper__button space-y-3">
          {/* <Button /> */}
          <Dialog />

          <ImageBackground className="bg-[url('https://i.pinimg.com/564x/1e/2e/c0/1e2ec02c898456960033841c86e00fbc.jpg')]" />
          <ImageBackground className="bg-[url('https://i.pinimg.com/564x/37/07/aa/3707aa9ec6aab9b9e39a703366a07c46.jpg')]" />
          <ImageBackground className="bg-[url('https://i.pinimg.com/564x/1f/92/21/1f9221d1ff9635174c35b21ee61e0536.jpg')]" />
        </div>
      </Main>
    </>
  );
}

const ImageBackground = ({ className }: { className: string }) => {
  return (
    <div
      className={cn(
        "aspect-[16/10] w-full rounded-md bg-cover bg-center",
        className,
      )}
    />
  );
};
