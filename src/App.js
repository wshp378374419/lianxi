import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import IndexRouter from "./router/IndexRouter";
import "antd/dist/antd.css";
import "./app.css";

class App extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    this.change_login();
  }

  change_login = () => {
    //获取id
    let is_login = localStorage.getItem("user_id");
    console.log(is_login, "is_login");
    if (!is_login) {
      this.props.history.replace("/login");
    }
  };

  render() {
    return (
      <div>
        <IndexRouter></IndexRouter>
      </div>
    );
  }
}
export default withRouter(App);
