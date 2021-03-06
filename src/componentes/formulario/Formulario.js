import React, { Component } from 'react';
import clienteAxios from '../../axios';
import './formulario.css'

class Formulario extends Component {
    state = {
            nombre:"",
            apellido:"",
            dni:"",
            observaciones:""
     }

     handleChange = event => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val });
     }

     handleSubmit = event => {
         event.preventDefault()
         
         let Objcliente = {
            nombre:this.state.nombre,
            apellido:this.state.apellido,
            dni:this.state.dni,  
            observaciones:this.state.observaciones
         }

     //Mandar cliente a la db con axios
     try {
        clienteAxios.post('/nuevo_invitado', Objcliente)    
        alert("Cliente Agregado Exitosamente!") 
       
    } catch (error) {
         alert("Error al insertar Cliente")
     }
     this.props.history.push("/")
     }

     volver=e=>{
         this.props.history.push("/")
     }

    render() { 
        return ( 
            <div className="formulario-container">
                <h1>Nuevo Cliente</h1>
                <h3 onClick={this.volver}>Volver</h3>
                <form  className="formulario">
                    
                    <p>Nombre</p>
                    <input type="text" name="nombre" placeholder="Nombre" onChange={this.handleChange}/>
                   
                    <p>Apellido</p>
                    <input type="text" name="apellido" placeholder="Apellido" onChange={this.handleChange}/>
                    
                    <p>DNI</p>
                    <input type="text" name="dni" placeholder="Dni" onChange={this.handleChange}/>

                    <p>Observaciones</p>
                    <textarea name="observaciones" rows="10" cols="30" onChange={this.handleChange}></textarea>   

                    <h3 onClick={this.handleSubmit}>Agregar Cliente</h3>
                </form>
                
            </div>
         );
    }
}
 
export default Formulario;