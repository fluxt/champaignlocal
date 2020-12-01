import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

// styles
import "assets/css/bootstrap.min.css";
import "assets/scss/paper-kit.scss?v=1.2.0";
// pages
import IndexPage from "views/IndexPage.js";

import RegisterPage from "views/users/RegisterPage.js";
import LoginPage from "views/users/LoginPage.js";
import UpdatePage from "views/users/UpdatePage.js";
import DeletePage from "views/users/DeletePage.js";

import StoresPage from "views/stores/StoresPage.js";

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
        <Route
          path="/users/register"
          render={(props) => <RegisterPage {...props} />}
        />
          path="/users/login"
          render={(props) => <LoginPage {...props} />}
        />
        <RouteWithAuth
          path="/users/update"
          render={(props) => <UpdatePage {...props} />}
        />
        <RouteWithAuth
          path="/users/delete"
          render={(props) => <DeletePage {...props} />}
        />
        <RouteWithAuth
          path="/stores"
          render={(props) => <StoresPage {...props} />}
        />
        <Route
          path = "/questions"
          render={(props) => <App {...props} />}
        />
        <Redirect to="/" />
      </Switch>
    </Router>
  </ProvideAuth>,
  document.getElementById("root")
);
