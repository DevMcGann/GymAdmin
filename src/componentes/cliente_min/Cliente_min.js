import React from 'react';
import './cliente_min.css'
import {Link} from 'react-router-dom'
import foto from '../../fotos/chalmers.jpg'

const Cliente_min = ({cliente}) => {

    const { _id, nombre, apellido, dni } = cliente;


    return ( 
        <li>
            <div className="clientemin">
                <div className="foto">
                    <img src={foto} alt=""/>
                </div>
                <div className="datos">
                    <Link to={`/cliente/${dni}`}><p>{nombre} {apellido}</p></Link>
                </div>
            </div>
        </li>
        
     );
}
 
export default Cliente_min;