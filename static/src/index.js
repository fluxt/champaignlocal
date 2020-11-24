import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
// pages
import IndexPage from "views/IndexPage.js";
import StoresPage from "views/StoresPage.js";
import RegisterPage from "views/RegisterPage.js";
// others

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route
        exact path="/"
        render={(props) => <IndexPage {...props} />}
      />
      <Route
        path="/stores"
        render={(props) => <StoresPage {...props} />}
      />
      <Route
        path="/users/register"
        render={(props) => <RegisterPage {...props} />}
      />
      <Redirect to="/" />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);
