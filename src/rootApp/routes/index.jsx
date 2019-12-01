import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import publicRoutes from "./public";
import privateRoutes from "./private";

class Routes extends Component {
  render() {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    return (
      <Switch>
        {isLoggedIn &&
          privateRoutes.map(route => (
            <Route
              component={route.component}
              path={route.path}
              key={route.id}
            />
          ))}
        {publicRoutes.map(route => (
          <Route component={route.component} path={route.path} key={route.id} />
        ))}
      </Switch>
    );
  }
}

export default Routes;
