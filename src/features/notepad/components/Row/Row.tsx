import { ActionIcon, Checkbox, TextInput } from "@mantine/core";
import { IconCross, IconSkull } from "@tabler/icons-react";
import { useRecoilState } from "recoil";

import type { Player } from "../../models/player";
import { notepadAtom } from "../../state";

interface NotepadRowProps {
  player: number;
}

export function NotepadRow({ player }: NotepadRowProps): JSX.Element {
  const [playerState, setPlayerState] = useRecoilState(notepadAtom);
  const playerIndex = player - 1;

  const changePlayerProperty = (prop: keyof Player, val: unknown): void => {
    setPlayerState((oldPlayers: Player[]): Player[] => {
      const players = [...oldPlayers];
      let newPlayer = players[playerIndex];

      newPlayer = {
        ...newPlayer,
        [prop]: val
      };
      players[playerIndex] = newPlayer;

      return players;
    });
  };

  const playerIcon = (): JSX.Element => {
    if (playerState[playerIndex].isAlive) {
      return (
        <ActionIcon
          onClick={(): void => {
            changePlayerProperty("isAlive", false);
          }}
        >
          <IconSkull />
        </ActionIcon>
      );
    }

    return (
      <ActionIcon
        disabled={player === 16}
        variant="transparent"
        onClick={(): void => {
          changePlayerProperty("isAlive", true);
        }}
      >
        <IconCross />
      </ActionIcon>
    );
  };

  return (
    <tr>
      <td>{playerIcon()}</td>
      <td>{player}</td>
      <td>
        <Checkbox
          checked={playerState[playerIndex].isAffected}
          disabled={!playerState[playerIndex].isAlive}
          onChange={(e): void => {
            changePlayerProperty("isAffected", e.target.checked);
          }}
        />
      </td>
      <td>
        <Checkbox
          checked={playerState[playerIndex].isConfirmed}
          disabled={!playerState[playerIndex].isAlive}
          onChange={(e): void => {
            changePlayerProperty("isConfirmed", e.target.checked);
          }}
        />
      </td>
      <td>
        <Checkbox
          checked={playerState[playerIndex].isFake}
          disabled={!playerState[playerIndex].isAlive}
          onChange={(e): void => {
            changePlayerProperty("isFake", e.target.checked);
          }}
        />
      </td>
      <td>
        <TextInput
          disabled={!playerState[playerIndex].isAlive}
          value={playerState[playerIndex].claim}
          onChange={(e): void => {
            changePlayerProperty("claim", e.target.value);
          }}
        />
      </td>
    </tr>
  );
}
