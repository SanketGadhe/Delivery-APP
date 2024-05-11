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
import Home from './Components/Home.jsx';
import Profile from './Components/Profile.jsx';
import Tracing from './Components/Tracing.jsx';
import PlaceOrder from './Components/PlaceOrder.jsx';
import Help from './Components/Help.jsx';
import MyDeliveriesPage from './Components/MyDeliveriesPage.jsx';
import TrackingPage from './Components/TrackingPage.jsx';

const route = createBrowserRouter(
  createRoutesFromElements([
    <Route path="/" element={<App />}>
      <Route path="" element={<Login />} />
      <Route path="Login" element={<Login/>} />
      <Route path="Register" element={<Signin />} />
      <Route path="Home" element={<Home />} />
      <Route path="Tracking" element={<TrackingPage />} />
      <Route path="Profile" element={<Profile />} />
      <Route path="AddDelivery" element={<PlaceOrder/>} />
      <Route path="Help" element={<Help/>} />
      <Route path="MyDeliveries" element={<MyDeliveriesPage/>} />
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
