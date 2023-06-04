import { Button } from "@mantine/core";
import { IconFilePlus, IconRefresh } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useSetRecoilState } from "recoil";

import { generateState } from "../../models/bingoState";
import type { BingoState } from "../../models/bingoState";
import { bingoAtom } from "../../state";
import { ActionButton } from "../../../../components/Buttons";

export function BingoActions(): JSX.Element {
  const { t } = useTranslation();
  const setBingoState = useSetRecoilState(bingoAtom);

  const onNewCard = (): void => {
    setBingoState((): BingoState[] => {
      return generateState();
    });
  };

  const onResetCard = (): void => {
    setBingoState((oldTasks: BingoState[]): BingoState[] => {
      const tasks: BingoState[] = [];

      oldTasks.forEach((oldTask: BingoState, index: number) => {
        tasks.push({
          ...oldTask,
          isComplete: index === 12
        });
      });

      return tasks;
    });
  };

  return (
    <Button.Group>
      <ActionButton
        icon={<IconFilePlus />}
        message={t("features.bingo.actions.new")}
        onConfirm={onNewCard}
      />

      <ActionButton
        icon={<IconRefresh />}
        message={t("features.bingo.actions.reset")}
        onConfirm={onResetCard}
      />
    </Button.Group>
  );
}
