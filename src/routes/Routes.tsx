import type { RouteObject } from "react-router-dom";

import { App } from "../App";

import { BingoPage } from "../pages/Bingo";
import { NotepadPage } from "../pages/Notepad";
import { SettingsPage } from "../pages/Settings";

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
