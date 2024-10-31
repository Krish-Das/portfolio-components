import { motion } from "framer-motion";
import { forwardRef } from "react";
import { Modal, ModalOverlay, ModalOverlayProps } from "react-aria-components";

const ForwardedModalOverlay = forwardRef<HTMLDivElement, ModalOverlayProps>(
  (props, ref) => <ModalOverlay {...props} ref={ref} />,
);
ForwardedModalOverlay.displayName = "ModalOverlay";

const ForwardedModal = forwardRef<HTMLDivElement, ModalOverlayProps>(
  (props, ref) => <Modal {...props} ref={ref} />,
);
ForwardedModal.displayName = "Modal";

const MotionModal = motion.create(ForwardedModal);
const MotionModalOverlay = motion.create(ForwardedModalOverlay);

export { MotionModal, MotionModalOverlay };
