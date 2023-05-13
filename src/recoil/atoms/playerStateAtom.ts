import { atom } from "recoil";

import { initialPlayerState } from "../../data/initialPlayerState";

export const playerStateAtom = atom({
  default: initialPlayerState,
  key: "playerState"
});
