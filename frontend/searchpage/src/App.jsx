import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/getRecipes') // Assuming this is the correct endpoint
      .then(response => setRecipe(response.data[0])) // Use the first recipe
      .catch(error => console.error('Error fetching recipes:', error));
  }, []);

  return (
    <div className='w-100 vh-100 d-flex justify-content-center align-items-center'>
      <div className='w-50 p-4 border'>
        {recipe ? (
          <div>
            <h2 className='mb-4'>{recipe.title}</h2>
            <img src={recipe.photo} alt={recipe.title} className='img-fluid img-thumbnail mb-4' />
            <p><strong>Ingredients:</strong> {recipe.ingredients.join(', ')}</p>
            <p><strong>Meal:</strong> {recipe.meal.join(', ')}</p>
            <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
            <p><strong>Occasion:</strong> {recipe.occasion}</p>
            <p><strong>Serving:</strong> {recipe.servings}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

export default App;
