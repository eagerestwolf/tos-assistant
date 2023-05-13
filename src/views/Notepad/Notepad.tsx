import { Space, Tabs, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

import { NotepadTable } from "../../components/Notepad";

export function Notepad(): JSX.Element {
  const { t } = useTranslation();

  return (
    <Tabs.Panel px="md" py="md" value="notepad">
      <NotepadTable table="alive" />

      <Space h="xl" />

      <Title order={2}>{t("notepad.tables.graveyard.title")}</Title>
      <NotepadTable table="dead" />
    </Tabs.Panel>
  );
}
