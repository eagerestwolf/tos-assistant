import { Grid, rem } from "@mantine/core";
import { useRecoilValue } from "recoil";

import { bingoStateAtom } from "../../recoil/atoms/bingoStateAtom";

import { BingoSpace } from "./Bingo.BingoBoard.Space";

export function BingoBoard(): JSX.Element {
  const bingoState = useRecoilValue(bingoStateAtom);

  const generateSpaces = bingoState.map((task, i): JSX.Element => {
    return <BingoSpace key={task.slot} index={i} />;
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
