import { Table } from "@mantine/core";
import { useTranslation } from "react-i18next";
import { useRecoilValue } from "recoil";

import type { Player } from "../../models/player";
import { playerStateAtom } from "../../recoil/atoms/playerStateAtom";

import { NotepadRow } from "./Notepad.Row";

interface NotepadTableProps {
  table: "alive" | "dead";
}

export function NotepadTable({ table }: NotepadTableProps): JSX.Element {
  const { t } = useTranslation();
  const playerState = useRecoilValue(playerStateAtom);

  const tableHeader = (
    <tr>
      <th />
      <th>#</th>
      <th>{t("components.notepad.table.headers.affected")}</th>
      <th>{t("components.notepad.table.headers.confirmed")}</th>
      <th>{t("components.notepad.table.headers.fake")}</th>
      <th>{t("components.notepad.table.headers.claim")}</th>
    </tr>
  );

  const tableRows: JSX.Element[] = playerState
    .filter((v: Player): boolean => {
      if (table === "alive") {
        return v.isAlive;
      }

      return !v.isAlive;
    })
    .map((v: Readonly<Player>): JSX.Element => {
      return <NotepadRow key={v.id} player={v.id} />;
    });

  return (
    <Table highlightOnHover>
      <thead>{tableHeader}</thead>
      <tbody>{tableRows}</tbody>
    </Table>
  );
}
