import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";
import { DarkModeContextProvider } from "./context/DarkModeContext.jsx";
import TokenContextProvider from "./context/TokenContext.jsx";
createRoot(document.getElementById("root")).render(
  <TokenContextProvider>
    <DarkModeContextProvider>
        <StrictMode>
          <App />
        </StrictMode>
    </DarkModeContextProvider>
  </TokenContextProvider>
);
