

import { StrictMode } from 'react'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Favorite from './Favorite.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children:[{
      path: "/favorite",
      Component:Favorite,
      children:[{
           path: 'more-nested',
           element: <p>more nested</p>,
      },
    ],
    },
    {
      path: "/about",
      element: 
       
       <p>this is a about </p>
       
     
     },
  
  
  ],
  },
 
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
