import logo from './logo.svg';
import './App.css';
import React from 'react';

class App extends React.Component {
  state = {
    number: 0
  }

  increment = () => {

    this.setState({
      number: this.state.number + 1
    })
  }
  decrement = () => {
    this.setState({
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
            <button onClick={this.increment} className="Button">Incrementa</button>
          </div>
          <div >
            <button onClick={this.decrement} className="Button">Decrementa</button>
          </div>
        </div >
      </div>
    )
  }
}

export default App;
