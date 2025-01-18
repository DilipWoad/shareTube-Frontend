import { commentData } from "../utils/MockData/commentMockData";
import CommentCard from "./CommentCard";
import { useState } from "react";
const Comment=()=>{
    const datas = commentData;
    const [replyToggle,setReplyToggle] = useState(false);

    const handleReplyClick=()=>{
        setReplyToggle(!replyToggle);
    }
    return(
        <>
        <div className="mx-7 my-10 text-2xl font-bold ">
            (15)Comments
        </div>
        <div className="mx-7">
            {datas.map((data)=> 
                <div key={data.name}className="">
                    <CommentCard  commentInfo={data}/>
                    <div className="ml-10"> {/**Try adding this in the commentCard and check if works */}
                        <h1 className="text-blue-800 font-semibold hover:cursor-pointer " onClick={handleReplyClick} >{`${replyToggle ? " ⃤      ": "▽"}Replies`}</h1>
                        {replyToggle && <CommentCard commentInfo={data?.replies}/>}
                    </div>
                </div>)}
        </div>
        </>
    )
}

export default Comment;