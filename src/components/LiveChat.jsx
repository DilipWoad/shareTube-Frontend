import { useEffect } from "react";
import chatMockData from "../utils/MockData/livechatMockData";
import LiveComment from "./LiveComment";
import { addMessage } from "../utils/Slices/chatSlice";
import {useDispatch,useSelector} from "react-redux";
const LiveChat = ()=>{
    const dispatch = useDispatch();
    const chatMessages = useSelector((store)=>store.chat.messages);
    const liveChatData = chatMockData;
    useEffect(()=>{
        //API pooling
        const interval = setInterval(()=>{
            const randomNumber = Math.floor(Math.random()*liveChatData.length-1); 
            //dispatch it to store
            dispatch(addMessage(liveChatData[randomNumber]));
            console.log("API Pooling")
        },3000)

        //make sure to remove the setTimeout/setInterval
        return ()=>clearInterval(interval);
    },[])
    return(
        <div className="overflow-hidden w-full h-[465px] rounded-lg bg-slate-200 border-2 border-black flex flex-col justify-between">
            <div className="bg-yellow-300 flex-3 h-12">
                ChatBox Header
            </div>
             <div className="bg-green-300 flex-1 flex flex-col-reverse text-nowrap overflow-y-scroll">
                {
                    chatMessages && chatMessages.map((message)=>
                    <LiveComment key={message.username} name={message.username} message={message.message}
                    />)
                }
                
            </div> 
            
            <div className="bg-violet-300 flex-2 h-14">
                Chat Comment
            </div>
        </div>
    )
}

export default LiveChat;