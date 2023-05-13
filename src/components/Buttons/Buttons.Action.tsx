import { Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useCallback } from "react";

import { ConfirmationDialog } from "../Dialogs";

export interface ResetButtonProps {
  icon: JSX.Element;
  message: string;
  onConfirm: () => void;
}

export function ActionButton({ icon, message, onConfirm }: ResetButtonProps): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);

  const doReset = useCallback(() => {
    onConfirm();
    close();
  }, [close, onConfirm]);

  return (
    <>
      <ConfirmationDialog isOpen={opened} onClose={close} onConfirm={doReset} />
      <Button leftIcon={icon} variant="light" onClick={open}>
        {message}
      </Button>
    </>
  );
}
