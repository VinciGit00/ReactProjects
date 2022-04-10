import logo from "./logo.svg";
import "./App.css";
import React from "react";
import BottoneIncrementa from "./components/BottoneIncrementa";
import BottoneDecrementa from "./components/BottoneDecrementa";

class App extends React.Component {
  state = {
    number: 0,
    name: "Schiaccia un bottone",
    valore: "",
  };

  //Nel props posso passare anche la funzione globale
  increment = () => {
    this.setState({
      number: this.state.number + 1,
      name: "valore incrementato",
    });
    //Metto 9 perchè parte da 0 e non da 1
    if (this.state.number == 9) {
      this.setState({
        valore: "numero=10",
      });
    } else {
      this.setState({
        valore: "",
      });
    }
  };
  decrement = () => {
    this.setState({
      //Non devo specificare lo stato del number perchè è
      //sottointeso che sia dentro
      //lo stato
      number: this.state.number - 1,
      name: "valore decrementato",
    });
    //Metto 9 perchè parte da 0 e non da 1
    if (this.state.number == 9) {
      this.setState({
        valore: "numero=10",
      });
    } else {
      this.setState({
        valore: "",
      });
    }
  };

  render() {
    return (
      <div className="ContenitoreIniziale">
        <div className="center">
          <div className="Padding">
            <div>{this.state.number}</div>
          </div>

          <input type="text" className="text" value={this.state.name}></input>

          <div className="Padding">
            <input
              type="text"
              className="text"
              value={this.state.valore}
            ></input>
          </div>

          <div className="ButtonPadding">
            <BottoneIncrementa function={this.increment}></BottoneIncrementa>
          </div>
          <div>
            <BottoneDecrementa function={this.decrement}></BottoneDecrementa>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
