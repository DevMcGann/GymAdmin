import React,{useState, useEffect} from 'react';
import Clientemin from '../cliente_min/Cliente_min'
import clienteAxios from '../../axios'
import './listado.css'

const Listado = () => {

    const [listaClientes, setListaClientes] = useState([])

    
    //query a la api
    const consultarAPI = async () =>{
        const invitadosConsulta = await clienteAxios.get('/invitados')  
        setListaClientes(invitadosConsulta.data);
    }

    useEffect( ()=>{
        consultarAPI();
    }, [listaClientes]);  //cuando invitados cambie, vuelve a ejecutar consultarAPI



    return ( 
        <div className="listado">
            <h1>Listado de Clientes</h1>
            <ul>
                {listaClientes.map(cliente => ( 
                    <Clientemin
                        key ={cliente._id}
                        cliente={cliente}
                    />
                ))}
            </ul>
        </div>
     );
}
 
export default Listado;