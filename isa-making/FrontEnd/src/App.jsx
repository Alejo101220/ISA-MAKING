import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./Pages/Index";
import AdmSecion from "./Pages/AdmSecion";
import AdminPanel from "./Pages/AdminPanel";
import ProductCard from "./Pages/ProductCard";
import Carrito from "./Pages/Carrito";
import Hombre from "./Pages/Hombre";
import InicioSesion from "./Pages/InicioSesion";
import Mujer from "./Pages/Mujer";
import Niños from "./Pages/Niños";
import RecuperarContrasena from "./Pages/RecuperarContraseña";
import Registro from "./Pages/Registro";

function App() { 
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/admsecion" element={<AdmSecion />} />
                <Route path="/adminpanel" element={<AdminPanel />} />
                <Route path="/productcard" element={<ProductCard />} />
                <Route path="/carritocompra" element={<Carrito />} />
                <Route path="/hombre" element={<Hombre />} />                
                <Route path="/iniciosesion" element={<InicioSesion />} />                
                <Route path="/mujer" element={<Mujer />} />
                <Route path="/niños" element={<Niños />} /> 
                <Route path="/recuperarcontrasena" element={<RecuperarContrasena />} /> 
                <Route path="/registro" element={<Registro />} />
            </Routes>
        </BrowserRouter>
    )
}   

export default App