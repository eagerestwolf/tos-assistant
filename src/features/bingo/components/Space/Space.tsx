import { ActionIcon, Checkbox, Grid, Group, Table, Text, rem } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconInfoCircle } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { BingoState } from "../../models/bingoState";
import { bingoAtom } from "../../state";
import { GeneralDialog } from "../../../../components/Dialogs";

interface BingoSpaceProps {
  index: number;
}

export function BingoSpace({ index }: BingoSpaceProps): JSX.Element {
  const [opened, { open, close }] = useDisclosure(false);
  const [bingoState, setBingoState] = useRecoilState(bingoAtom);
  const { t } = useTranslation();
  const { task } = bingoState[index];

  const spaceText =
    index === 12 ? t("features.bingo.free-space") : t(`features.bingo.tasks.${task.category}.${task.index}.display-text`);

  return (
    <>
      <GeneralDialog isOpen={opened} title={t("features.bingo.dialogs.task.title")} onClose={close}>
        <>
          <Text hidden={index !== 12}>{t("features.bingo.dialogs.task.free-space")}</Text>

          <Table mt="lg">
            <tbody>
              <tr>
                <td>
                  <strong>{t("features.bingo.dialogs.task.category")}</strong>
                </td>
                <td>{t(`features.bingo.categories.${task.category}`)}</td>
              </tr>
              <tr>
                <td>
                  <strong>{t("features.bingo.dialogs.task.task")}</strong>
                </td>
                <td>{t(`features.bingo.tasks.${task.category}.${task.index}.display-text`)}</td>
              </tr>
              <tr>
                <td>
                  <strong>{t("features.bingo.dialogs.task.description")}</strong>
                </td>
                <td>{t(`features.bingo.tasks.${task.category}.${task.index}.description`)}</td>
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
              setBingoState((s: BingoState[]): BingoState[] => {
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
