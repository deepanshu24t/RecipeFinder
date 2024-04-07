const API_URL = "https://forkify-api.herokuapp.com/api";

export const getRecipes = async (searchedQuery)=>

{
    try{
         let response = await fetch(`${API_URL}/search?q=${searchedQuery}`);
         let jsonRespone = await response.json();
         return jsonRespone; 
     
    }

    catch(error)
    {
        console.log('Error while calling the api',error.message);
        return error.response;
    }

}

export const getRecipe = async (searchedQuery)=>

{
    try{
         let response = await fetch(`${API_URL}/get?rId=${searchedQuery}`);
         let jsonRespone = await response.json();
         return jsonRespone; 
     
    }

    catch(error)
    {
        console.log('Error while calling the api',error.message);
        return error.response;
    }

}