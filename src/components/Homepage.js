import React from "react";

import Button from '@mui/material/Button';
import ReactDOM from 'react-dom/client';

import './homepage.css';
import { Navigate, useNavigate } from "react-router-dom";
import Home from "./Home";
import App from "./App/App"
import UserDetails from "./userdetails";


const root = ReactDOM.createRoot(document.getElementById("root"));
const Handleclick = Event => {
    if(window.localStorage.getItem("token")!=0){

        root.render(

            <UserDetails/>

    )
        }
    else{
       alert("Login first") 
       window.location.href='./sign-in';
    }



    }

    



const Homepage = () =>{
    const navigate= useNavigate();
    return(
    <>
<div class="navbar">
    <div class="container">
    <a href="" class="logo">going<span>Dutch</span></a>


<nav>
    <ul class="primary-nav">
        <li class="current"><a href="#">Home</a></li>
        <li><a href="#">About us</a></li>
        <li><a href="#getstarted">Get started</a></li>
    </ul>

    <ul class="secondary-nav">  
        <li><a href="#">Contact</a></li>
        <li class="go-premium-cta"><a href="#">View your Events</a></li>
    </ul>
</nav>      





    
</div>
</div>

<div class="about">
<h2>About us</h2>

<br/>
<p><b>goingDutch</b> is a full-featured web app that makes it simple to split expenses and track borrowing and lending over time. Its helpful tools and user-friendly interface make it our top choice among bill-splitting apps. </p>

<p>It supports both simple and complicated payment scenarios, and it's particularly handy when you're traveling internationally and you need to split costs in a different currency.</p>
<br/>
<p>
    The app tracks borrowing and lending over time. And until the balance is settled, each person’s outstanding balance may go up and down. This app sends reminder notifications about your balances and you’ll find a tally of the amount you owe on the homepage. Payments can be settled with PayPal or Venmo directly from the app, or if the person who owes you pays in cash, you can record a cash payment to clear up the outstanding balance. 
</p>

<p>
    This app also allow users to reduce the number of trasactions pending because of lending or owing and makes them limited by taking an aggregate with eliminating the middle-man.
</p>
</div>

<div className="getstarted" id="getstarted">

So, to make it easy for you guys and split expenses within your group

<br/>
<br/>


<Button color="secondary" variant='contained' size="large" onClick={Handleclick}
    
>Create a Party</Button>

</div>


</>
    )
}



export default Homepage;