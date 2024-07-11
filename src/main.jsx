/* eslint-disable react/no-deprecated */
import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Ensure Bootstrap JS is imported
import "flag-icon-css/css/flag-icons.min.css";
import "./i18n"; // Import the i18n configuration
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
/* eslint-enable react/no-deprecated */
