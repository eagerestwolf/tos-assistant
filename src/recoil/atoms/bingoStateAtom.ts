import { atom } from "recoil";

import { generateBingoTasks } from "../mutations/generateBingoTasks";

export const bingoStateAtom = atom({
  default: generateBingoTasks(),
  key: "bingoState"
});
