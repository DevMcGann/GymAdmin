import React from 'react';

const Acerca_De = ({history}) => {

    const volver = e => {
        history.push("/")
    }

    return (  
        <div>
             <h3 onClick={volver}>Volver</h3>
            <h1>Componente Acerca de...</h1>
        </div>
        
    );
}
 
export default Acerca_De;