import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './Login'
import Signin from './Components/Signin'
import { Outlet } from 'react-router-dom'
import Navbar from './Components/Navbar'
import { useLocation } from 'react-router-dom';
import Carousel from './Components/Carousel'

function App() {
  const [count, setCount] = useState(0)
  const location = useLocation();
  const [mobilenav, setmobilenav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Here you can add logic to update your application theme based on darkMode state
    // For example, you can update your CSS classes or apply a CSS framework's dark mode class
    // You can also store the darkMode state in local storage to persist the user's preference
  };
  
  
const ifnav=()=>{
  if(mobilenav){
    setmobilenav(false)
  }
}
  const isAuthRoute = location.pathname === '/'|| location.pathname === '/login'||location.pathname === '/Login' || location.pathname === '/Register';
  return (
    <>
    <div className='whole bg-[#f1f4f8] pb-20 h-[1080px]' onClick={ifnav}> 
    {!isAuthRoute ?<Navbar mobilenav={mobilenav} setmobilenav={setmobilenav} darkMode={darkMode} toggleDarkMode={toggleDarkMode}/>:''}
    <Outlet/>
    </div>
   </>
  )
}

export default App
