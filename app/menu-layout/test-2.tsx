import { Button } from "@/app/components/buttons/ButtonV2";
// import { Button } from "@/components/ui/button";
import { MaterialSymbolsRectangleRounded } from "../components/icons/material-symbols";
import * as Dialog from "@radix-ui/react-dialog";
import { useEffect, useState } from "react";

export default function MenuTest() {
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.setAttribute("data-scroll-locked", "1");
    } else {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-scroll-locked");
    }
    return () => {
      document.body.style.overflow = "";
      document.body.removeAttribute("data-scroll-locked");
    };
  }, [isOpen]);

  const handleOpenMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <Dialog.Root open={isOpen} onOpenChange={setOpen} modal={false}>
        <Dialog.Trigger asChild>
          <Button
            className="relative bg-background/0 [--bg-tap-end:#00000000]"
            size="icon"
            onClick={handleOpenMenu}
          >
            <MaterialSymbolsRectangleRounded />
          </Button>
        </Dialog.Trigger>

        <Dialog.Portal>
          <Dialog.Content
            className="DialogContent fixed inset-0 overflow-hidden bg-background/5 backdrop-blur-2xl"
            // "DialogOverlay fixed inset-0 isolate overflow-hidden bg-background/5 bg-red-300 backdrop-blur-2xl"
            onInteractOutside={(event) => event.preventDefault()}
          >
            <Dialog.Title>Menu</Dialog.Title>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
}
