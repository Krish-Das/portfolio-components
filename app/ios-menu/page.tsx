"use client";

import { Dialog, DialogTrigger, Heading, Modal } from "react-aria-components";
import { Main } from "@/components/layout/mainwrapper";
import { Button } from "../components/buttons/Button";

export default function Page() {
  return (
    <Main>
      iOS-Menu
      <DialogTrigger>
        <Button>Click</Button>
        <Modal>
          <Dialog>
            <Heading slot="title" />
          </Dialog>
        </Modal>
      </DialogTrigger>
    </Main>
  );
}
