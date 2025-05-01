import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ApiContext } from '../context/ApiContext';
import Error from '../components/Error';
function RecipeDetails() {
  const {id}=useParams();
  const{fetchedRecipes}=useContext(ApiContext);
  const {isLoading}=useContext(ApiContext);

  const requiredRecipe=fetchedRecipes.filter((recipe)=>recipe.idMeal===id)
  if(!requiredRecipe.length){
    return <p>No Detail Available</p>
  }
  
  const ingredients=[];
  // const measures=[];
for(let key in requiredRecipe[0]){
  
  if(key.includes('strIngredient') && requiredRecipe[0][key]!==""){
        ingredients.push(requiredRecipe[0][key]);
  }
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
          {ingredients.map((item, index) =><li key={index}> {item}</li>)}
        </ul>
      </div>
    {/* <div className="measures">
      <h3>Measures</h3>
      <ul>
        {measures.map((measure)=><li>{measure}</li> )}
      </ul>
    </div> */}
    <div className="youtube-video">
        <h3>Watch on YouTube</h3>
        <iframe 
          width="100%" 
          height="300" 
          src={`https://www.youtube.com/embed/${requiredRecipe.strYoutube?.split("v=")[1]}`} 
          title="YouTube video"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    {/* <a className="yutubelink" href={requiredRecipe[0].strYoutube}>youtube</a> */}
    
  </div>
  )
}

export default RecipeDetails