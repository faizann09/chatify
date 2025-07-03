import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Left from './home/Left/Left.jsx'
import Right from './home/Right/Right.jsx'

function App() {
  

  return (
    <>
      <div className='flex '>
        <Left/>
      <Right/>
      </div>
    </>
    
  )
}

export default App
