"use client";

import { Button } from "react-aria-components";
import { DialogContent, DialogModal, DialogTrigger } from "./dialog";
import { Heading } from "react-aria-components";

export const Dialog = () => {
  return (
    <>
      <DialogTrigger>
        <Button>Open</Button>
        <DialogModal className="w-full">
          <DialogContent className="overflow-hidden rounded-3xl bg-background/90 backdrop-blur">
            {({ close }) => (
              <>
                <div className="space-y-2 p-4 py-8 pt-7 text-center">
                  <Heading className="text-xl font-bold tracking-[-0.01em]">
                    Delete your account
                  </Heading>
                  <p className="text-sm">
                    Caution, this action cannot be undone!
                  </p>
                </div>

                <div className="flex">
                  <Button
                    onPress={close}
                    className="w-full border-t border-foreground/5 p-4 font-medium text-gray-500"
                  >
                    Cancel
                  </Button>
                  <Button className="w-full border-l border-t border-foreground/5 p-4 font-medium text-destructive">
                    Delete
                  </Button>
                </div>
              </>
            )}
          </DialogContent>
        </DialogModal>
      </DialogTrigger>
    </>
  );
};
