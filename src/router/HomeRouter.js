import React, { Component, Fragment } from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import Classes from "../views/container/home/Classes";
import Worker from "../views/container/home/Worker";
import School from "../views/container/home/School";
import Company from "../views/container/home/Company";
import Students from "../views/container/home/Students";

class IndexRouter extends Component {
  render() {
    let { path } = this.props.match;
    return (
      <Fragment>
        <Switch>
          <Route path={path} exact component={School} />
          <Route path={path + "/classes"} component={Classes} />
          <Route path={path + "/worker"} component={Worker} />

          <Route path={path + "/company"} component={Company} />
          <Route path={path + "/students"} component={Students} />
          {/* <Redirect from={path} to={path + "/school"} exact></Redirect> */}
        </Switch>
      </Fragment>
    );
  }
}

export default IndexRouter;
