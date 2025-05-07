 import {
   createBrowserRouter,
    
 } from "react-router";
import Rootlayout from "../Rootlayout";
import Home from "../Pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Eventdetails from "../Pages/Eventdetails";


    export  const router = createBrowserRouter([
    {
      path: "/",
       Component:Rootlayout,
       children:[
       {
         path:"/",
          Component:Home,
          loader:()=>fetch('../data.json',)   
      },
      {
        path:"/login",
         Component:Login
     },
     {
      path:"/register",
       Component:Register
     },
     {
      path:"/:id",
      Component:Eventdetails,
      loader:()=>fetch('../data.json',)   
     }

       ]
    },
  ]);