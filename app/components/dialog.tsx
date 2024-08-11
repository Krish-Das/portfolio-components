import {
  Dialog as AriaDialogContent,
  DialogTrigger as AriaDialogTrigger,
  DialogProps,
  Modal,
  ModalOverlay,
  ModalOverlayProps,
} from "react-aria-components";

import { tv } from "tailwind-variants";

const dialog = tv({
  slots: {
    container: "fixed inset-0 z-40 flex items-center justify-center",
    content: "flex flex-col text-fg outline-none",
    modal:
      "max-w-3/4 w-3/4 rounded-xl bg-surface p-6 outline-none md:w-96 [&[data-entering]]:animate-zoom",
    overlay:
      "fixed left-0 top-0 z-50 bg-foreground/50 /backdrop-blur-sm flex h-screen w-screen items-center justify-center [&[data-entering]]:animate-fade [&[data-exiting]]:animate-fadeOut",
  },
});

const { overlay, modal, content } = dialog();

const DialogModal = ({
  children,
  className,
  ...props
}: ModalOverlayProps & { className?: string }) => (
  <ModalOverlay {...props} isDismissable={true} className={overlay()}>
    <Modal className={modal({ className })}>{children}</Modal>
  </ModalOverlay>
);

const DialogContent = ({
  children,
  className,
  ...props
}: DialogProps & { className?: string }) => (
  <AriaDialogContent {...props} className={content({ className })}>
    {children}
  </AriaDialogContent>
);

const DialogTrigger = AriaDialogTrigger;

export { DialogContent, DialogModal, DialogTrigger };
