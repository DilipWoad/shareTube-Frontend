import { useEffect,useState } from "react";
import VideoCard,{AdVideoCard} from "./VideoCard";
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
        <div className="mt-5 flex flex-wrap justify-center gap-7 rounded-lg mx-5 shadow-2xl">
            <AdVideoCard info={videos[0]}/>
            {videos.map((video)=><Link key={video.id} to={{pathname:'/watch',search:`?v=${video.id}`}}><VideoCard info={video}/></Link>)}  
        </div>
    )
}

export default VideoContainer;