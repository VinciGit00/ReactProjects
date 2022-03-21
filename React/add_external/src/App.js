import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='padding'>
        <button onClick={window['clickButton']}>CLICK ME</button>
      </div>

      <div >
        <div id='orario' className='orario' ></div>
      </div>
      <div id='number' className='number'>
        0
      </div>
      <div className='pulsanti'>
        <button onClick={window['aggiungi']}>+</button>
        <button onClick={window['rimuovi']}>-</button>
      </div>
    </div>
  );
}

export default App;
