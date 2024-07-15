import React from "react";
import ReactDOM from "react-dom/client";
import Overlay from "./Overlay";

const root = document.createElement("div");
root.id = "crx-root";
document.body.appendChild(root);

ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <Overlay />
  </React.StrictMode>
);