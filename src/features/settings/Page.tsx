import {
  Container,
  Group,
  SegmentedControl,
  Select,
  SelectItem,
  Stack,
  Text,
  Title
} from "@mantine/core";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export function SettingsPage(): JSX.Element {
  const { i18n, t } = useTranslation();
  const languages: SelectItem[] = [];
  const [language, setLanguage] = useState<string>(i18n.language);

  // This isn't a super expensive calculation, but it should only be run once (during render)
  useEffect(() => {
    Object.keys(i18n.services.resourceStore.data).map((val: string) => {
      languages.push({
        label: `${t("language", { lng: val })} (${t("region", { lng: val })})`,
        value: val
      });
    });
  });

  const doSetLanguage = (value: string) => {
    setLanguage((_: string): string => {
      i18n.changeLanguage(value);
      return value;
    });
  };

  return (
    <Container px="md" py="lg">
      <Title order={1}>{t("features.settings.headings.page")}</Title>

      <Stack px="sm" py="lg">
        <Title order={2}>{t("features.settings.headings.global")}</Title>
        <Group grow>
          <Text component="label" htmlFor="appLanguage">
            {t("features.settings.labels.language")}
          </Text>
          <Select data={languages} name="appLanguage" value={language} onChange={doSetLanguage} />
        </Group>
      </Stack>

      <Stack px="sm" py="lg">
        <Title order={2}>{t("features.settings.headings.theme")}</Title>

        <Group grow>
          <Text component="label" htmlFor="appThemeMode">
            {t("features.settings.labels.themeMode")}
          </Text>
          <SegmentedControl
            data={[
              { label: "Light", value: "light" },
              { label: "Dark", value: "dark" },
              { label: "Use system theme", value: "system" }
            ]}
          />
        </Group>
      </Stack>
    </Container>
  );
}
