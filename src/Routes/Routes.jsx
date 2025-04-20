import { createBrowserRouter } from "react-router";

import Home from "../Pages/Home";
import MainLayout from "../Layouts/MainLayout";
import Favorites from "../Pages/Favorites/Favorites";
import About from "../Pages/About/About";

import PhoneDetails from "../Pages/PhoneDetails/PhoneDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

 export  const router = createBrowserRouter([
    {
      path: "/",
      Component: MainLayout,
      errorElement: <ErrorPage></ErrorPage> ,
      children:[
        
        {
         path: "/", 
         Component: Home,
         hydrateFallbackElement: <p>Loading</p>,
         loader: ()=> fetch('phones.json')
        },
        {
        path: "/favorites",
        Component:Favorites,
        
      },
      {
        path: "/about",
        Component: About,
         
       
       },
    
       {
        path: "/phone-details",
        Component: PhoneDetails,
       },
    ],
    },
   
  ]);