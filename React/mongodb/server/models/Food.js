const mongoose = require("mongoose");

//Schema della collezione
const FoodSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  daySinceIAte: {
    type: Number,
    required: true,
  },
});

const Food = mongoose.model("Food", FoodSchema);
module.exports = Food;
