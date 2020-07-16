import React, { Component } from "react";
import { Form, Input, Button, Checkbox } from "antd";
import { connect } from "react-redux";
import { change_login } from "../store/actionCreator";
import { login } from "../Api";
const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 16 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

class Login extends Component {
  onFinish = (values) => {
    login({ ...values }).then((res) => {
      if (res.data.length) {
        this.props.onChangeLogin();
      } else {
        alert("用户名或密码不正确");
      }
    });
    console.log("Success:", values);
  };
  render() {
    console.log(this.props.is_login);
    return (
      <div className="login">
        <Form
          className="form"
          {...layout}
          name="basic"
          initialValues={{ remember: false }}
          onFinish={this.onFinish}
          onFinishFailed={onFinishFailed}
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
              登录
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    is_login: state.is_login,
  };
}
function mapDispatch(dispatch) {
  return {
    onChangeLogin: () => dispatch(change_login()),
  };
}
export default connect(mapStateToProps, mapDispatch)(Login);
