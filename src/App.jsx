
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Recipes from './pages/Recipes';
import RecipeDetails from './components/RecipeDetails';

function App() {

  return (
    <>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path ='/' element = {<Home></Home>}></Route>
      <Route path ='/recipes' element = {<Recipes></Recipes>}></Route>
      <Route path = '/recipes/:recipeId' element={<RecipeDetails></RecipeDetails>}></Route>
    </Routes>
    
    </BrowserRouter>
     
    </>
  )
}

export default App
