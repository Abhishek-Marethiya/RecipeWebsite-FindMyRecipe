import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FavoriteContext } from '../context/FavoriteContext';
import { AuthContext } from '../context/AuthContext';


function RecipeCard({recipe}) {
  const navigate=useNavigate();
  // context se lena h
  const {favorites, addToFavorites, removeFromFavorites}=useContext(FavoriteContext);
  const {currentUser}=useContext(AuthContext);
  const isAlreadyFav= favorites.some(item=>item.idMeal===recipe.idMeal);

  
  const handleAddAndDeletefav=()=>{
    if(!currentUser) 
      {
        navigate('/login');
          alert("Please log in to add favorites");
          return;
      }
    console.log(isAlreadyFav);
    
    if(isAlreadyFav){
      removeFromFavorites(recipe);
    }
    else{
      addToFavorites(recipe);
    }
  }

  return (
    <div className="recipe-card">
    <div className="recipe-image">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
    </div>
    <div className="recipe-info">
      <p className="recipe-name" >{recipe.strMeal}</p>
      <p className="recipe-category">{recipe.strCategory}</p>
    </div>
    <div className="card-btns">
      <button onClick={()=>navigate(`/recipedetail/${recipe.idMeal}`)}>view detail</button>
      <div className="card-fav-icon" onClick={handleAddAndDeletefav}>{currentUser && isAlreadyFav  ?<MdFavorite /> : <MdFavoriteBorder />}</div>
    </div>
    

  </div>
  )
}

export default RecipeCard