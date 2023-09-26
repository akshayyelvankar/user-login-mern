import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Homes from './Components/home/Homes'
import Header from './Components/header/header';
import { Routes, Route } from 'react-router-dom';
import Footer from './Components/footer/Footer';
import SignUp from './Components/SignUp';
import Login from './Components/Login';
import Mobile from './Components/mobile/Mobile';
import Users from './Users';
function App() {
  
  return (
    <div className="">
      <Header />
      <Routes>
        <Route path='/home' element={<Homes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<SignUp />} />
      </Routes>
       {/* <Mobile/> */}
       <Users/>
      <Footer />
    </div>
  );
}
export default App;
