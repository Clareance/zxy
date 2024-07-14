import React from "react";
import "./style.less"
import { NavLink } from "react-router-dom";
import '../../css/iconfont.css'

const BottomNav = () =>{
    return(
    <div className="nav-footer">
        <ul >
            <li>
                <NavLink to="/" className="NavLink" activeClassName='active'>
                    <span className="iconfont icon-diaoyubing-01"></span>
                    首页               
                </NavLink>
            </li>
            <li>
                <NavLink to="/life" className="NavLink" activeClassName='active'>
                    <i className="iconfont icon-hanbao-01"></i>
                    生活服务               
                </NavLink>
            </li>
            <li>
                <NavLink to="/shop" className="NavLink" activeClassName='active'>
                    <i className="iconfont icon-huoji-01"></i>
                    商城             
                </NavLink>
            </li>
            <li>
                <NavLink to="/user" className="NavLink" activeClassName='active'>
                    <i className="iconfont icon-mianbao-01"></i>
                    我的               
                </NavLink>
            </li>
        </ul>
    </div>)
}

export default BottomNav