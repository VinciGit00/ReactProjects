import react, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [food, setFoodname] = useState("");
  const [days, setDays] = useState(0);

  useEffect(() => {
    Axios.get("http://localhost:3001/read ").then((response) => {
      setFoodList(response.data);
    });
  }, []);

  const [foodList, setFoodList] = useState([]);

  const addToList = () => {
    console.log(food + days);
    Axios.post("http://localhost:3001/insert", { foodName: food, days: days });
  };

  return (
    <div className="App">
      <h1>Crud App with Mern</h1>
      <label>Food name</label>
      <input
        type="text"
        onChange={(event) => {
          setFoodname(event.target.value);
        }}
      ></input>
      <label>Day since you ate it</label>
      <input
        type="number"
        onChange={(event) => {
          setDays(event.target.value);
        }}
      ></input>
      <button className="button" onClick={addToList}>
        Add to list
      </button>
      <h1>Food list</h1>
      {foodList.map((val, key) => {
        return (
          <div>
            <h2>{val.foodName}</h2>
            <h2>{val.daySinceIAte}</h2>
          </div>
        );
      })}
    </div>
  );
}

export default App;
