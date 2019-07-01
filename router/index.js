//引控制器模块
const pagesController = require("../controllers/pagesController.js")
//封装路由模块
const express = require("express")
//Roouter()构造函数创建的路由对象可以被当做一个中间健
const router = express.Router()
//获取前台页面
router.get("/", pagesController.getIndexPage)

    .get("/list", pagesController.getListPage)

    .get("/detail", pagesController.getDetailPage)
    //获取后台管理页面,统一添加admin作为前缀
    .get("/admin", pagesController.getAdminPage)


module.exports = router