import { Tabs } from "@mantine/core";

import { BingoBoard } from "../../components/Bingo";

export function Bingo(): JSX.Element {
  return (
    <Tabs.Panel px="md" py="md" value="bingo">
      <BingoBoard />
    </Tabs.Panel>
  );
}
