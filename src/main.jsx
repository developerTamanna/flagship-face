

import { StrictMode } from 'react'

import {
  RouterProvider,
} from "react-router";
import { createRoot } from 'react-dom/client'
import './index.css'


import { router } from './Routes/Routes.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
