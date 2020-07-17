import React, { Component, Fragment } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Home from "../views/container/Home";
import Login from "../views/container/Login";
import Register from "../views/container/Register";
class IndexRouter extends Component {
  render() {
    return (
      <Fragment>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/Login" component={Login} />
          <Route path="/register" component={Register} />
          <Redirect from="/" to="/home" exact></Redirect>
          <Route render={() => <h1>404</h1>} />
        </Switch>
      </Fragment>
    );
  }
}

export default IndexRouter;
