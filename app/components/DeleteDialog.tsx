"use client";

import { Button } from "react-aria-components";
import { DialogContent, DialogModal, DialogTrigger } from "./dialog";
import { Heading } from "react-aria-components";

export const Dialog = () => {
  return (
    <DialogTrigger>
      <Button>Open</Button>
      <DialogModal>
        <DialogContent>
          {({ close }) => (
            <>
              <Heading className="text-lg font-bold">
                Payment Successfull
              </Heading>
              <p className="text-fg-3 text-sm">
                Your order has been placed. Check your email for order details!
              </p>

              <Button onPress={close}>Cancel</Button>
            </>
          )}
        </DialogContent>
      </DialogModal>
    </DialogTrigger>
  );
};
