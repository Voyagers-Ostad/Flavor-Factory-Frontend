import React, { useState } from "react";
import { Container, Form, Button, Col } from "react-bootstrap";
import axios from "axios";

const RecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: [],
    is_bake: true,
    meal: [],
    cuisine: [],
    photo: "",
    occasion: [],
    cookTime: "",
    detail: "",
    category: [],
    servings: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();

      formData.append("title", recipe.title);
      formData.append("ingredients", recipe.ingredients);
      formData.append("is_bake", recipe.is_bake);
      formData.append("meal", recipe.meal);
      formData.append("cuisine", recipe.cuisine);
      formData.append("photo", recipe.photo);
      formData.append("occasion", recipe.occasion);
      formData.append("cookTime", recipe.cookTime);
      formData.append("detail", recipe.detail);
      formData.append("category", recipe.category);
      formData.append("servings", recipe.servings);

      const api =
        "https://flavor-factory-m190.onrender.com/api/v1/recipe/postrecipe";

      const response = await axios.post(api, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("Recipe created:", response.data);
    } catch (error) {
      console.error("Error creating recipe:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    // For radio buttons, directly set boolean value
    const radioValue = type === 'radio' ? (value === 'true') : value;
  
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: name === 'is_bake' ? checked : radioValue,
    }));
  };
  

  return (
    <Container >
      <h1 className="mt-5">-Add Your Recipe </h1>
      <div className="ml-5 mx-5 mt-3 mb-3">
      <Form onSubmit={handleSubmit}className="d-flex flex-column " >
        <Form.Group controlId="formTitle">
          <h5>Title</h5>
          <Form.Control
            type="text"
            placeholder="Enter recipe title"
            name="title"
            value={recipe.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group className="mt-4" controlId="formIsBake">
          <h5>Bake</h5>
          <Col>
            <Form.Check
              type="radio"
              label="Yes"
              name="is_bake"
              id="isBakeYes"
              checked={recipe.is_bake === true}
              onChange={handleChange}
            />
            <Form.Check
              type="radio"
              label="No"
              name="is_bake"
              id="isBakeNo"
              checked={recipe.is_bake === false}
              onChange={handleChange}
            />
          </Col>
        </Form.Group>

        <Form.Group controlId="formIngredients" className="mt-4">
          <h5>Ingredients(comma-separated)</h5>
          <Form.Control
            type="text"
            placeholder=" "
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
          />
        </Form.Group>

        <h5 className="mt-4">Meal Type</h5>
        <Form.Select
          
          name="meal"
          value={recipe.meal}
          onChange={handleChange}
        >

          <option value="">
            <h5>Select </h5>
          </option>
          <option value="Breakfast">Breakfast</option>
          <option value="Brunch">Brunch</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Appetizer">Appetizer</option>
          <option value="Snack">Snack</option>
          <option value="Dessert">Dessert</option>
          <option value="Soup">Soup</option>
          <option value="Salad">Salad</option>
          <option value="Main Course">Main Course</option>
          <option value="Side Dish">Side Dish</option>
          <option value="Beverage">Beverage</option>
          <option value="Smoothie">Smoothie</option>
          {/* Add more options as needed */}
        </Form.Select>

        <Form.Group controlId="formCuisine">
          <h5 className="mt-4">cuisine</h5>
          <Form.Control
            type="text"
            placeholder=""
            name="cuisine"
            value={recipe.cuisine}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formPhoto">
          <h5 className="mt-4">Photo</h5>
          <Form.Control
            type="file"
            name="photo"
            onChange={(e) =>
              setRecipe((prevRecipe) => ({
                ...prevRecipe,
                photo: e.target.files[0],
              }))
            }
          />
        </Form.Group>

        <Form.Group controlId="formOccasion">
          <h5 className="mt-4">Occasion</h5>
          <Form.Control
            type="text"
            placeholder=""
            name="occasion"
            value={recipe.occasion}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCooktime">
          <h5 className="mt-4">Cooktime</h5>
          <Form.Control
            type="text"
            placeholder=""
            name="cookTime"
            value={recipe.cookTime}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formDetail" >
          <h5 className="mt-4">Detail</h5>
          <Form.Control 
            type="text"
            placeholder=""
            name="detail"
            value={recipe.detail}
            onChange={handleChange}
            className="h5"
          />
        </Form.Group>

        <Form.Group controlId="formCategory">
          <h5 className="mt-4">Category</h5>
          <Form.Control
            type="text"
            placeholder=""
            name="category"
            value={recipe.category}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCategory">
          <h5 className="mt-4">Servings Size</h5>
          <Form.Control
            type="text"
            placeholder=""
            name="servings"
            value={recipe.servings}
            onChange={handleChange}
          />
        </Form.Group>

        <Button className="mt-4 mb-5 w-25" variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      </div>
    </Container>
  );
};

export default RecipeForm;
