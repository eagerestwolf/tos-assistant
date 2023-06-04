import { Grid, rem } from "@mantine/core";
import { useRecoilValue } from "recoil";

import { bingoAtom } from "../../state";
import { BingoSpace } from "../Space";
import type { BingoState } from "../../models/bingoState";

export function BingoBoard(): JSX.Element {
  const bingoState = useRecoilValue(bingoAtom);

  const generateSpaces = bingoState.map((state: BingoState, index: number): JSX.Element => {
    return <BingoSpace key={`${state.task.category}-${state.task.index}`} index={index} />;
  });

  return (
    <Grid
      columns={5}
      gutter={0}
      sx={{
        aspectRatio: "1/1",
        margin: `${rem(16)} auto 0`,
        maxHeight: "84vh"
      }}
    >
      {generateSpaces}
    </Grid>
  );
}
