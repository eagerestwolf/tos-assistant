import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import { App } from "./App";
import { Loading } from "./views/Loading";

import "./i18n/config";

const root = document.getElementById("root");

if (!root) {
  throw new Error("Root is not defined!");
}

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <RecoilRoot>
        <App />
      </RecoilRoot>
    </Suspense>
  </React.StrictMode>
);
