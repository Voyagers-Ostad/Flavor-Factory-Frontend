import React, { useState } from "react";
import './RecipeForm.css'
import { Container, Form, Button, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const RecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: [],
    is_bake: false,
    meal: [],
    cuisine: [],
    photo: "",
    occasion: [],
    cookTime: "",
    detail: "",
    category: [],
    servings: "",
  });
  const token = localStorage.getItem('token');
  axios.defaults.headers.common['Authorization'] = token;
  
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
 

  const validateForm = () => {
    console.log("Validating form...");
    const newErrors = {};

    if (!recipe.title) {
      newErrors.title = "Title is required";
    }

    if (recipe.ingredients.length === 0) {
      newErrors.ingredients = "At least one ingredient is required";
    }

    if (recipe.meal == "") {
      newErrors.meal = "Meal type is required";
    }

    if (recipe.cuisine=="") {
      newErrors.cuisine = "Cuisine is required";
    }

    if (!recipe.photo) {
      newErrors.photo = "Photo is required";
    }

    if (recipe.occasion == "") {
      newErrors.occasion = "Occasion is required";
    }

    if (!recipe.cookTime) {
      newErrors.cookTime = "Cooktime is required";
    }

    if (!recipe.detail) {
      newErrors.detail = "Detail is required";
    }

    if (recipe.category == "") {
      newErrors.category = "Category is required";
    }

    
    setErrors(newErrors);
    console.log(errors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    console.log("Handling submit...");
    e.preventDefault();
    if (validateForm()) {
      console.log("Form is valid!");

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
        // Display a success notification with a button
        toast.success(
          <>
            Recipe created successfully!{" "}
            
          </>,
          {
            position: "top-right",
            autoClose: 2000, 
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            onClose: () => {
              
              navigate("/dashboard");
            },
          }
        );
      } catch (error) {
        console.error("Error creating recipe:", error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setErrors((prevErrors) => ({ ...prevErrors, [name]: undefined }));

    // For radio buttons, directly set boolean value
    const radioValue = type === "radio" ? value === "true" : value;

    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: name === "is_bake" ? checked : radioValue,
    }));
  };

  
  return (
    <div className=" ">
      <h1 className="mt-5 text-center postrecipe-title">-Add Your Recipe </h1>
      <div className="  justify-content-center m-5 p-5  bg-light border border-secondary">
        <h5 className="text-danger text-sm-center mb-5">* Areas are Require</h5>
        <Form onSubmit={handleSubmit} className="d-flex flex-column ">
          <Form.Group controlId="formTitle">
            <h5>Title<p className="text-danger mt-2 d-inline">*</p></h5>
            <Form.Control
              type="text"
              placeholder="Enter recipe title"
              name="title"
              value={recipe.title}
              onChange={handleChange}
              className=""
            />
            {errors.title && <p className="text-danger mt-2">{errors.title}</p>}
          </Form.Group>

          <Form.Group className="mt-4 " controlId="formIsBake">
            <h5 className="r">Bake<p className="text-danger mt-2 d-inline">*</p></h5>
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
            <h5>Ingredients<p className="text-danger mt-2 d-inline">*</p>(comma-separated)</h5>
            <Form.Control
              type="text"
              placeholder=" "
              name="ingredients"
              value={recipe.ingredients}
              onChange={handleChange}
            />
            {errors.ingredients && (
              <p className="text-danger mt-2">{errors.ingredients}</p>
            )}
          </Form.Group>


          <div className="d-flex ">
            <div>
            <Form.Group controlId="formPhoto">
            <h5 className="mt-4">Photo<p className="text-danger mt-2 d-inline">*</p></h5>
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
            {errors.photo && <p className="text-danger mt-2">{errors.photo}</p>}
          </Form.Group>
            </div>

            <div className="m-5"> </div>

            <div>
              <h5 className="mt-4 ">Meal Type<p className="text-danger mt-2 d-inline">*</p></h5>
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
              </Form.Select>
              {errors.meal && <p className="text-danger mt-2">{errors.meal}</p>}
            </div>

            <div className="m-1"> </div>

            <div>
              <h5 className="mt-4 ml-2">Category<p className="text-danger mt-2 d-inline">*</p></h5>
              <Form.Select
                name="category"
                value={recipe.category}
                onChange={handleChange}
              >
                <option value="">
                  <h5>Select </h5>
                </option>
                <option value="Main Courses">Main Courses</option>
                <option value="Side Dishes">Side Dishes</option>
                <option value="Soups and Stews">Soups and Stews</option>
                <option value="Breakfast and Brunch">
                  Breakfast and Brunch
                </option>
                <option value="Desserts">Desserts</option>
                <option value="Drinks">Drinks</option>
                <option value="Special Diets">Special Diets</option>
                <option value="Quick and Easy">Quick and Easy</option>
                <option value="Grilling and BBQ">Grilling and BBQ</option>
                <option value="Comfort Food">Comfort Food</option>
                <option value="DIY and Homemade">DIY and Homemade</option>
                <option value="Kids-Friendly">Kids-Friendly</option>
              </Form.Select>
              {errors.category && (
                <p className="text-danger mt-2">{errors.category}</p>
              )}
            </div>

            <div className="m-1"></div>

            <div>
              <h5 className="mt-4 ml-2">Cuisine<p className="text-danger mt-2 d-inline">*</p></h5>
              <Form.Select
                name="cuisine"
                value={recipe.cuisine}
                onChange={handleChange}
              >
                <option value="">
                  <h5>Select </h5>
                </option>
                <option value="Italian">Italian</option>
                <option value="Mexican">Mexican</option>
                <option value="Japanese">Japanese</option>
                <option value="Indian">Indian</option>
                <option value="French">French </option>
                <option value="Chinese">Chinese</option>
                <option value="Mediterranean">Mediterranean</option>
                <option value="Thai">Thai</option>
                <option value="American">American</option>
                <option value="Middle Eastern">Middle Eastern</option>
                
              </Form.Select>
              {errors.cuisine && (
                <p className="text-danger mt-2">{errors.cuisine}</p>
              )}
            </div>

          </div>

          

          <Form.Group controlId="formOccasion">
            <h5 className="mt-4">Occasion<p className="text-danger mt-2 d-inline">*</p></h5>
            <Form.Control
              type="text"
              placeholder=""
              name="occasion"
              value={recipe.occasion}
              onChange={handleChange}
            />
            {errors.occasion && (
              <p className="text-danger mt-2">{errors.occasion}</p>
            )}
          </Form.Group>

          

          <Form.Group controlId="formCooktime">
            <h5 className="mt-4">Cooktime<p className="text-danger mt-2 d-inline">*</p></h5>
            <Form.Control
              type="text"
              placeholder=""
              name="cookTime"
              value={recipe.cookTime}
              onChange={handleChange}
            />
            {errors.cookTime && (
              <p className="text-danger mt-2">{errors.cookTime}</p>
            )}
          </Form.Group>

          <Form.Group controlId="formDetail">
            <h5 className="mt-4">Detail<p className="text-danger mt-2 d-inline">*</p></h5>
            <Form.Control
              type="text"
              placeholder=""
              name="detail"
              value={recipe.detail}
              onChange={handleChange}
              className="h5 form-control-lg"
            />
            {errors.detail && (
              <p className="text-danger mt-2">{errors.detail}</p>
            )}
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
          <div className="d-grid gap-2 col-6 mx-auto mt-5">
            <Button className=" submit-button" variant="dark" type="submit">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default RecipeForm;
