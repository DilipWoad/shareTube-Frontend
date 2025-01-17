import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { menuClose } from "../utils/Slices/sidebarSlice";
import { useEffect } from "react";

const WatchVideo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //get params
  const videoParams = searchParams.get("v");
  const dispatch = useDispatch(); 
  useEffect(()=>{
    dispatch(menuClose());
  },[])
  return (
    <div className="mx-9 mt-28">
      <iframe
        className="rounded-xl"
        width="853"
        height="460"
        src={`https://www.youtube.com/embed/${videoParams}/?autoplay=1`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </div>
  );
};
export default WatchVideo;
