import userIcon from "../assets/img/userIcon.png"
const LiveComment = ({name,message})=>{
    return(
        <div className="flex m-2 text-[16px] items-center">
            <div>
            <img className="w-8 hover:cursor-pointer" src={userIcon} alt="userLogo"/>
            </div>
            
            <div className="w-full text-wrap ml-2">
                <span className=" font-semibold">{name}</span>
                <span className="ml-2">{message}</span>
            </div>
            
        </div>
    )
}

export default LiveComment;