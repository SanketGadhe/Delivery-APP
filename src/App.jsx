import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Signin from './Components/Signin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='bg-[#f1f4f8]'> 
    {/* <Login/> */}
    <Signin/>
    </div>
   </>
  )
}

export default App
