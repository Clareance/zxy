import React from "react";
import HeaderNav from "../../components/HeaderNav"
import FocusSlider from "../../Slide/index"
import HomeHotList  from "./HomeHotList";
import "./style.less"

const Home = ()=>{
    return(
        <div >
            <HeaderNav />
            <FocusSlider/>

            <HomeHotList />
            {/* <img src="../images/image1.png"/> */}
            <div className="heightbox"></div>
        </div>
    )
}

export default Home;