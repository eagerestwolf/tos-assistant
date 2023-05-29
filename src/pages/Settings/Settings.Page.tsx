import { Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

export function SettingsPage(): JSX.Element {
  const { t } = useTranslation();

  return (
    <>
      <Title order={1}>{t("pages.settings.title")}</Title>
    </>
  );
}
