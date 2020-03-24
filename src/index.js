import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { PicSomeContextProvider } from "./picSomeContext";
ReactDOM.render(
  <PicSomeContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PicSomeContextProvider>,
  document.getElementById("root")
);
