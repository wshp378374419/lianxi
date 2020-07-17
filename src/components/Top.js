import React from "react";

function Top(props) {
  let is_login = localStorage.getItem("user_id");
  return (
    <div className="top">
      <div
        className="left"
        onClick={() => {
          props.history.push("/");
        }}
      >
        logo
      </div>
      <ul className="right">
        <li>你好,张三</li>
        <li onClick={() => props.history.replace("/login")}>登录</li>
        <li
          onClick={() => {
            localStorage.removeItem("user_id");
            props.history.replace("/login");
          }}
        >
          退出
        </li>
        <li>注册</li>
      </ul>
    </div>
  );
}

export default Top;
