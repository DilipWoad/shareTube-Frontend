import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { menuClose } from "../utils/Slices/sidebarSlice";
import { useEffect } from "react";
import CommentContainer from "./CommentContainer";
import ScrollToTop from "./ScrollToTop";
import LiveChat from "./LiveChat";

const WatchVideo = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  //get params
  const videoParams = searchParams.get("v");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(menuClose());
  }, []);
  return (
    <div className=" w-full">
      <ScrollToTop/>
      <div className="flex mt-24">
      <div className="ml-8 mr-6 ">
        <iframe
          className="rounded-xl"
          width="855"
          height="465"
          src={`https://www.youtube.com/embed/${videoParams}/?autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        
      </div>
      <div className="w-[30%]">
        <LiveChat/>
        </div> 
      </div>
      
      <CommentContainer/>
    </div>
  );
};
export default WatchVideo;
