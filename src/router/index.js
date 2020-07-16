import { Route, Switch, Link } from "react-router-dom";
import React, { Component, Fragment } from "react";
import Login from "../views/Login";
import Register from "../views/Register";
class RouterComponent extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
      </Fragment>
    );
  }
}

export default RouterComponent;
