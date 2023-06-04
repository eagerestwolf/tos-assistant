import type { RouteObject } from "react-router-dom";

import { App } from "../App";

import { BingoPage } from "../features/bingo/Page";
import { NotepadPage } from "../features/notepad/Page";
import { SettingsPage } from "../features/settings/Page";

export const Routes: RouteObject[] = [
  {
    children: [
      {
        element: <NotepadPage />,
        index: true
      },
      {
        element: <BingoPage />,
        path: "bingo"
      },
      {
        element: <SettingsPage />,
        path: "settings"
      }
    ],
    element: <App />,
    path: "/"
  }
];
