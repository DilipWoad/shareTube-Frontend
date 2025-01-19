import { commentData } from "../utils/MockData/commentMockData";
import Comment from "./Comment"
const CommentContainer=()=>{
    const datas = commentData;
    return(
        <>
            <div className="mx-7 my-10 text-2xl font-bold ">
                ({datas.length})Comments
            </div>
            <Comment comments={datas}/>
        </>
        
    )
}

export default CommentContainer;