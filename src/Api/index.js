import axios from "axios";
let fetchData = axios.create({
  baseURL: "http://127.0.0.1:8088", //路径
});

// json-server    文档   增删改查    restful风格接口
//登录
export async function login(data) {
  return await fetchData.get("/users", {
    params: { username: data.username, password: data.password },
  });
}

// login({ name }).then((res) => console.log(res));

//注册
export async function register(data) {
  console.log(data, "data");
  // data -- 用户名和密码
  let res = await user_repeat(data);
  console.log(res);
  return res.data.length > 0
    ? "对不起，用户名已经重复"
    : await fetchData.post("/users", {
        ...data,
      });
}

// /地址?username=username   --->  查到 -- 返回对象  查不到就是 []

//验证用户名是否重复
export async function user_repeat(data) {
  return await fetchData.get("/users", {
    params: { username: data.username },
  });
}
