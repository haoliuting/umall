import axios from "axios"
import qs from "qs"

//开发环境中使用 localhost:8080
let baseUrl = "/api"

//生产环境 打包 
// let baseUrl = ""

//菜单添加
export const reqMenuAdd = (form) => {
    return axios({
        url: baseUrl+"/api/menuadd",
        method: "post",
        data: qs.stringify(form)
    })
}
//菜单详情 一条
export const reqMenuDetail = (id) => {
    return axios({
        url: baseUrl+"/api/menuinfo",
        method: "get",
        params: {
            id: id
        }
    })
}
//菜单更新
export const reqMenuUpdate = (form) => {
    return axios({
        url: baseUrl+"/api/menuedit",
        method: "post",
        data: qs.stringify(form)
    })
}
//菜单删除
export const reqMenuDel = (id) => {
    return axios({
        url: baseUrl+"/api/menudelete",
        method: "post",
        data: qs.stringify({
            id: id
        })
    })
}
//菜单列表
export const reqMenuList = () => {
    return axios({
        url: baseUrl+"/api/menulist",
        method: "get",
        params: {
            istree: true
        }
    })
}

//banner列表
export const reqbannerList = () => {
    return axios({
        url: baseUrl+"/api/bannerlist",
        method: "get",
        params: {
            istree: true
        }
    })
}