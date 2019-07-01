//1 引入express
const express = require("express")
//引入路由模块
const router = require("./router/index.js")
//引入ejs
const ejs = require("ejs")


//2 创建应用
const app = express()

// 3添加对端口的监听
app.listen(8888, () => {

    console.log("http://127.0.0.1:8888")
})
//设置模板引擎为EJS
app.set("view engine", "ejs")
//指定模板文件目录,后期使用EJS模板
app.set("views", "views")
//4.加载静态资源的托管
app.use("/assets", express.static("assets"))
app.use("/uploads", express.static("uploads"))
// 5.添加路由器配置
app.use(router)