import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../containers/Home";
import Login from "../containers/Login";
import Register from "../containers/Register";

function Router(){
    return (
    
        <Routes>
            <Route exact path = "/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            
        </Routes>
    
    )
}

export default Router;