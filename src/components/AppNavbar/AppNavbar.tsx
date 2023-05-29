import { Navbar, Stack } from "@mantine/core";
import { IconChartGridDots, IconNote, IconSettings } from "@tabler/icons-react";

import { AppNavbarLink } from ".";

export function AppNavbar(): JSX.Element {
  return (
    <Navbar
      p="md"
      sx={(theme) => ({
        backgroundColor: theme.fn.variant({ color: theme.primaryColor, variant: "filled" })
          .background
      })}
      width={{ base: 80 }}
    >
      <Navbar.Section grow>
        <Stack justify="center" spacing={0}>
          <AppNavbarLink icon={<IconNote />} label="Notepad" to="/" />
          <AppNavbarLink icon={<IconChartGridDots />} label="Bingo" to="/bingo" />
        </Stack>
      </Navbar.Section>
      <Navbar.Section>
        <Stack justify="center" spacing={0}>
          <AppNavbarLink icon={<IconSettings />} label="Settings" to="/settings" />
        </Stack>
      </Navbar.Section>
    </Navbar>
  );
}
