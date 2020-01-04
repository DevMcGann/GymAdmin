import React from 'react';

const Buscar = ({history}) => {

    const volver = e => {
        history.push("/")
    }

    return ( 
        <div>
            <h3 onClick={volver}>Volver</h3>
            <h1>Componente Buscar</h1>
        </div>

     );
}
 
export default Buscar;