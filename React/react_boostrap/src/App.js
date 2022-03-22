import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    //Creazione della navbar
    <>
      <Navbar></Navbar>
      <div className='Container'>
        <h1>Cosa desideri ordinare?</h1>
        <hr />
        <div className='row'>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>

        </div>
      </div>
    </>
  );
}

export default App;
