import { ActionIcon, Checkbox, Grid, Group, Table, Text, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconInfoCircle } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import type { BingoTask } from "../../models/bingoTask";
import { BingoCategory } from "../../models/bingoTask";
import { bingoStateAtom } from "../../recoil/atoms/bingoStateAtom";
import { GeneralDialog } from "../Dialogs";

interface BingoSpaceProps {
  index: number;
}

export function BingoSpace({ index }: BingoSpaceProps): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
  const [bingoState, setBingoState] = useRecoilState(bingoStateAtom);
  const { t } = useTranslation();
  const { slot } = bingoState[index];

  const category = (): string => {
    switch (bingoState[index].category) {
      case BingoCategory.annoyingLobbies:
        return "annoying-lobbies";
      case BingoCategory.mistakes:
        return "mistakes";
      case BingoCategory.obviousPlays:
        return "obvious-plays";
      case BingoCategory.wins:
        return "wins";
      default:
        return "";
    }
  };

  const spaceText =
    index === 12 ? t("bingo.free-space") : t(`bingo.tasks.${category()}.${slot}.display-text`);

  return (
    <>
      <GeneralDialog isOpen={opened} title={t("dialogs.bingo-task.title")} onClose={close}>
        <>
          <Text hidden={index !== 12}>{t("dialogs.bingo-task.free-space")}</Text>

          <Table mt="lg">
            <tbody>
              <tr>
                <td>
                  <strong>{t("dialogs.bingo-task.category")}</strong>
                </td>
                <td>{t(`bingo.categories.${category()}`)}</td>
              </tr>
              <tr>
                <td>
                  <strong>{t("dialogs.bingo-task.task")}</strong>
                </td>
                <td>{t(`bingo.tasks.${category()}.${slot}.display-text`)}</td>
              </tr>
              <tr>
                <td>
                  <strong>{t("dialogs.bingo-task.description")}</strong>
                </td>
                <td>{t(`bingo.tasks.${category()}.${slot}.description`)}</td>
              </tr>
            </tbody>
          </Table>
        </>
      </GeneralDialog>

      <Grid.Col
        px="md"
        py="sm"
        span={1}
        sx={(theme) => {
          return {
            aspectRatio: "1/1",
            border: `${rem(1)} solid ${
              theme.colorScheme === "dark" ? theme.colors.dark[4] : theme.colors.gray[3]
            }`
          };
        }}
      >
        <Group position="apart">
          <Checkbox
            checked={bingoState[index].isComplete}
            onChange={(e) => {
              setBingoState((s: BingoTask[]): BingoTask[] => {
                const localState = [...s];
                let bingoTask = localState[index];

                bingoTask = {
                  ...bingoTask,
                  isComplete: index === 12 ? true : e.target.checked
                };
                localState[index] = bingoTask;

                return localState;
              });
            }}
          />
          <ActionIcon variant="transparent" onClick={open}>
            <IconInfoCircle />
          </ActionIcon>
        </Group>
        <Text align="center" mb="sm" mt="lg">
          {spaceText}
        </Text>
      </Grid.Col>
    </>
  );
}
