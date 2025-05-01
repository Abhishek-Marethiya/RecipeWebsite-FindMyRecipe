import { createContext, useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "./AuthContext";

export const FavoriteContext = createContext();

export const FavoriteProvider = ({ children }) => {
  const { currentUser, setCurrentUser } = useContext(AuthContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    if (currentUser) {
      setFavorites(currentUser.favorites || []);
    }
  }, [currentUser]);

  const updateFavoritesInDB = async (newFavorites) => {
    const updatedUser = { ...currentUser, favorites: newFavorites };

    const res = await fetch(`http://localhost:5050/api/user/update-favorites`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify(updatedUser),
    });

    const updatedUserData = await res.json();
    setCurrentUser(updatedUserData);
    setFavorites(updatedUserData.favorites || []);
  };

  const addToFavorites = async (recipe) => {
    if (!currentUser) return toast.error('Please log in first');
    const newFavorites = [...favorites, recipe];
    await updateFavoritesInDB(newFavorites);
    toast.success(`${recipe.strMeal} added to favorites`);
  };

  const removeFromFavorites = async (recipe) => {
    const newFavorites = favorites.filter((item) => item.idMeal !== recipe.idMeal);
    await updateFavoritesInDB(newFavorites);
    toast.error(`${recipe.strMeal} removed from favorites`);
  };

  return (
    <FavoriteContext.Provider value={{ favorites, addToFavorites, removeFromFavorites }}>
      {children}
    </FavoriteContext.Provider>
  );
};
