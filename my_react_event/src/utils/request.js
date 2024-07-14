import axios from "axios"
import { error } from "console";
import { config } from "process";
import qs from "querystring"

const errorHandle = (status,info) =>{
    switch(status){
        case 400:
            console.log("当前请求无法被服务器理解");
            break;
        case 401:
            console.log('认证失败');
            break;
        case 403:
            console.log('403');
            break;
        case 404:
            console.log('404');
            break;
        default:
            console.log(info);
            break;
    }
}

// 创建axios实例对象
const instance = axios.create({
  
    timeout:5000
})

// 处理拦截器
// 请求拦截
instance.interceptors.request.use(
    config=>{
        if(config.method === 'post'){
            config.data = qs.stringify(config.data)
        }
        return config
    },
    error =>Promise.reject(error)
)

//响应拦截
instance.interceptors.response.use(
    response => response.status === 200? Promise.resolve(response):Promise.reject(response),
    error =>{
        const {response} = error;
        errorHandle(response.status,response.info);
    }
)

export default instance