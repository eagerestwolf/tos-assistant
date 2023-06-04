import { Center, Container, Group, Space, Stack, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { NotepadActions } from "./components/Actions";
import { NotepadTable } from "./components/Table";

export function NotepadPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Container px="md" py="lg">
      <Group position="apart">
        <Title order={1}>{t("features.notepad.headings.page")}</Title>

        <Center>
          <NotepadActions />
        </Center>
      </Group>

      <Stack py="lg">
        <Title order={2}>{t("features.notepad.headings.town")}</Title>
        <NotepadTable table="alive" />
      </Stack>

      <Stack pt="lg">
        <Title order={2}>{t("features.notepad.headings.graveyard")}</Title>
        <NotepadTable table="dead" />
      </Stack>
    </Container>
  );
}
