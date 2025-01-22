import CommentCard from "./CommentCard";
import { useState } from "react";


const Comment=({comments,css})=>{
    
    const [replyToggle,setReplyToggle] = useState(false);

    const handleReplyClick=()=>{
        setReplyToggle(!replyToggle);
    }
    return (
        comments.map((comment)=>(
        <div key={comment.name}className={`${css}`}>
            <CommentCard  commentInfo={comment}/>
            <div className="ml-10 "> {/**Try adding this in the commentCard and check if works */}
                <h1 className="text-blue-800 font-semibold hover:cursor-pointer " onClick={handleReplyClick} >{`${replyToggle ? " ⃤      ": "▽"}Replies`}</h1>
                {replyToggle &&  <Comment css={"border-l-2"} comments={comment?.replies}/>}
                {/* <Comment css={"border-l-2"} comments={comment?.replies}/> */}
            </div>
        </div>
        ))
        
    )
}
export default Comment;