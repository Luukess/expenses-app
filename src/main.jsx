import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import McwApp from "./mcwApp";
import i18n from "./translations/i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <McwApp />
  </React.StrictMode>
);
