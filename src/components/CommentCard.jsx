import userLogo from "../assets/img/userIcon.png"
const CommentCard=({commentInfo})=>{
    const {name,text} = commentInfo;
    
    return(
        <div className="flex my-4">
            <div className=" p-2 ">
            <img className="w-10" src={userLogo} alt="user-logo"/>
            </div>
            <div className=" p-2 w-[800px] mt-2">
                <h2 className="font-bold mb-2">{name}</h2>
                <p className="">{text}</p>
            </div>
        </div>
    )
}

export default CommentCard;