import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";

import "./i18n/config";
import { Router } from "./routes";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root is not defined!");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <RecoilRoot>
      <RouterProvider router={Router} />
    </RecoilRoot>
  </React.StrictMode>
);
