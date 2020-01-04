import React from 'react';
import './navbar.css'

const Navbar = () => {
    return ( 
        <div className="contenedor">
            <div className="logo">
                <h1>GYM</h1>
            </div>
            <h3>Nuevo Cliente</h3>
            <h3>Buscar</h3>
            <h3>Deuda Vencia</h3>
            <h3>Staff</h3>
            <h3>Acerca de...</h3>
        </div>
     );
}
 
export default Navbar;