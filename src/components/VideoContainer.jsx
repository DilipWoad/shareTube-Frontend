import { useEffect,useState } from "react";
import VideoCard from "./VideoCard";
import { YOUTUBE_VIDEOS_URL } from "../utils/constant";

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
            {videos.map((video)=><VideoCard key={video.id} info={video}/>)}
        </div>
    )
}

export default VideoContainer;