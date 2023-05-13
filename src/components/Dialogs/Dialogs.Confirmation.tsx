import { Button, Group, Modal, Space } from "@mantine/core";
import { useTranslation } from "react-i18next";

interface ConfirmationDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function ConfirmationDialog({
  isOpen,
  onClose,
  onConfirm
}: ConfirmationDialogProps): JSX.Element {
  const { t } = useTranslation();

  return (
    <Modal centered opened={isOpen} title={t("dialogs.confirmation.title")} onClose={onClose}>
      {t("dialogs.confirmation.message")}
      <Space h="xl" />
      <Group position="right">
        <Button uppercase color="red" variant="light" onClick={onConfirm}>
          {t("dialogs.confirmation.confirm")}
        </Button>
      </Group>
    </Modal>
  );
}
