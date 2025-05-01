import React,{ createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";


export const PostedRecipesContext=createContext();

export const PostedRecipesProvider=({children})=>{

    const [allPostedRecipes,setAllPostedRecipes]=useState([]);
    const [myRecipes,setMyRecipes]=useState([]);
    const {currentUser}=useContext(AuthContext);

    
    useEffect(() => {
        const fetchAllPostedRecipes = async () => {
            try {
                const res = await fetch('http://localhost:5050/api/recipes');
                const allRecipes = await res.json();
                if (allRecipes) {
                    setAllPostedRecipes(allRecipes);
                    if (currentUser) {
                        setMyRecipes(allRecipes.filter(
                            (recipe) => recipe.postedBy === currentUser.name
                        ));
                    }
                }
            } catch (err) {
                console.error("Error fetching recipes:", err);
            }
        };
    
        if (currentUser) {
            fetchAllPostedRecipes();
        }
    }, [currentUser]);
    
     
    // console.log(myRecipes);
    // console.log("All",allPostedRecipes);
    

    return(
        <PostedRecipesContext.Provider value={{allPostedRecipes,myRecipes}}>
            {children}
        </PostedRecipesContext.Provider>
    )
}