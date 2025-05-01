import React from 'react';
import { useNavigate } from 'react-router-dom';

function PostedRecipeCard({ recipe }) {
  const navigate = useNavigate();

  return (
    <div className="recipe-card">
      {/* <div className="recipe-image">
        <img src={recipe.image} alt={recipe.name} />
      </div> */}

      <div className="recipe-info">
        <p className="recipe-name">{recipe.strMeal}</p>
        <p className="recipe-category">Posted By: <strong>{recipe.postedBy}</strong></p>
        <p className="recipe-category">Date: <strong>{recipe.postedDate}</strong></p>
      </div>

      <div className="card-btns">
        <button onClick={() => navigate(`/postedrecipedetail/${recipe.idMeal}`)}>
          View Detail
        </button>
      </div>
    </div>
  );
}

export default PostedRecipeCard;
