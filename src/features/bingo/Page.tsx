import { Center, Container, Group, Space, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { BingoActions } from "./components/Actions";
import { BingoBoard } from "./components/Board";

export function BingoPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Container px="md" py="lg">
      <Group position="apart">
        <Title order={1}>{t("features.bingo.headings.page")}</Title>

        <Center>
          <BingoActions />
        </Center>
      </Group>

      <Space h="xl" />
      <Space h="xl" />

      <BingoBoard />
    </Container>
  );
}
