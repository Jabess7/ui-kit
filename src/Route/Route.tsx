import React from "react";

import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "../Pages/Home";
import Erro from "../Pages/Erro";

const Router = () => {

    return(
        <BrowserRouter>    
            <Routes>
                <Route  path="/" element={<Home />}/> 
                <Route  path="*" element={<Erro />}/> 
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
