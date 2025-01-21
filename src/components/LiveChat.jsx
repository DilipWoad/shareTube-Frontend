const LiveChat = ()=>{
    return(
        <div className=" w-full h-full rounded-lg bg-slate-200 border-2 border-black flex flex-col justify-between">
            <div className="bg-yellow-300 flex-3 h-12">
                ChatBox Header
            </div>
            <div className="bg-green-300 flex-1">
                Chat Messages
            </div>
            <div className="bg-violet-300 flex-2 h-14">
                Chat Comment
            </div>
        </div>
    )
}

export default LiveChat;