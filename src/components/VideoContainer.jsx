import { useEffect,useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_URL } from "../utils/constant";
import { Link } from "react-router-dom";

const VideoContainer=()=>{
    const[videos,setVideos] = useState();
    const youtubeVideoData =async()=>{
       const response =  await fetch(YOUTUBE_VIDEOS_URL);
       const data = await response.json();
       console.log(data.items);
      setVideos(data.items);
    }
    useEffect(()=>{
        youtubeVideoData();

    },[])
    return(
        videos &&
        
        <div className="flex flex-wrap gap-7">
            {videos.map((video)=><Link key={video.id} to={{pathname:'/watch',search:`?v=${video.id}`}}><VideoCard info={video}/></Link>)}  
        </div>
    )
}

export default VideoContainer;