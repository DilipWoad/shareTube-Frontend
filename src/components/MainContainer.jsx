import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useEffect, useState } from "react";

const MainContainer=()=>{
    const isMenuOpen = useSelector((store)=>store.sidebar.sidebarStatus);
    console.log(isMenuOpen);
    const[videoContainerWidth,setVideoContainerWidth]=useState(isMenuOpen);
    console.log("outside",videoContainerWidth);
    useEffect(()=>{
        setVideoContainerWidth(isMenuOpen)
        console.log("inside",videoContainerWidth);
    }
    ,[isMenuOpen])
    
    return(
        <div className={` rounded-lg m-2 ${videoContainerWidth ? 'max-w-6xl':'w-full'} `}>
            <ButtonList/>
            <VideoContainer/>
        </div>
    )
}


export default MainContainer;