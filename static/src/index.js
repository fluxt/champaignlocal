import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
// pages
import IndexPage from "views/IndexPage.js";
import LoginPage from "views/LoginPage";
import RegisterPage from "views/RegisterPage.js";
import StoresPage from "views/StoresPage.js";
import App from "App.js";
// others

import { ProvideAuth, RouteWithAuth } from "utils/auth.js"

ReactDOM.render(
  <ProvideAuth>
    <Router>
      <Switch>
        <Route
          exact path="/"
          render={(props) => <IndexPage {...props} />}
        />
        <RouteWithAuth
          path="/stores"
          render={(props) => <StoresPage {...props} />}
        />
        <Route
          path = "/addquestion"
          render={(props) => <App {...props} />}
          />
        <Route
          path="/users/login"
          render={(props) => <LoginPage {...props} />}
        />
        <Route
          path="/users/register"
          render={(props) => <RegisterPage {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  </ProvideAuth>,
  document.getElementById("root")
);
