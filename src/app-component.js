import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "./component/layout/header/header-component";
import FooterComponent from "./component/layout/footer/footer-component";
import MainComponent from "./component/layout/container/main-container-component";

class AppComponent extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <HeaderComponent />
          <MainComponent />
          <FooterComponent />
        </div>
      </BrowserRouter>
    );
  }
}

export default AppComponent;
