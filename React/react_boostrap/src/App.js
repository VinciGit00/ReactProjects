import logo from "./logo.svg";
import React, { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import california from "./images/california.png";
import dragon from "./images/dragon.png";
import dynamite from "./images/dynamite.png";
import philadelphia from "./images/philadelphia.png";
import rainbow from "./images/rainbow.png";
import shrimp from "./images/shrimp.png";

//App è rappresentato da una funzione
//Non rappresenta documenti dinamicamente
//function App() {

//Funziona in modo dinamico e mi permette di mettere i props
class App extends Component {
  state = {
    cards: [
      {
        id: 0,
        nome: "California",
        prezzo: 1.99,
        immagine: california,
        quantità: 0,
      },
      { id: 1, nome: "dragon", prezzo: 2.5, immagine: dragon, quantità: 0 },
      {
        id: 2,
        nome: "dynamite",
        prezzo: 4.99,
        immagine: dynamite,
        quantità: 0,
      },
      {
        id: 3,
        nome: "philadelphia",
        prezzo: 1.39,
        immagine: philadelphia,
        quantità: 0,
      },
      { id: 4, nome: "rainbow", prezzo: 11.99, immagine: rainbow, quantità: 0 },
      { id: 5, nome: "shrimp", prezzo: 21.99, immagine: shrimp, quantità: 0 },
    ],
  };

  //è una funzione di tipo globale
  //cardId è l'oggetto che passo
  handleDelete = (cardId) => {
    //Filtra la listaw
    const cards = this.state.cards.filter((card) => card.id !== cardId);
    //Aggiornamento dello state
    //Il primo cards indica quello dello state, il secondo indica la variabiles
    this.setState({ cards: cards });
  };

  //card è l'oggetto che itero
  handleIncrement = (card) => {
    const cards = [...this.state.cards];
    const id = cards.indexOf(card);
    cards[id] = { ...card };
    cards[id].quantità++;
    this.setState({ cards });
  };

  render() {
    return (
      //Creazione della navbar
      <>
        <Navbar></Navbar>
        <div className="Container">
          <h1>Cosa desideri ordinare?</h1>
          <hr />
          <div className="row">
            {this.state.cards.map((card) => (
              <Card
                key={card.id}
                //Passo il metodo per gestire
                //Non passo il parametro perchè
                //mi interessa solo il nome della funzione
                //il parametro lo passo dentro alla card
                onDelete={this.handleDelete}
                //Passo tutto il componente che itero
                onIncrement={this.handleIncrement}
                //card è l'oggetto intero che passo dentro al file
                card={card}
              ></Card>
            ))}
          </div>
        </div>
      </>
    );
  }
}

export default App;
