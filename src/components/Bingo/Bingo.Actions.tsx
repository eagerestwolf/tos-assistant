import { Button } from "@mantine/core";
import { IconFilePlus, IconRefresh } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useSetRecoilState } from "recoil";

import type { BingoTask } from "../../models/bingoTask";
import { bingoStateAtom } from "../../recoil/atoms/bingoStateAtom";
import { generateBingoTasks } from "../../recoil/mutations/generateBingoTasks";
import { ActionButton } from "../Buttons";

export function BingoActions(): JSX.Element {
  const { t } = useTranslation();
  const setBingoState = useSetRecoilState(bingoStateAtom);

  const doNewBingoCard = (): void => {
    setBingoState((): BingoTask[] => {
      return generateBingoTasks();
    });
  };

  const doBingoReset = (): void => {
    setBingoState((s: BingoTask[]): BingoTask[] => {
      const tasks: BingoTask[] = [];

      s.forEach((v: BingoTask, i: number) => {
        const task: BingoTask = {
          category: v.category,
          isComplete: i === 12,
          slot: v.slot
        };

        tasks.push(task);
      });

      return tasks;
    });
  };

  return (
    <Button.Group>
      <ActionButton
        icon={<IconFilePlus />}
        message={t("bingo.actions.new")}
        onConfirm={doNewBingoCard}
      />

      <ActionButton
        icon={<IconRefresh />}
        message={t("bingo.actions.reset")}
        onConfirm={doBingoReset}
      />
    </Button.Group>
  );
}
