import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getRecipe, deleteRecipe } from "../api";

import { Recipe } from "../types";

const RecipeDetails = () => {
  const { recipeId } = useParams<{ recipeId: string }>();
  const navigate = useNavigate();

  const [recipe, setRecipe] = useState<Recipe>({
    id: "",
    title: "",
    dateCreated: "",
    authorId: "",
    instructions: [],
    tags: [],
  });

  useEffect(() => {
    async function fetchRecipe() {
      try {
        const fetchedRecipe = await getRecipe(recipeId);
        setRecipe(fetchedRecipe);
      } catch (error) {
        // Handle error
      }
    }
    fetchRecipe();
  }, [recipeId]);

  const handleEditRecipe = () => {
    navigate(`/edit-recipe/${recipeId}`); // Navigate to the edit recipe page
  };

  const handleDeleteRecipe = async () => {
    try {
      await deleteRecipe(recipeId);
      navigate("/"); // Navigate back to the Dashboard after deletion
    } catch (error) {
      // Handle error, display an error message
    }
  };

  if (recipe.id === "") return null;

  return (
    <div>
      {recipe && (
        <div>
          <h2>{recipe.title}</h2>
          {/* Display other recipe details */}
          <button onClick={handleEditRecipe}>Edit Recipe</button>
          <button onClick={handleDeleteRecipe}>Delete Recipe</button>
        </div>
      )}
    </div>
  );
};

export default RecipeDetails;
