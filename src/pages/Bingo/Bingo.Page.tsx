import { Group, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { BingoActions, BingoBoard } from "../../components/Bingo";

export function BingoPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Group position="apart">
        <Title mb="xl" order={1}>
          {t("pages.bingo.title")}
        </Title>
        <BingoActions />
      </Group>

      <BingoBoard />
    </>
  );
}
