import React, { Component } from "react";
import { Menu, Switch } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import Top from "../../components/Top";
import HomeRouter from "../../router/HomeRouter";

const { SubMenu } = Menu;

class Home extends Component {
  constructor(props, context) {
    super(props, context);
    //lishen
    this.state = {
      theme: "dark",
      path: this.props.location.pathname,
    };
  }

  changeTheme = (value) => {
    this.setState({
      theme: value ? "dark" : "light",
    });
  };

  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    console.log(this.props.user);
    return (
      <div>
        <Top {...this.props}></Top>
        <div className="content">
          <div className="left">
            <div className="left_top">
              <p>张三</p>
              <p>这家伙很懒什么也没留下</p>
            </div>

            <Menu
              theme={this.state.theme}
              onClick={this.handleClick}
              style={{ width: 256 }}
              defaultOpenKeys={["sub1"]}
              selectedKeys={[this.state.path]}
              mode="inline"
              onClick={(item) => {
                this.setState({
                  path: item.key,
                });
                this.props.history.push(item.key);
              }}
            >
              <Menu.Item key="/homes">校区</Menu.Item>

              <Menu.Item key="/home/classes">班级列表</Menu.Item>
              <Menu.Item key="/home/students">学生列表</Menu.Item>

              <Menu.Item key="/home/worker">员工列表</Menu.Item>
              <Menu.Item key="/home/company">公司列表</Menu.Item>

              <Menu.Item key="12">Option 12</Menu.Item>
            </Menu>
          </div>

          <div className="right">
            <HomeRouter {...this.props}></HomeRouter>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
