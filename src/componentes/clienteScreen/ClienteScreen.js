import React from 'react';
import clienteAxios from '../../axios'
import './clientescreen.css'

const ClienteScreen = ({dni}) => {

    const {dnibuscar} = dni


    const volver=e=>{
        this.props.history.push("/")
    }

    return ( 
        <div className="cliente">
            <h3 onClick={volver}>Volver</h3>
            <p>{dnibuscar}</p>
        </div>
     );
}
 
export default ClienteScreen;