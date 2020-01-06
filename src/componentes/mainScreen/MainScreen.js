import React from 'react';
import Navbar from '../navbar/Navbar'
import './mainscreen.css'
import Listado from '../listado/Listado';



const MainScreen = () => {
    return ( 

        <div className="contenedor-principal">
            <section className="navbar">
                <Navbar />
            </section>

            <section className="lista">
                <Listado/>
            </section>

            
        </div>
     );
}
 
export default MainScreen;