import { useEffect } from "react";
import LiveComment from "./LiveComment";
import { addMessage } from "../utils/Slices/chatSlice";
import {useDispatch,useSelector} from "react-redux";
import nameGenerator from "../utils/Helper/randomNameGenerator";
import generateRandomText from "../utils/Helper/randomSentenceGenerator";
import UserLiveComment from "./UserLiveComment";

const LiveChat = ()=>{
    const dispatch = useDispatch();
    const chatMessages = useSelector((store)=>store.chat.messages);
    useEffect(()=>{
        //API pooling
        const interval = setInterval(()=>{
            const randomName = nameGenerator(); 
            const randomMessage = generateRandomText(1,1);
            //dispatch it to store
            dispatch(addMessage({
                username:randomName,
                usermessage:randomMessage
            }));
            console.log("API Pooling")
        },10000 )

        //make sure to remove the setTimeout/setInterval
        return ()=>clearInterval(interval);
    },[])
    return(
        <div className="overflow-hidden w-full h-[465px] rounded-lg bg-slate-200 border-2 border-black flex flex-col justify-between">
            <div className="bg-yellow-300 flex-3 h-12 border-b-2 border-black">
                ChatBox Header
            </div>
             <div className="bg-green-300 flex-1 flex flex-col-reverse text-nowrap overflow-y-scroll">
                {
                    chatMessages && chatMessages.map((message,index)=>
                    <LiveComment key={index} name={message.username} message={message.usermessage}/>)
                }
                
            </div> 
            
            <div className=" flex-2 h-14 border-t-2 border-black">
                <UserLiveComment/>
            </div>
        </div>
    )
}

export default LiveChat;