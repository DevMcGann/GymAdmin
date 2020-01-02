import React,{useState} from 'react';
import './App.css';
import axios from 'axios'


function App() {

  const [mensaje, setMensaje] = useState("")

  const handleClick = () => {
    let msj = axios.get("http://localhost:5000/mensaje");
    console.log(msj)
    setMensaje(msj)
  }

  return (
    <div className="App">

      <h1>Buenas!</h1>
      <h2 onClick={handleClick}> Presioname para obtener algo del servidor </h2>
      {mensaje ? <p>{mensaje}</p> : null}
    </div>
  );
}

export default App;
