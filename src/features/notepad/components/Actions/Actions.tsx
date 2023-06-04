import { Button } from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useResetRecoilState } from "recoil";

import { notepadAtom } from "../../state";
import { ActionButton } from "../../../../components/Buttons";

export function NotepadActions(): JSX.Element {
  const { t } = useTranslation();
  const resetPlayerState = useResetRecoilState(notepadAtom);

  return (
    <Button.Group>
      <ActionButton
        icon={<IconRefresh />}
        message={t("features.notepad.actions.reset")}
        onConfirm={() => {
          resetPlayerState();
        }}
      />
    </Button.Group>
  );
}
