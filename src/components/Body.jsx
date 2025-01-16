import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import Sidebar from "./Sidebar";

const Body=()=>{
    return(
        <div className="flex flex-row">
            <Sidebar/>
            <Outlet>
            <   MainContainer/>
            </Outlet>
        </div>
    )
}


export default Body;