import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PostedRecipesContext } from '../context/PostedRecipesContext';

function PostedRecipeDetail() {
  const { id } = useParams();
  const { allPostedRecipes } = useContext(PostedRecipesContext);

  const requiredRecipe = allPostedRecipes.filter(recipe => recipe.idMeal === id);

  if(!requiredRecipe.length){
    return <p>No Detail Available</p>
  }


  return (
    <div className="recipe-detail">
      <h1>{requiredRecipe[0].strMeal}</h1>
      <div className="recipeinstructions">
        <h3>Instructions</h3>
        <p>{requiredRecipe[0].strInstructions}</p>
      </div>

      <div className="ingredients">
        <h3>Ingredients</h3>
        <ul>
          {requiredRecipe[0].ingredients.map((item, index) =><li key={index}> {item}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default PostedRecipeDetail;
