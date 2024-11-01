import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Page } from "@/pages/index";

import "./style/global.css";

const root = document.getElementById("root");

createRoot(root as HTMLElement).render(
  <StrictMode>
    <Page />
  </StrictMode>,
);
