import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

// imports only the compiled react Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// for  Bootstrap components like dropdowns, modals, carousels, tooltips, etc.
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// separate library { bootstrap icons }
import "bootstrap-icons/font/bootstrap-icons.css";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
