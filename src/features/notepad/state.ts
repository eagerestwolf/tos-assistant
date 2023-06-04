import { atom } from "recoil";

import type { Player } from "./models/player";
import i18next from "../../i18n/config";

const initializePlayerAtom = (): Player[] => {
  const players: Player[] = [];

  for (let i = 1; i <= 16; i++) {
    players.push({
      claim: i === 16 ? i18next.t("features.notepad.players.16.claim") : "",
      id: i,
      isAffected: false,
      isAlive: i !== 16,
      isConfirmed: false,
      isFake: i === 16
    });
  }

  return players;
};

export const notepadAtom = atom<Player[]>({
  default: initializePlayerAtom(),
  key: "notepadAtom"
});
