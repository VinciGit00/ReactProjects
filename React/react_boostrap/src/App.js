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

  state = {
    cards: [
      { id: 0, nome: "California", prezzo: 1.99, immagine: california },
      { id: 1, nome: "dragon", prezzo: 2.50, immagine: dragon },
      { id: 2, nome: "dynamite", prezzo: 4.99, immagine: dynamite },
      { id: 3, nome: "philadelphia", prezzo: 1.39, immagine: philadelphia },
      { id: 4, nome: "rainbow", prezzo: 11.99, immagine: rainbow },
      { id: 5, nome: "shrimp", prezzo: 21.99, immagine: shrimp },
    ]

  }

  render() {
    return (
      //Creazione della navbar
      <>
        <Navbar></Navbar>
        <div className='Container'>
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className='row'>

            {this.state.cards.map(card => (
              <Card key={card.id}
                nome={card.nome}
                prezzo={card.prezzo}
                immagine={card.immagine}

              ></Card>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
