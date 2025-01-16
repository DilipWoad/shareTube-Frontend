import Body from "./components/Body";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";
import WatchVideo from "./components/WatchVideo";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<Body/>,
    children:[
      {
        path:"/",
        element:<MainContainer/>
      },
      {
        path:'watch',
        element:<WatchVideo/>
      }
    ]
  }
])
const App = ()=>{
  return(
    <div  className="">
      <Header/>
      <RouterProvider router={appRouter}>
        <Body/>
      </RouterProvider>
    </div>
    
      
    
  )
}


export default App;