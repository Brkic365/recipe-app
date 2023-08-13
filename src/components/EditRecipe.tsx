import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipe, editRecipe } from "../api"; // Import the getRecipe and editRecipe functions

const EditRecipe = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();
  const [recipeData, setRecipeData] = useState({
    title: "",
    instructions: [],
    tags: [],
  });

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const response = await getRecipe(recipeId); // Use the getRecipe function from the api file
        setRecipeData(response.recipe);
      } catch (error) {
        // Handle error
      }
    }
    fetchRecipe();
  }, [recipeId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRecipeData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditRecipe = async () => {
    try {
      await editRecipe(recipeId, recipeData); // Use the editRecipe function from the api file
      navigate(`/recipe/${recipeId}`); // Navigate back to RecipeDetails after editing
    } catch (error) {
      // Handle error, display an error message
    }
  };

  return (
    <div>
      <h2>Edit Recipe</h2>
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
        <button type="button" onClick={handleEditRecipe}>
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditRecipe;
