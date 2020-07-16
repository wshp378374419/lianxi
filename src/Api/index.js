import axios from "axios";
let fetchData = axios.create({
  baseURL: "http://127.0.0.1:8088",
});
//登录
export async function login({ username, password }) {
  console.log(username, password, "login");
  return fetchData.get("/users", { params: { username, password } });
}
//注册
export async function register(data) {
  let res = await search(data);
  console.log(res);
  return !res.length
    ? fetchData.post("/users", { ...data })
    : "对不起用户名已经重复";
}

//查询是否注册
export async function search(data) {
  return fetchData.get("/users", { params: { username: data.username } });
}
