import React from "react";
import { createRoot } from "react-dom/client";

import { IndexPage } from "@/pages/index";

import "./style/global.css";

const root = document.getElementById("root");

createRoot(root as HTMLElement).render(
  <React.StrictMode>
    <IndexPage />
  </React.StrictMode>,
);
