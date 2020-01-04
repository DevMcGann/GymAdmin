import React from 'react';

const Deuda_Vencida = ({history}) => {

    const volver = e => {
        history.push("/")
    }

    return (  
        <div>
             <h3 onClick={volver}>Volver</h3>
            <h1>Componente Deuda Vencida</h1>
        </div>
        
    );
}
 
export default Deuda_Vencida;