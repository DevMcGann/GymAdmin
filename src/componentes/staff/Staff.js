import React from 'react';

const Staff = ({history}) => {

    const volver = e => {
        history.push("/")
    }

    return (  
        <div>
             <h3 onClick={volver}>Volver</h3>
            <h1>Componente Staff</h1>
        </div>
        
    );
}
 
export default Staff;