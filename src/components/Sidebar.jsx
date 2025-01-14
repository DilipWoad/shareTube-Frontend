import { useSelector } from "react-redux"

const Sidebar=()=>{
    const hideSidebar = useSelector((store)=>store?.sidebar?.sidebarStatus)
    return(
        hideSidebar &&
        <div className="pl-2 rounded-md shadow-lg w-48 ">
            <ul className="py-2">
                <li> Home </li>
                <li> Shorts </li>
                <li> Subscriptions</li>
            </ul>
            <h1 className="font-bold py-2">You</h1>
            <ul>
                <li>History</li>
                <li>Playlists</li>
                <li>Watch Later</li>
                <li>Liked videos</li>
                <li>Your videos</li>
            </ul>
            <h1 className="font-bold py-2">Subscriptions</h1>
            <ul>
                <li>Alan Becker</li>
                <li>Drog BABA</li>
                <li>IShowSpeed</li>
                <li>Pirate Software</li>
                <li>3Blue1Brown</li>
            </ul>

            <h1 className="font-bold py-2">Explor</h1>
            <ul>
                <li>Trending</li>
                <li>Music</li>
                <li>Sport</li>
                <li>Films</li>
                <li>News</li>
                <li>Live</li>
            </ul>
        </div>
    )
}

export default Sidebar