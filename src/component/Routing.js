import React from 'react';
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Home from './Home';
import Profile from './profile';
import Post from './post';
import PostDetails from './PostDetails'
import Form from './Form'

const Router = ()=>{
 
    return(
        <BrowserRouter>
        <header>


        <nav className="navbar navbar-inverse">
  <div className="container-fluid">
    <div className="navbar-header">
      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>                        
      </button>
     
    </div>
    <div className="collapse navbar-collapse" id="myNavbar">
      <ul className="nav navbar-nav">
          <li><Link to = "/">Welcome</Link></li> 
          <li><Link to = "/Home">Home</Link></li>
          <li><Link to = "/Post">Post</Link></li>
          <li><Link to = "/Profile">Profile</Link></li>
          <li><Link to="/Form">Form</Link></li>
         
        
        </ul>
      
    </div>
  </div>
</nav>
  
</header>
<Route exact path="/" ><h1>Welcome to React</h1></Route>
<Route exact path="/Home" component={Home}></Route>
<Route exact path="/Post" component={Post}></Route>
<Route  path="/Post/:id"component={PostDetails}></Route>
<Route  path="/Profile" component={Profile}></Route>
<Route path="/form" component={Form}></Route>
</BrowserRouter>

    )


}
export default Router;
