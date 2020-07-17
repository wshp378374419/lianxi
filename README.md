## 创建项目

    create-react-app 项目名  （需要本地安装 create-react-app）
    npx create-react-app 项目

## 项目目录

    data
         ---- db.json
    public
        imgs/ 图片
    src /
        index.js  主文件
        App.js    跟组件
        App.css   全局css文件
        router    路由文件
              --- index.js
        store
              ---- index.js
              ---- reducers
                       reducer ...
              ---- actionTypes.js
              ---- actionCreator.js
        components
                 各种组件
        views
                 页面组件
        api
              ---- index.js  存放api接口
        untils
              ----  封装好的方法类
        assets
              ----  静态资源目录
    package.json
    readme.md

## 目前所需要的依赖

      redux react-redux axios antd redux-logger  node-sass sass-loader   react-router-dom

## 布局

      antd组件  Menu  默认高亮  --- path  --- 路由的信息

      其它组件

## db.json 数据

      1 json -- mongodb 非关系型数据库   ----  json
      list = [
            {
                  日用品
            },
            {
                  电子产品
            }
      ]

      2 mysql  --  关系型数据库  ----    表1 {关联id} 日用 wangshupeng123     表2{关联id}  表3  表4
       user: [
           {
                 id:123
                 username:"",
                 password:"".
                 list:[
                       {
                        id:1
                         parent_id:123
                       }
                 ]
                 type:1
           }
      ]

// users : { username,password,nickname,type:1,time,phone,shenfengzheng ,xuexiao ,学历,is_offer,img_rsrc}
