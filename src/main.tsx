import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { OrgProvider } from "./store/OrgContext";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <OrgProvider>
      <App />
    </OrgProvider>
  </React.StrictMode>
);
