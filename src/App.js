import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Welcome from './pages/Welcome';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp';
import Products from './pages/Products';
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    // <div>
    //   <h1>Let's Go</h1>
    // </div>
    <MainLayout>

      <Routes>
        <Route path='/' element={<Welcome />}></Route>
        {/* <Route path='/login' element={<LogIn />}></Route> */}
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/products' element={<Products />}></Route>
        {/* <Route path='/web-internal/home' element={<Home/>}></Route> */}
      </Routes>
    </MainLayout>
  );
}

export default App;
