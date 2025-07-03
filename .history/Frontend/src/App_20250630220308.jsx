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


function App() {



  return 
      const [authUser,setAuthUser]=useAuth();
      console.log(authUser)
  //   <>
      

      {/* <div className='flex h-screen'>

        <Logout />
        <Left />
        <Right />

      </div> */}
      {/* <Signup/> */}
      {/* <Login/> */}
    </>

  )
}

export default App
