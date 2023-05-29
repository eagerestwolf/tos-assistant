import { AppShell, ColorSchemeProvider, MantineProvider } from "@mantine/core";
import type { ColorScheme } from "@mantine/core";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";
import { Outlet } from "react-router-dom";

import { AppNavbar } from "./components/AppNavbar";

export function App(): JSX.Element {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    defaultValue: useColorScheme(),
    getInitialValueInEffect: true,
    key: "mantine-color-scheme"
  });

  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value ?? (colorScheme === "dark" ? "light" : "dark"));
  };

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
        <AppShell navbar={<AppNavbar />} padding="md">
          <Outlet />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
