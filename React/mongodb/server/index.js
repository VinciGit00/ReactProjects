//For running the server: change the directory on server and write: "node index.js"
//To use nodeDemon use "npm run devStart"
//Call the direct server (express server)
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

const FoodModel = require("./models/Food");
const { $where } = require("./models/Food");

//Allow to receive informations from the frontend
app.use(express.json());
app.use(cors());

mongoose.connect(
  "mongodb+srv://MarcoVinci:MarcoMarco@cluster0.vh42z.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

/*app.get("/", async (req, res) => {
  const food = new FoodModel({ foodName: "Apple", daySinceIAte: 3 });
  try {
    await food.save();

    console.log("Inserted data");
  } catch (err) {
    console.log(err);
  }
});*/
//(a, async): il primo è il path e il secondo è una funzione
app.post("/insert", async (req, res) => {
  const foodName = req.body.foodName;
  const days = req.body.days;

  const food = new FoodModel({ foodName: foodName, daySinceIAte: days });
  try {
    await food.save();

    console.log("Inserted data");
  } catch (err) {
    console.log(err);
  }
});

//Update function
app.put("/update", async (req, res) => {
  const NewFoodName = req.body.NewFoodName;
  const id = req.body.id;

  try {
    await FoodModel.findById(id, (err, updatedFood) => {
      updatedFood.foodName = NewFoodName;
      updatedFood.save();
      res.send("update");
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await FoodModel.findByIdAndRemove(id).exec();
  res.send("deleted");
  console.log("Deleted data");
});

// Se uso http://localhost:3001/read
// mi permette di ottenere i risultati del database
app.get("/read", async (req, res) => {
  FoodModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
