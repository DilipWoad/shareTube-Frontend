import stlogo from "../assets/img/sharetube-logo.png";
import menulogo from "../assets/img/menu.png";
import userlogo from "../assets/img/userIcon.png";
import { useDispatch } from "react-redux";
import { handleSidebar } from "../utils/Slices/sidebarSlice";
import { useEffect, useRef, useState } from "react";
import { YOUTUBE_SEARCH_URL } from "../utils/constant";


const Header = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults,setSearchResults] = useState(null);
  const [showSuggestion,setShowSuggestion] = useState(false);

  const dispatch = useDispatch();

  const youtubeSearchRef = useRef("");


  const handleMenuClick = () => {
    dispatch(handleSidebar());
  };

  //use it for searching video Through Queries
  const handleSearch = async () => {
    const searchTextQuries = youtubeSearchRef?.current.value;
    console.log(searchTextQuries);
  };

  const youtubeSearch = async () => {
    const response = await fetch(YOUTUBE_SEARCH_URL+searchText);
    const data = await response.json();
    setSearchResults(data[1]);
    console.log(data[0]);
  };

  useEffect(() => {
    //make this api call after 200 ms
    //if difference btw 2 keystroke is less then 200ms then dismiss it
    const timer = setTimeout(()=>youtubeSearch(),200);

    //so this will be called while unmounting the component
    //when a new letter is pressed then useEffect unmount the 
    //current compo and re-render the component
    //in this render new setTimer is called every time 
    //so will unmounting we will just clear the runnning timer
    return (()=>{
        clearTimeout(timer);
    })
  }, [searchText]);

  console.log(searchText);
  return (
    <div className="bg-white fixed w-full grid grid-flow-col p-5 mx-2 shadow-lg rounded-lg">
      <div className="flex col-span-1 items-center space-x-2">
        <img
          onClick={handleMenuClick}
          className="h-8 hover:cursor-pointer hover:rounded-full hover:bg-gray-400"
          src={menulogo}
          alt="menu"
        />
        <a href="/">
          <img className="h-8" src={stlogo} alt="yt-logo" />
        </a>
      </div>
      <div className=" col-span-10 px-10 ">
        <div className="">
            <input
            className=" border border-gray-500 py-2 px-4 rounded-l-full w-[450px]"
            type="input"
            placeholder="Search"
            ref={youtubeSearchRef}
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            onFocus={()=>setShowSuggestion(true)}
            onBlur={()=>setShowSuggestion(false)}
            ></input>
            <button
                className="border border-gray-500 p-2 rounded-r-full bg-gray-200"
                onClick={handleSearch}
            >
                Search
            </button>
        </div>
        {
            showSuggestion && <div className="bg-white fixed w-4/12 rounded-lg mt-[1px] shadow-2xl">
            <ul className="p-6 ">
                {searchResults.map((result)=>(
                    <li className="my-2 hover:bg-gray-300 p-1"><span className="mx-2">⌕</span> {result}</li>
                ))}
            </ul>
            </div>
        }
        
        <button></button>
      </div>
      <div className=" col-span-1">
        <img className="h-8 rounded-full " src={userlogo} alt="user" />
      </div>
    </div>
  );
};

export default Header;
