import stlogo from "../assets/img/sharetube-logo.png";
import menulogo from "../assets/img/menu.png";
import userlogo from "../assets/img/userIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { handleSidebar } from "../utils/Slices/sidebarSlice";
import { useEffect, useRef, useState } from "react";
import { YOUTUBE_SEARCH_URL } from "../utils/constant";
import { addSearchResults, clearSearchCaches } from "../utils/Slices/searchSlice";


const Header = () => {
  const dispatch = useDispatch();
  const searchSelector = useSelector((store)=>store?.search);
  const [searchText, setSearchText] = useState("");
  const [searchResults,setSearchResults] = useState(null);
  const [showSuggestion,setShowSuggestion] = useState(false);

  const youtubeSearchRef = useRef("");

  const handleMenuClick = () => {
    dispatch(handleSidebar());
  };

  //use it for searching video Through Queries
  const handleSearch = () => {
    dispatch(clearSearchCaches());
    const searchTextQuries = youtubeSearchRef?.current.value;
    console.log(searchTextQuries);
  };

  const youtubeSearch = async () => {
    const response = await fetch(YOUTUBE_SEARCH_URL+searchText);
    const data = await response.json();
    setSearchResults(data[1]);
    //also add it to the store
    //{"dil"}
    dispatch(addSearchResults({
      [searchText]:data[1]
    }));
  };

  useEffect(() => {
    //make this api call after 200 ms
    //if difference btw 2 keystroke is less then 200ms then dismiss it
    const timer = setTimeout(()=>{
      //if present in searchSelector then display the present values in store
      if(searchSelector[searchText]){
        //if present setSearchSuggestion from the store and not from API
        setSearchResults(searchSelector[searchText]);
      }else{
        youtubeSearch();
      } 
    },200);

    //so this will be called while unmounting the component
    //when a new letter is pressed then useEffect unmount the 
    //current compo and re-render the component
    //in this render new setTimer is called every time 
    //so will unmounting we will just clear the runnning timer
    return (()=>{
        clearTimeout(timer);
    })
  }, [searchText]);

  return (
    <div className="bg-white fixed w-full grid grid-flow-col p-5 mx-2 shadow-lg rounded-lg rounded-b-none  items-center">
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
      <div className=" col-span-10 px-10 flex flex-col items-center ">
        <div className="">
            <input
            className="hover:shadow-xl border border-gray-500 py-2 px-4 rounded-l-full w-[500px]"
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
            showSuggestion && searchText && <div className="bg-white mt-12 mr-16 w-[500px] absolute rounded-lg shadow-2xl">
            <ul className="p-6 ">
                {searchResults.map((result)=>(
                    <li key={result} className="my-2 hover:bg-gray-300 p-1"><span className="mx-2">⌕</span> {result}</li>
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
