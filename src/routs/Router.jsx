 import {
   createBrowserRouter,
    
 } from "react-router";
import Rootlayout from "../Rootlayout";
import Home from "../Pages/Home";


    export  const router = createBrowserRouter([
    {
      path: "/",
       Component:Rootlayout,
       children:[
       {
         path:"/",
          Component:Home
      }

       ]
    },
  ]);