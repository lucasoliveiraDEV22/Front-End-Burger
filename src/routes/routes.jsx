import React from "react";
import {  Routes, Route} from 'react-router-dom'
import Login from "../containers/Login";
import Register from "../containers/Register";

function Router(){
    return (
    
        <Routes>
            
            <Route path="/login" element={<Login />} />
            <Route path="/cadastro" element={<Register />} />
            
        </Routes>
    
    )
}

export default Router;