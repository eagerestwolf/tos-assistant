import { ActionIcon, Menu } from "@mantine/core";
import { IconCheckbox, IconLanguage, IconSquare } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

export function AppHeaderLanguageMenu(): JSX.Element {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;
  const languages = Object.keys(i18n.services.resourceStore.data);

  return (
    <Menu position="bottom-end" shadow="md">
      <Menu.Target>
        <ActionIcon variant="transparent">
          <IconLanguage />
        </ActionIcon>
      </Menu.Target>

      <Menu.Dropdown>
        {languages.map((v) => {
          return (
            <Menu.Item
              key={v}
              icon={v === currentLanguage ? <IconCheckbox /> : <IconSquare />}
              onClick={() => {
                i18n.changeLanguage(v);
              }}
            >
              {t("language", { lng: v })} ({t("region", { lng: v })})
            </Menu.Item>
          );
        })}
      </Menu.Dropdown>
    </Menu>
  );
}
