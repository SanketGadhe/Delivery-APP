import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Login from './Login.jsx';
import Signin from './Components/Signin.jsx';

const route = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route path="" element={<Login />} />
      <Route path="Login" element={<Login/>} />
      <Route path="Register" element={<Signin />} />
      {/* <Route path="Read" element={<Landing />} />
      <Route path="Learn" element={<Landing />} />
      <Route path="Contact" element={<Signup />} />
      <Route path="Signup" element={<Signup />} />
      <Route path="Print" element={<Print />} /> */}
    </Route>,
  ])
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={route}>

</RouterProvider>
)
