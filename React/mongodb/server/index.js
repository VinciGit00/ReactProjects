//For running the server: change the directory on server and write: "node index.js"
//Call the direct server (express server)
const express = require("express");
const mongoose = require("mongoose");
const app = express();

const FoodModel = require("./models/Food");

//Allow to receive informations from the frontend
app.use(express.json());

mongoose.connect(
  "mongodb+srv://MarcoVinci:MarcoMarco@cluster0.vh42z.mongodb.net/food?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
  }
);

app.get("/", async (req, res) => {
  const food = new FoodModel({ foodName: "Apple", daySinceIAte: 3 });

  try {
    await food.save();

    console.log("Inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
