import React, { useContext, useState } from 'react';
import { PostedRecipesContext } from '../context/PostedRecipesContext';
import { AuthContext } from '../context/AuthContext';
import PostedRecipeCard from '../components/PostedRecipeCard';

function MyRecipes() {
  const { allPostedRecipes, myRecipes } = useContext(PostedRecipesContext);
  const { currentUser } = useContext(AuthContext);
  const [showMyRecipes, setShowMyRecipes] = useState(false);

  if (!currentUser) {
    return <p style={{ textAlign: 'center', margin: '2rem' }}>Please log in to view your recipes.</p>;
  }

  const displayedRecipes = showMyRecipes ? myRecipes : allPostedRecipes;


  return (
    <div className="my-recipes">
      <h1 style={{
        textAlign: 'center',
        margin: '1rem',
        fontSize: '1.6rem',
        fontFamily: '"Jost", sans-serif',
        color: 'black'
      }}>
        {showMyRecipes ? `Recipes by You` : 'All User Recipes'}
      </h1>

      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <button 
          className={`toggle-btn ${!showMyRecipes ? 'active' : ''}`} 
          onClick={() => setShowMyRecipes(false)}
        >
          All Recipes
        </button>
        <button 
          className={`toggle-btn ${showMyRecipes ? 'active' : ''}`} 
          onClick={() => setShowMyRecipes(true)}
        >
          My Recipes
        </button>
      </div>

      <div className="recipes-list">
        {displayedRecipes.length > 0 ? (
          displayedRecipes.map(recipe => <PostedRecipeCard key={recipe.id} recipe={recipe} />
          )
        ) : (
          <p style={{ textAlign: 'center' }}>
            {showMyRecipes ? "You haven't posted any recipes yet." : "No recipes available yet."}
          </p>
        )}
      </div>
    </div>
  );
}

export default MyRecipes;
