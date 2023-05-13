import { Modal } from "@mantine/core";

interface GeneralDialogProps {
  children: JSX.Element;
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export function GeneralDialog({
  children,
  isOpen,
  onClose,
  title
}: GeneralDialogProps): JSX.Element {
  return (
    <Modal centered opened={isOpen} title={title} onClose={onClose}>
      {children}
    </Modal>
  );
}
