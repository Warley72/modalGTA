import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";


import { VisibilityProvider } from "./providers/Visibility";
import { debugData } from "./utils/debugData"

debugData([{ name: "Visible", payload: true }]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <App />
    </VisibilityProvider>
  </React.StrictMode>
);
