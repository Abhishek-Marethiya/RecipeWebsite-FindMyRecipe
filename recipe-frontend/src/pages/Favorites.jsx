import { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';
import RecipeCard from '../components/RecipeCard';
import { AuthContext } from '../context/AuthContext';

function Favorites() {
  const { currentUser } = useContext(AuthContext);
  if(!currentUser) return;

  const favorites=currentUser.favorites;

  return (
    <div className="favorites">
      <h1 style={{ textAlign: 'center', margin: '2rem', fontSize: '1.3rem', color: 'gray', fontFamily:'Bitter, Georgia, Cambria, Times New Roman, Times, serif' }}>Your Favorite Recipes</h1>
      <div className="favorite-list">
        {favorites.length > 0 ? favorites.map(recipe => (
          <RecipeCard key={recipe.idMeal} recipe={recipe} />
        )) : <p>No favorites added yet.</p>}
      </div>
    </div>
  );
}

export default Favorites;
