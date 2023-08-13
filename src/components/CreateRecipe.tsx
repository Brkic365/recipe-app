import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addRecipe } from "../api"; // Import the addRecipe function

const CreateRecipe = () => {
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState({
    title: "",
    instructions: [],
    tags: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateRecipe = async () => {
    try {
      await addRecipe(recipeData); // Use the addRecipe function from the api file
      navigate("/"); // Redirect back to the Dashboard after creating a recipe
    } catch (error) {
      // Handle error, display an error message
    }
  };

  return (
    <div>
      <h2>Create New Recipe</h2>
      <form>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={recipeData.title}
            onChange={handleChange}
          />
        </div>
        {/* Include other input fields for instructions, tags, etc. */}
        <button type="button" onClick={handleCreateRecipe}>
          Create Recipe
        </button>
      </form>
    </div>
  );
};

export default CreateRecipe;
