/* eslint-disable*/
import React from "react";
import ReactDOM from "react-dom";
// eslint-disable-next-line
import { Typography } from "@material-ui/core";
import "./index.css";
import MuiThemeProvider from "@material-ui/styles/ThemeProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import theme from "./components/styles/theme";

// React-Bootstrap material design
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("./firebase-messaging-sw.js")
    .then(registration => {
      console.log("Registration successful, scope is:", registration.scope);
    })
    .catch(err => {
      console.log("Service worker registration failed, error:", err);
    });
}

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
