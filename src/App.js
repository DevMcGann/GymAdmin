import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//componentes
import MainScreen from './componentes/mainScreen/MainScreen';
import Formulario from '../src/componentes/formulario/Formulario'
import Buscar from './componentes/buscar/Buscar';
import Deuda_Vencida from './componentes/deuda_vencida/Deuda_Vencida';
import Staff from './componentes/staff/Staff';
import Acerca_De from './componentes/acerca_de/Acerca_De'


function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainScreen} />
          <Route path="/nuevo" exact component={Formulario} />
          <Route path="/buscar" exact component={Buscar} />
          <Route path="/deuda_vencida" exact component={Deuda_Vencida} />
          <Route path="/staff" exact component={Staff} />
          <Route path="/acerca" exact component={Acerca_De} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
