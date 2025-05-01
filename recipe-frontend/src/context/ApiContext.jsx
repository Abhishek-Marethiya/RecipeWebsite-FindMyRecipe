import React, { createContext, useEffect, useState } from 'react';

// 1. Create context
export const ApiContext = createContext();

// 2. Provider component
export const ApiProvider = ({ children }) => {
  const [fetchedRecipes, setFetchedRecipes] = useState([]);
  const [querySelector, setQuerySelector] = useState(''); 
  const [isLoading,setIsLoading]=useState(true);
  useEffect(() => {
    const fetchRecipes = async () => {
      setIsLoading(true);
      try {

        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${querySelector}`);
        const data = await res.json();
  
        if (data.meals) {
          setFetchedRecipes(data.meals);
        } else {
          setFetchedRecipes([]); 
        }
      } catch (err) {
        console.error("Error fetching recipes:", err);
      }
      setIsLoading(false);
    };
     
    fetchRecipes();
  }, [querySelector]);

  return (
    <ApiContext.Provider value={{ fetchedRecipes, setQuerySelector,isLoading }}>
      {children}
    </ApiContext.Provider>
  );
};
