import React, { Component } from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { register } from "../../api";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
  checked: [],
};

const openNotification = () => {
  notification.open({
    message: "恭喜",
    duration: 3,
    description: "注册成功,即将跳转到登录页面",
    onClick: () => {
      console.log("Notification Clicked!");
    },
  });
};

class Login extends Component {
  onFinish = (values) => {
    register(values).then((res) => {
      if (typeof res === "string") {
        let basic_username = document.querySelector("#basic_username");

        basic_username.value = "";
        alert(res);
      } else {
        openNotification();
        setTimeout(() => {
          this.props.history.replace("/login");
        }, 3000);
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
          initialValues={{ type: 1 }}
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

          <Form.Item {...tailLayout} name="type" valuePropName="checked">
            <Checkbox>学生</Checkbox>
            <Checkbox>员工</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              注册
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default Login;
