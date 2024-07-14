import React from "react";
import HeaderNav from "../../../components/HeaderNav"
import "./style.less"
import image from "../../../images/1.jpg"
// 用于渲染视图

const HomeHotView = (props)=>{
    console.log(props);
    return(
        <div className="hotproduct">
        <h3>{ props.title }</h3>
        <div className="hot-container">
            <ul className="clear-fix">
                {
                    props.data.map((element, index) => {
                        return (
                            <li key={index}>
                                <a href={element.link}>
                                    <img src={image} alt="" />
                                    <span>{element.title}</span>
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    </div>
    )
}

export default HomeHotView