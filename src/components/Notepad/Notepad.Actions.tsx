import { Button } from "@mantine/core";
import { IconRefresh } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useResetRecoilState } from "recoil";

import { playerStateAtom } from "../../recoil/atoms/playerStateAtom";
import { ActionButton } from "../Buttons";

export function NotepadActions(): JSX.Element {
  const { t } = useTranslation();
  const resetPlayerState = useResetRecoilState(playerStateAtom);

  return (
    <Button.Group>
      <ActionButton
        icon={<IconRefresh />}
        message={t("notepad.actions.reset")}
        onConfirm={() => {
          resetPlayerState();
        }}
      />
    </Button.Group>
  );
}
