import { useState } from 'react';


function App() {

  //Variabili globali
  //calc contiene una stringa con tutta la visione del
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");

  const ops = ['/', '*', '+', '-', '.'];

  //value è l'argomento della funzione
  const updateCal = value => {
    //Chiamo un'altra funzione
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) {
      return;
    }
    //Fa un update della stringa
    setCalc(calc + value);

    if (!ops.includes(value)) {
      //eval permette di ottenere un risultato a partire da una stringa
      setResult(eval(calc + value).toString())
    }
  }

  //Creo i numeri della calcolatrice tramite un ciclo for
  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCal(i.toString())}
          key={i}>
          {i}
        </button>
      )
    }
    return digits;
  }

  const calculate = () => {
    //Permette di fare il calcolo
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if (calc == '') {
      return;
    }
    const value = calc.slice(0, -1);
    setCalc(value)
  }

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {result ? <span>{result}</span> : ''}
          {calc || "0"}
        </div>
        <div className="operators">

          <button onClick={() => updateCal('/')} >/</button>
          <button onClick={() => updateCal('*')}>*</button>
          <button onClick={() => updateCal('+')}>+</button>
          <button onClick={() => updateCal('-')}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>
        <div className="digits">
          {createDigits()}
        </div>

        <div className='digits'>
          <button onClick={() => updateCal('0')}>0</button>
          <button onClick={() => updateCal('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>

    </div>
  );
}
export default App;