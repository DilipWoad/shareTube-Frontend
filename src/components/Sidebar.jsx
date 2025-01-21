import { useSelector } from "react-redux"
import { Link, useLocation } from "react-router-dom"


const Sidebar=()=>{
    const hideSidebar = useSelector((store)=>store?.sidebar?.sidebarStatus)
    const {pathname} = useLocation();
    return(
        hideSidebar &&
        <div className={`mt-20 pl-2 rounded-md rounded-t-none shadow-2xl min-w-48 ${pathname!=='/' && 'ml-2 absolute bg-white opacity-95'}`}>
            <ul className="py-2">
                <li><Link to={'/'}>Home</Link></li>
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