import React, { Component } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { login } from "../../api";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const openNotification = () => {
  notification.open({
    message: "恭喜",
    duration: 3,
    description: "登录成功，3秒后跳转到首页",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

class Login extends Component {
  onFinish = (values) => {
    login(values).then(({ data }) => {
      // console.log(res);
      if (data.length > 0) {
        openNotification();
        setTimeout(() => this.props.history.replace("/"), 3000);
        localStorage.setItem("user_id", data[0].id);
        // 跳转到首页
        // 存储登录状态
      } else {
        alert("用户名或者密码错误");
      }
    });
  };

  onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  render() {
    return (
      <div className="login">
        <Form
          className="form"
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={this.onFinish}
          onFinishFailed={this.onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>

            <Button onClick={() => this.props.history.replace("/register")}>
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
