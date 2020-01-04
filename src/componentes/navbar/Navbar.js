import React from 'react';
import './navbar.css'
import {Link} from 'react-router-dom'


const Navbar = () => {
    return ( 
        <div className="contenedor">
            <div className="logo">
                <h1>GYM</h1>
            </div>
            <Link to="/nuevo">Nuevo Cliente</Link>
            <Link to="/buscar">Buscar</Link>
            <Link to="/deuda_vencida">Deuda Vencida</Link>
            <Link to="/staff">Staff</Link>
            <Link to="/acerca">Acerca de</Link>
        </div>
     );
}
 
export default Navbar;