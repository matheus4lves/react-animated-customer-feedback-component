import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import GlobalStyle from "./styles/globalStyles";
import "./fonts/plus-jakarta-sans/PlusJakartaSans-Bold.ttf";

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,
  document.getElementById("root")
);
