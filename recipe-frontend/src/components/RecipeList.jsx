import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import RecipeCard from './RecipeCard';
import Loader from './Loader'
import Error from './Error'
import Footer from './Footer';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import SearchBar from './SearchBar';
import { ApiContext } from '../context/ApiContext';

function RecipeList() {
  const { fetchedRecipes, isLoading } = useContext(ApiContext);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 9;

  const totalPages = Math.ceil(fetchedRecipes.length / recipesPerPage);
  const startIndex = (currentPage - 1) * recipesPerPage;
  const endIndex = startIndex + recipesPerPage;
  const recipesToShow = fetchedRecipes.slice(startIndex, endIndex);

  const getPageNumbers = () => {
    const pages = [];
    const start = Math.max(1, currentPage -2);
    const end = Math.min(start + 2, totalPages);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(prev => prev + 1);
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(prev => prev - 1);
  };

  return (
    <div className="recipes">
      <div className="recipe-intro">
        <span>
          <Link to='/' className='homepagelink'>FIND MY RECIPE</Link>
          <MdOutlineKeyboardArrowRight />Recipes
        </span>
        <h1>Recipes</h1>
        <p>We’ve organized these recipes every way we could think of so you don't have to! Dietary restrictions, weeknight dinners, meal prep recipes, some of our most tried-and-true… no matter how you browse, we’re sure you’ll find just what you were looking for.</p>
      </div>

      <div className="search-box">
        <p>Search By Keyword</p>
        <MdOutlineKeyboardArrowRight />
        <SearchBar />
      </div>
      <h2 style={{ textAlign: 'center', marginTop: '3rem',marginInline:'1rem', fontSize: '1.3rem', color: 'gray', fontFamily:'Bitter, Georgia, Cambria, Times New Roman, Times, serif' }}>
  Here Are Some Delicious Recipes Just for You 🍽️
</h2>
      <div className="recipes-list">
        {isLoading ? <Loader /> : (
          recipesToShow.length === 0 ? <Error /> :
            recipesToShow.map(recipe => <RecipeCard key={recipe.idMeal} recipe={recipe} />)
        )}
      </div>

      {fetchedRecipes.length > 0 && (
        <div className="pagination">
          <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
          {getPageNumbers().map(page => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? "active" : ""}
            >
              {page}
            </button>
          ))}
          <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
        </div>
      )}
        <Footer/>
    </div>
  );
}

export default RecipeList;
