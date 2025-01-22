import { useState } from "react";
import { useDispatch } from "react-redux";
import { addMessage } from "../utils/Slices/chatSlice";

const UserLiveComment=()=>{
    const dispatch = useDispatch();
    const[userChatMessage,setUserChatMessage] = useState("");
    const handleChatSubmit=(e)=>{
        e.preventDefault();
        console.log(userChatMessage);
        //dispatch it to store
        dispatch(addMessage({
            username:"Dilip Woad",
            usermessage:userChatMessage
        }))
        //now we can make the input empty
        setUserChatMessage("");
    }
    return(
        <div className="bg-sky-300 h-full flex items-center justify-center">
            <form onSubmit={handleChatSubmit}>
                <input className="h-8 w-72 mx-2 rounded-md px-2" placeholder="Chat..." value={userChatMessage} onChange={(e)=>setUserChatMessage(e.target.value)}/>
                <button className="bg-white w-20 p-1 rounded-md hover:bg-gray-200 hover:font-semibold">Send</button>
            </form>
        </div>
    )
}

export default UserLiveComment;