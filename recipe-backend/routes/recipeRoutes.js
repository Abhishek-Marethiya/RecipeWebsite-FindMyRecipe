const express=require('express');
const router=express.Router();
const Recipe=require('../models/Recipe.js')
const protect=require('../middleware/protect.js')

router.post('/addrecipe', async (req, res) => {
    try {
      const { strMeal, postedBy } = req.body;

    const existingRecipe = await Recipe.findOne({ strMeal, postedBy });
    if (existingRecipe) {
      return res.status(400).json({ error: "You already posted a recipe with this name." });
    }
      const recipe = new Recipe(req.body);
      await recipe.save();
      res.status(201).json(recipe);
    } catch (err) {
      res.status(500).json({ error: 'Failed to add recipe' });
    }
  });
router.get('/', async (req, res) => {
    const recipes = await Recipe.find({});
    res.json(recipes);
  });




  module.exports=router;