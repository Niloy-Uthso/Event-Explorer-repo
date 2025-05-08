 import {
   createBrowserRouter,
    
 } from "react-router";
import Rootlayout from "../Rootlayout";
import Home from "../Pages/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import Eventdetails from "../Pages/Eventdetails";
import ErrorPage from "../Pages/ErrorPage";
import Extra from "../Pages/Extra";
import MyProfile from "../Pages/MyProfile";
 

    export  const router = createBrowserRouter([
    {
      path: "/",
       Component:Rootlayout,
       errorElement:<ErrorPage></ErrorPage>,
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
     },
     {
      path:"/extra",
      Component:Extra
     },
     {
      path:"/profile",
      Component:MyProfile
     }

       ]
    },
  ]);