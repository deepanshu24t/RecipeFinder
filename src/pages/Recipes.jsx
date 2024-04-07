import React, { useEffect, useState } from 'react'

import RecipeList from '../components/RecipeList'
import Search from '../components/Search'
import { getRecipes } from '../services/api'

function Recipes() {
  const [searchedQuery,setSearchedQuery]= useState("pizza");
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    getsearchedResult();
  }, [searchedQuery]);
  

  const getsearchedResult =async () =>
  {
    let result = await getRecipes(searchedQuery);
    if(result && result.recipes)
    {
      setRecipes(result.recipes);
    }
    console.log(result);
  }

  return (
    <div>
      <Search setSearchedQuery={setSearchedQuery}></Search>
      <RecipeList recipes={recipes} searchedQuery={searchedQuery}></RecipeList>
    </div>
  )
}

export default Recipes