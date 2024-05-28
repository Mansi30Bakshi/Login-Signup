import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home.jsx'
import Stays from './Components/Stays.jsx'
import Experien from './Components/Experien.jsx'
import OnlineExp from './Components/OnlineExp.jsx'
import YourHome from './Components/YourHome.jsx'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path="/stays" element={<Stays />} />
      <Route path="/Experien" element={<Experien/>}/>
      <Route path="/OnlineExp" element={<OnlineExp/>}/>
      <Route path="/YourHome" element={<YourHome/>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
