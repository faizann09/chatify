import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Left from './home/Left/Left.jsx'
import Right from './home/Right/Right.jsx'
import Logout from './home/left1/Logout.jsx'
import Signup from './component/signup.jsx'
import Login from './component/login.jsx'
import { useAuth } from './context/AuthProvider.jsx'
import { Routes, Route, Navigate } from "react-router-dom";
import Loading from './component/loading.jsx'
import { Toaster } from "react-hot-toast";



function App() {

  const { authUser, setAuthUser } = useAuth();
  console.log(authUser);


  return (
    <>
      {/* <Loading/> */}
      <Routes>
        <Route path='/' element={
          authUser ? (
           <div className="flex h-screen">
            <div className="drawer">
  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    {/* Page content here */}
    <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
  </div>
  <div className="drawer-side">
    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
    <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
      {/* Sidebar content here */}
      <li><a>Sidebar Item 1</a></li>
      <li><a>Sidebar Item 2</a></li>
    </ul>
  </div>
</div>
            {/* <Logout />
            <Left />
            <div className="w-[70%]">
    <Right /> */}
  </div>
          </div> ): (
            <Navigate to={"/login"}/>
          )
        } />
        <Route path='/login' element={authUser?<Navigate to={"/"}/>:<Login/>}/>
        <Route path='/signup' element={authUser?<Navigate to={"/"}/>:<Signup/>}/>
      </Routes>
       <Toaster />
    </>
  )

}

export default App
