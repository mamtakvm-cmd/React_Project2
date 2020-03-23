import React from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter,Route,Link} from 'react-router-dom'
import Home from './component/Home'
import Post from './component/post'
import Profile from './component/profile'




ReactDom.render(
    <BrowserRouter>
        <header>
        <Link to="/">Home</Link>
        <Link to="/Post">Posts</Link>
        <Link to="/Profile">Profile</Link>
        </header>
        
   
    <Route exact path="/" component={Home}></Route>
    <Route path="/Post" component={Post}></Route>
    <Route path="/Profile" component={Profile}></Route>


    </BrowserRouter>
    
   
    
    ,document.getElementById("root"));
