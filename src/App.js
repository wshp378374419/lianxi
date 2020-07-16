import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import RouterComponent from "./router";
import "antd/dist/antd.css";
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    //登录验证
    this.redirectLogin();
    this.props.history.listen(() => {
      this.redirectLogin();
    });
  }
  redirectLogin = () => {
    console.log(this.props.is_login, "is_login");
    if (!this.props.is_login) {
      this.props.history.replace("/login");
    }
  };
  render() {
    return (
      <div>
        <RouterComponent></RouterComponent>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    is_login: state.is_login,
  };
}

export default withRouter(connect(mapStateToProps)(App));
