import { useState } from 'react'
import { Toaster } from 'react-hot-toast';
// import reactLogo from './assets/react.svg'
import './App.css'
import './responsive.css'
import './responsiveMob.css'
import Header from './components/Header'
import AboutUs from './pages/AboutUs';
import RecipeList from './components/RecipeList'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import RecipeDetails from './pages/RecipeDetails'
import Banner from './components/Banner';
import Favorites from './pages/Favorites'
import AddRecipe from './pages/AddRecipe';
import MyRecipes from './pages/MyRecipes';
import PostedRecipeDetail from './pages/PostedRecipeDetail'
function App() {
  return(
   <div className="app">
    <Toaster
  position="top-left"
  reverseOrder={false}
/>
    <Banner/>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<AboutUs/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signup' element={<SignUp/>}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/recipes' element={ <RecipeList/>}/>
      <Route path='/addrecipe' element={<AddRecipe/>}/>
      <Route path='/myrecipes' element={<MyRecipes/>}/>
      <Route path='/recipedetail/:id' element={<RecipeDetails/>}/>
      <Route path='/postedrecipedetail/:id' element={<PostedRecipeDetail/>}/>
    </Routes>
   </div>
  )
}

export default App
