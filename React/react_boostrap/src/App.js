import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';
import california from './images/california.png';
import dragon from './images/dragon.png';
import dynamite from './images/dynamite.png';
import philadelphia from './images/philadelphia.png';
import rainbow from './images/rainbow.png';
import shrimp from './images/shrimp.png';

//App è rappresentato da una funzione
//Non rappresenta documenti dinamicamente 
//function App() {

//Funziona in modo dinamico e mi permette di mettere i props
class App extends Component {
  render() {
    return (
      //Creazione della navbar
      <>
        <Navbar></Navbar>
        <div className='Container'>
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className='row'>
            <Card immagine={california}
              nome="california"
              prezzo={1.99}
            ></Card>
            <Card immagine={dragon}
              nome="dragon"
              prezzo={1.99}
            ></Card>
            <Card immagine={dynamite}
              nome="dynamite"
              prezzo={1.99}
            ></Card>
            <Card immagine={philadelphia}
              nome="philadelphia"
              prezzo={1.99}
            ></Card>
            <Card immagine={rainbow}
              nome="rainbow"
              prezzo={1.99}
            ></Card>
            <Card immagine={shrimp}
              nome="shrimp"
              prezzo={1.99}
            ></Card>


          </div>
        </div>
      </>
    );
  }
}

export default App;
