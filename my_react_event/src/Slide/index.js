import React, { useEffect, useRef } from "react";
import { useState } from "react";
import {Swiper,Image} from 'react-vant';
import "./style.less"
import image1 from "../images/banner1.png"
import image2 from "../images/banner2.png"
import image3 from "../images/banner3.png"

const images = [image1,image2,image3];
const changeBtn = (e)=>{
    console.log(e);
}
const FocusSlider = ()=>{


    return (
        // An highlighted block
      <div className="demo-swiper">
 

        {/* 如何在轮播图插件上面实现点击左右按钮图片切换 */}
        <Swiper   autoplay={2000}>
        {/* autoplay={2000} */}
        {images.map((image) => (
            
          <Swiper.Item key={image}>
            <Image lazyload src={image} />
          </Swiper.Item>
        ))}
      </Swiper>

     <div className="leftBtn" >&lt;</div>
     <div className="rightBtn" >&gt;</div>
    
     <div className="btnList">
        {/* <span>1</span>
        <span>2</span>
        <span>3</span> */}
     </div>

    </div>

      );
    
}


export default FocusSlider

