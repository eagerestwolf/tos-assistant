import { ActionIcon, Group, useMantineColorScheme } from "@mantine/core";
import { IconMoonStars, IconSun } from "@tabler/icons-react";

import { AppHeaderLanguageMenu } from "./AppHeader.LanguageMenu";

export function AppHeaderActions(): JSX.Element {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === "dark";

  return (
    <Group position="right">
      <AppHeaderLanguageMenu />
      <ActionIcon
        variant="transparent"
        onClick={(): void => {
          toggleColorScheme();
        }}
      >
        {dark ? <IconSun /> : <IconMoonStars />}
      </ActionIcon>
    </Group>
  );
}
