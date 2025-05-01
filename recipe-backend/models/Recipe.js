const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  strMeal: String,
  strInstructions: String,
  ingredients: [String],
  strMealThumb: String,
  postedBy: String,
  postedDate: String,
  idMeal: String,
}, { timestamps: true });

module.exports = mongoose.model('Recipe', recipeSchema);
