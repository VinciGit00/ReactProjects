import react, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [food, setFoodname] = useState("");
  const [days, setDays] = useState(0);
  const [newFoodName, setNewFoodName] = useState("");
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/read ").then((response) => {
      setFoodList(response.data);
    });
  }, []);

  const addToList = () => {
    console.log(food + days);
    Axios.post("http://localhost:3001/insert", { foodName: food, days: days });
  };

  const updateFood = (id) => {
    Axios.put("http://localhost:3001/update", {
      id: id,
      newFoodName: newFoodName,
    });
  };

  const deleteFood = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`, {});
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

      <div></div>

      <div className="bottone">
        <button type="button" class="btn btn-dark" onClick={addToList}>
          Add to list
        </button>
      </div>

      <h1>Food list</h1>
      {foodList.map((val, key) => {
        return (
          <div>
            <h2>{val.foodName}</h2>
            <h2>{val.daySinceIAte}</h2>
            <div>
              <button
                type="button"
                class="btn btn-dark"
                onClick={() => deleteFood(val._id)}
              >
                delete
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
