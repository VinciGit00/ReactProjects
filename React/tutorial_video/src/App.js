import React, { useState } from "react";
import Stampa from "./Stampa";
import Post from "./FacebookPost";
//PROPS


//JSX -> estensione di javascript per creare documenti
class App extends React.Component {

  //Sono arrivato al minuto 50
  //Componente fatto con delle classi
  state = {
    number: 0,
    //è un contenitore di dati
    posts: [
      { author: "Andrea", description: "Oggi sto facendo react" },
      { author: "Marco", description: "Oggi sto facendo la spesa" },
      { author: "Claudia", description: "Oggi sto facendo la brava" }]
  }

  //Metodo per diminuire il numero
  increment = () => {
    this.setState({
      number: this.state.number + 1,
    })
  }

  //Faccio finta che sia un Json con i dati
  setPosts = () => {
    this.setState({
      posts: [
        { author: "Andrea", description: "Oggi sto facendo react" },
        { author: "Marco", description: "Oggi sto facendo la spesa" },
        { author: "Claudia", description: "Oggi sto facendo la brava" }

      ]
    })
  }

  render() {
    // Console.log("Hello from console");
    const stampa = () => {
      console.log("stampa")

    };

    return (
      <div>
        <h1>Ciao mondo</h1>
        <h2>Ciao mondo</h2>
        <h3>Ciao mondo</h3>
        <h4>Ciao mondo</h4>
        <button onClick={() => console.log("Hello from button")}>Cliccami 1 </button>
        <br></br>
        <div className="ButtonPadding">
          <button onClick={stampa}>Cliccami 2</button>
        </div>
        <div>
          <Stampa />
        </div>

        <Post author="Andrea" description="La mia giornata"></Post>
        <Post author="Billy" description="Post1"></Post>
        <Post author="Johny" description="Post2"></Post>
        <Post author="Bob" description="Post3"></Post>
        <div className="Container">

          <h3>Counter: {this.state.number}</h3>
          <div className="ButtonPaddinfLeft">
            <button onClick={this.increment} >Aumenta</button>
          </div>

        </div>

      </div>
    );
  }
}

/*function App() {
  const [posts, setPosts] = useState([
    { author: "Andrea", description: "Oggi sto facendo react" },
    { author: "Marco", description: "Oggi sto facendo la spesa" },
    { author: "Claudia", description: "Oggi sto facendo la brava" }
  ])

  return (
    <div className="Container">
      {posts.map(post =>
        //onsole.log(post),
        <Post author={post.author} description={post.description} />
      )}

    </div>
  )
}*/

export default App;