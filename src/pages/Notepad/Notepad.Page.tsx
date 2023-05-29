import { Group, Space, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { NotepadActions, NotepadTable } from "../../components/Notepad";

export function NotepadPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Group position="apart">
        <Title mb="xl" order={1}>
          {t("pages.notepad.title")}
        </Title>
        <NotepadActions />
      </Group>

      <Title order={3}>{t("pages.notepad.tables.town")}</Title>
      <NotepadTable table="alive" />

      <Space h="xl" />

      <Title order={3}>{t("pages.notepad.tables.graveyard")}</Title>
      <NotepadTable table="dead" />
    </>
  );
}
