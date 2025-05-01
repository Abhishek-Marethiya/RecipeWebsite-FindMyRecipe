import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { v4 as uuidv4 } from 'uuid';

function AddRecipe() {

  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    recipeName: '',
    instructions: '',
    ingredients: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!currentUser) {
      toast.error('Please log in to post a recipe.');
      return;
    }
    const { recipeName, instructions, ingredients } = formData;

    if (!recipeName || !instructions || !ingredients) {
      toast.error("All fields are mandatory!");
      return;
    }

    const today = new Date();
    const postedDate = today.toISOString().split('T')[0]; 

    const newRecipe = {
      idMeal: uuidv4(),  
      strMeal: recipeName,
      strInstructions: instructions,
      ingredients: ingredients.split(',').map(item => item.trim()), // array
      postedBy: currentUser?.name || "Anonymous",
      postedDate: postedDate
      //later add image feature
    };

    try {
      const res = await fetch('https://findmyrecipe-backend.onrender.com/api/recipes/addrecipe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newRecipe)
      });
      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to add recipe");
        return;
      }

      toast.success("Recipe added successfully!");
      navigate('/recipes');
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong!");
    }
  };

  // if (!currentUser) {
  //   return <p style={{textAlign: 'center'}}>Please <a href="/login">Login</a> to add a recipe.</p>;
  // }

  return (
    <div className="add-recipe-page">
      <h2>Add Your Recipe</h2>
      <form className="add-recipe-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="recipeName"
          value={formData.recipeName}
          placeholder="Enter Recipe Name"
          onChange={handleChange}
        />
        <textarea
          name="instructions"
          value={formData.instructions}
          placeholder="Write Instructions"
          onChange={handleChange}
        ></textarea>
        <textarea
          name="ingredients"
          value={formData.ingredients}
          placeholder="Ingredients (comma separated)"
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="submit-recipe-btn">Submit Recipe</button>
      </form>
    </div>
  );
}

export default AddRecipe;
