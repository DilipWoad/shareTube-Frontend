const VideoCard=({info,css})=>{
    const {statistics,snippet} = info;
    const {channelTitle,title,thumbnails} = snippet;
    //w-72 -> w-96
    return(
        <div className={`${css} h-auto p-2 shadow-xl rounded-lg   `}>
            <div className="w-full ">
                <img className="rounded-lg w-full" src={thumbnails?.medium?.url} alt="thumbnail"/>
            </div>
            <div className="flex">
            <div className="pr-2 pt-1">
                Logo
            </div>
            <div className="">
                <h2 className="py-1 font-semibold h-14 overflow-hidden">{title}</h2>
                <h3 className="font-semibold text-slate-600 overflow-hidden h-6">{channelTitle}</h3>
                <h3 className="text-sm font-semibold text-slate-600">{statistics?.viewCount} views</h3>
            </div>
            </div>
        </div>
    )
}

export const AdVideoCard=({info})=>{
    return(
        <div className="border-2 border-red-500">
            <VideoCard info={info}/>
        </div>
    )
}

export default VideoCard;