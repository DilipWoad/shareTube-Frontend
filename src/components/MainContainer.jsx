import { useSelector } from "react-redux";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { useEffect, useState } from "react";

const MainContainer=()=>{
    const isMenuOpen = useSelector((store)=>store.sidebar.sidebarStatus);
    const[videoContainerWidth,setVideoContainerWidth]=useState(isMenuOpen);
    useEffect(()=>{
        setVideoContainerWidth(isMenuOpen)
    }
    ,[isMenuOpen])
    
    return(
        <div className={`mt-[82px] rounded-lg m-2 ${videoContainerWidth ? 'max-w-6xl':'w-full'} `}>
            <ButtonList/>
            <VideoContainer/>
        </div>
    )
}


export default MainContainer;