const VideoCard=({info})=>{
    const {statistics,snippet} = info;
    const {channelTitle,title,thumbnails} = snippet;
    return(
        <div className="w-72 p-2 shadow-xl rounded-lg h-[270px] ">
            <div className="w-full">
                <img className="rounded-lg" src={thumbnails?.medium?.url} alt="thumbnail"/>
            </div>
            <div className="flex">
            <div className="pr-2 pt-1">
                Logo
            </div>
            <div className="">
                <h2 className="py-1 font-semibold h-14 overflow-hidden">{title}</h2>
                <h3 className="font-semibold text-[#aaa] overflow-hidden h-6">{channelTitle}</h3>
                <h3 className="text-sm font-semibold text-[#aaa]">{statistics?.viewCount} views</h3>
            </div>
            </div>
        </div>
    )
}

export default VideoCard;