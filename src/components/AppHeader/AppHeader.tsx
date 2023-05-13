import { Group, Header } from "@mantine/core";
import { useRecoilValue } from "recoil";

import { viewAtom } from "../../recoil/atoms/viewAtom";
import { BingoActions } from "../Bingo";
import { NotepadActions } from "../Notepad";

import { AppHeaderActions } from "./AppHeader.Actions";

export function AppHeader(): JSX.Element {
  const view = useRecoilValue(viewAtom);

  const viewActions = (): JSX.Element | null => {
    switch (view) {
      case "bingo":
        return <BingoActions />;
      case "notepad":
        return <NotepadActions />;
      default:
        return null;
    }
  };

  return (
    <Header height={60}>
      <Group position="apart" px={20} sx={{ height: "100%" }}>
        {viewActions()}
        <AppHeaderActions />
      </Group>
    </Header>
  );
}
