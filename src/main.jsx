import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Projects from './pages/Projects.jsx'
import Singin from './pages/Singin.jsx'
import SignUp from './pages/SignUp.jsx'


const router = createBrowserRouter([
  {
    path:"/",
    element: <Home/>
  },
  {
    path:"/about",
    element:<About/>
  },
  {
    path:"/dashboard",
    element:<Dashboard/>
  },
  {
    path:"/projects",
    element:<Projects/>
  },
  {
    path:"/sign-in",
    element:<Singin/>
  },
  {
    path:"/sign-up",
    element:<SignUp/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
