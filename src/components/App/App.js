import React,{useState} from 'react';
import './App.css';
import { Router, Route, Routes, Link, BrowserRouter} from 'react-router-dom'
import Dashboard from '../Dashboard/Dashboard';
import Preferences from '../Preferences/Preferences';
import Login from '../Login/Login';
import SignUp from '../Signup/Signup';
import Homepage from '../Homepage';
import UserDetails from '../userdetails';
import Home from '../Home';


 const App=()=>{


  
  return (
    <BrowserRouter>
<Routes>

<Route path="/dashboard" element={<Homepage/>} />

<Route exact path="/dashboard/createparty" element={<Home />} />
<Route exact path="/createparty" element={<Home />} />

<Route exact path="/" element={<Login />} />
<Route path="/sign-in" element={<Login />} />
<Route path="/sign-up" element={<SignUp />} />
<Route path="/userDetails" element={<UserDetails />} />
</Routes>
</BrowserRouter>




  )
}

export default App;

