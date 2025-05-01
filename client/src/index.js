import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './Navbar';
import Home from './Home';
import  Forum from './Forum';
import SuccessStories from './SuccessStories';
import ExpertsCorner from './ExpertsCorner';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Footer';
import SignUp from './Login/SignUp.js';
import Login from './Login/Login';


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
  <Navbar/>
   <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/Forum" element={<Forum/>}></Route>
      <Route path="/SuccessStories" element={<SuccessStories/>}></Route>
      <Route path="/ExpertsCorner" element={<ExpertsCorner/>}></Route>
      <Route path="/Login/SignUp" element={<SignUp/>}></Route>
      <Route path="/Login/Login" element={<Login/>}></Route>
      
      </Routes>
   <Footer/>
  </BrowserRouter>
);