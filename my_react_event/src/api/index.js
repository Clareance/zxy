// import axios  from "../utils/request";
import axios from "axios";

//路径地址
const base = {

    baseURL:"http://localhost:5566",
    homehot1:"/api/home/hot1",
    homehot2:"/api/home/hot2",
}

//请求方法
const api = {
    // 获取首页热门产品
    getHomeHot1(){
        return axios.get(base.baseURL + base.homehot1)
    },
    getHomeHot2(){
        return axios.get(base.baseURL + base.homehot2)
    }
}

export default api;