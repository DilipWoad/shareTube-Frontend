import { useState } from "react";
import { commentData } from "../utils/MockData/commentMockData";
import Comment from "./Comment"
import { LOWER_ICON, UPPER_ICON } from "../utils/constant";
const CommentContainer=()=>{
    const[commentsOpen,setCommentsOpen] = useState(false);
    const datas = commentData;
    return(
        <div className="w-[855px] mt-10 bg-yellow-300 mx-7 rounded-lg overflow-hidden">
            <div className="text-2xl font-bold hover:cursor-pointer flex py-2 bg-sky-400 items-center" onClick={()=>setCommentsOpen(!commentsOpen)}>
                ({datas.length})Comments
                <div className={`w-5 mx-1 ${commentsOpen ? 'mt-1' : 'mt-2'} `}>
                    <img src={commentsOpen ? UPPER_ICON :LOWER_ICON} alt="expand-collapase"/>
                </div>
                
            </div>
            {
                commentsOpen && <Comment comments={datas} css={"bg-lime-500"}/>
            }
        </div>
        
    )
}

export default CommentContainer;