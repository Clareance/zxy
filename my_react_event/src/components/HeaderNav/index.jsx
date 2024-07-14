import React from "react";
import './style.less'
import '../../css/iconfont.css'

const HeaderNav = ()=>{
    return(
        <div className="nav-header">
            <div className="header-left">北京</div>

            <div className="header-middle">
                
                    <input className="searchbox" ></input>
                
            
            </div>
            
            <div className="header-right">
            <i className="iconfont icon-huoji-01"></i>
            </div>
        </div>
    )
}

export default HeaderNav