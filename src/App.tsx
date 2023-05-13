import { AppShell, ColorSchemeProvider, MantineProvider, Tabs } from "@mantine/core";
import type { ColorScheme } from "@mantine/core";
import { useColorScheme, useLocalStorage } from "@mantine/hooks";
import { useTranslation } from "react-i18next";
import { useRecoilState } from "recoil";

import { AppHeader } from "./components/AppHeader";
import { viewAtom } from "./recoil/atoms/viewAtom";
import { Bingo } from "./views/Bingo";
import { Notepad } from "./views/Notepad";

export function App(): JSX.Element {
  const { t } = useTranslation();
  const [view, setView] = useRecoilState(viewAtom);

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
        <AppShell header={<AppHeader />} padding="md">
          <Tabs
            value={view}
            onTabChange={(val: string): void => {
              setView(val);
            }}
          >
            <Tabs.List>
              <Tabs.Tab value="notepad">{t("notepad.name")}</Tabs.Tab>
              <Tabs.Tab value="bingo">{t("bingo.name")}</Tabs.Tab>
            </Tabs.List>

            <Notepad />
            <Bingo />
          </Tabs>
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
