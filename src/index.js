import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppComponent from "./app-component";
import store from "./store/index";

ReactDOM.render(
  <Provider store={store}>
    <AppComponent />
  </Provider>,
  document.getElementById("root")
);
