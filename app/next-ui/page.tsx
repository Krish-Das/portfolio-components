import { Main } from "@/components/layout/mainwrapper";
import { Button } from "@nextui-org/button";
import { IoMenu, IoOpen } from "react-icons/io5";

export default function Page() {
  return (
    <>
      <Main className="relative grid min-h-[100dvh] place-content-center">
        <Button startContent=<IoOpen /> color="primary">
          Enter
        </Button>

        <Button
          color="primary"
          variant="flat"
          className="absolute right-0 top-0 -translate-x-4 translate-y-4"
          size="lg"
          isIconOnly
        >
          <IoMenu />
        </Button>
      </Main>
    </>
  );
}
