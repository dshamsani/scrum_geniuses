import React from "react";
import { createRoot } from "react-dom/client";

const root = document.getElementById("root");

createRoot(root as HTMLElement).render(<React.StrictMode>Hello</React.StrictMode>);
