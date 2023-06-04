import { atom, selector } from "recoil";

import { generateState, winStates } from "./models/bingoState";
import type { BingoState } from "./models/bingoState";

export const bingoAtom = atom<BingoState[]>({
  default: generateState(),
  key: "bingoState"
});

export const isWin = selector<boolean>({
  get: ({ get }): boolean => {
    const bingo: BingoState[] = get(bingoAtom);

    for (const winState of winStates) {
      let count: number = 0;

      for (const position of winState) {
        if (bingo[position].isComplete) {
          count += 1;
        }
      }

      // The count should NEVER be greater than 5, but bugs happen
      if (count >= 5) {
        return true;
      }
    }

    return false;
  },
  key: "bingoState.isWin"
});
