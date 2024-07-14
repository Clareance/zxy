import React,{useState,useEffect} from "react";
import api from "../../../api"
import HomeHotView from "../HomeHotView";
//用于获取后台数据

const HomeHotList = ()=>{
    const [hot1List,setHot1List] = useState([])
    const [hot2List,setHot2List] = useState([])
    useEffect(()=>{
        api.getHomeHot1().then(res =>{
            if(res.data.status === 200){
                // console.log(res.data.result);
                setHot1List(res.data.result)
            }
        })
    },[])

    useEffect(() =>{
        api.getHomeHot2().then(res =>{
            if(res.data.status === 200){
                // console.log(res.data.result);
                setHot2List(res.data.result)
            }
        })
    },[])
    return (<div>
        {
            hot1List.length>0?
            <HomeHotView data={hot1List}></HomeHotView> :
            <div>等待数据加载</div>
        }
        {
            hot2List.length>0?
            <HomeHotView data={hot2List}></HomeHotView> :
            <div>等待数据加载</div>
        }
    </div>)
}

export default HomeHotList