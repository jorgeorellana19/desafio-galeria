
import './App.css';

import React from 'react';
import './index.css'
//importacion bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
//importacion Header, Card y Footer 
import Header from './components/Header.jsx'
import Card from './components/Card.jsx'
import Footer from './components/Footer';
//impotacion json
import data from './json/data.json'

const title="Danzas Bolivianas ";
const contenido="Las danzas bolivianas están influenciadas en las costumbres y creencias prehispánicas, indígenas, mestizas, tradiciones coloniales europeas y africanas evidenciando un importante resultado de mestizaje y sincretismo cultural.";

const color="primary";

const nombre='Jorge Orellana';


function App() {
  return  (
    <div>
      <Header title={title} color={color} />
      <div className="container">
        <div className="row justify-content-around">
        {data['arreglo'].map((elemento)=>(
            <Card 
              key={elemento.id}
              titulo={elemento.titulo}
              imagen={elemento.imagen}  
              descripcion={elemento.descripcion}
            />
          ))}
        </div>
      </div>
      <Footer contenido={contenido}  color={color} nombre={nombre}/>
    </div>
    

  );
}

export default App;
