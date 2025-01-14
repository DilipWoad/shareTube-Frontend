import stlogo from '../assets/img/sharetube-logo.png'
import menulogo from '../assets/img/menu.png'
import userlogo from '../assets/img/userIcon.png'
const Header=()=>{
    return(
        <div className="grid grid-flow-col p-5 m-2 shadow-lg rounded-lg">
            <div className="flex col-span-1 items-center space-x-2">
                <img className='h-8' src={menulogo} alt="menu"/>
                <img className='h-8' src={stlogo} alt="yt-logo"/>
            </div>
            <div className=' flex items-center justify-center  col-span-10 '>
                <input className='w-1/2 border border-gray-500 p-2 rounded-l-full' type="input" placeholder="Search"></input>
                <button className='border border-gray-500 p-2 rounded-r-full bg-gray-200'>Search</button>
                <button></button>
            </div>
            <div className=' col-span-1'>
                <img className='h-8 rounded-full ' src={userlogo}
                alt="user"/>
            </div>
        </div>
    )
}

export default Header;