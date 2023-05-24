import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import McwApp from "./mcwApp";
import i18n from "./translations/i18n";
import { CookiesProvider } from "react-cookie";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CookiesProvider>
      <BrowserRouter>
        <McwApp />
      </BrowserRouter>
    </CookiesProvider>
  </React.StrictMode>
);
