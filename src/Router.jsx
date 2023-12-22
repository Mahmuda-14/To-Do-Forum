
import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Login from "./Authentication/Login";
import SignUp from "./Authentication/SignUp";
import Home from "./Home";
import DashBoard from "./DashBoard/DashBoard";
import Add from "./DashBoard/Add";
import To from "./DashBoard/To";
import Activity from "./DashBoard/Activity";
import User from "./Components/User";
import New from "./Components/New";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>

      },
      {
        path: '/signup',
        element: <SignUp></SignUp>

      }
      ,
      {
        path: '/user',
        element: <User></User>

      },
      {
        path: '/new',
        element: <New></New>

      }

    ]
  },
  {
    path: "dashboard",
    element: <DashBoard></DashBoard>,
    children: [
      {
        path:"add",
        element:<Add></Add>,
        
      },
      {
        path:"my",
        element:<To></To>,
       
      },{
        path:"all",
        element:<Activity></Activity>,
       
      },
 

    ]
  }
])
