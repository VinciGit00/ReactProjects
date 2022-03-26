import logo from './logo.svg';
import './App.css';
import React from 'react';
import BottoneIncrementa from './components/BottoneIncrementa';
import BottoneDecrementa  from './components/BottoneDecrementa';

class App extends React.Component {
  state = {
    number: 0
  }
//Nel props posso passare anche la funzione globale
  increment = () => {

    this.setState({
      number: this.state.number + 1
    })
  }
  decrement = () => {
    this.setState({
      //Non devo specificare lo stato del number perchè è 
      //sottointeso che sia dentro 
      //lo stato
      number: this.state.number - 1
    })
  }
  
  render() {
    return (
      <div className='ContenitoreIniziale'>
        <div className='center'>
          <div>
            {this.state.number}
          </div>
          <div className='ButtonPadding'>
            <BottoneIncrementa function = {this.increment}></BottoneIncrementa>
          </div>
          <div >
            
            <BottoneDecrementa function = {this.decrement}></BottoneDecrementa>
          </div>
        </div >
      </div>
    )
  }
}

export default App;
