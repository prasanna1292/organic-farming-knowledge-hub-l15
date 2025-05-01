import React from 'react'
import {NavLink} from 'react-router-dom';
import "./Navbar.css"
const Navbar = () => {
  return (
    <div>
      <div className="back">             
        <div className='one'>
                    <ul>
                      <li><h>Organic Farming</h></li>
                      <li><NavLink to="/" >Home</NavLink> </li>
                      <li><NavLink to="/Forum" >Forum</NavLink> </li>
                      <li><NavLink to="/ExpertsCorner" >ExpertCorner</NavLink> </li>
                      <li><NavLink to="/SuccessStories" >SuccessStories</NavLink> </li>
                      <li><NavLink to="Login/Login" >Login/Sign up</NavLink> </li>
                      <li><NavLink to="Login/SignUp"></NavLink></li>
                    </ul>
        </div>
  
    </div>
    </div>
  )
}

export default Navbar