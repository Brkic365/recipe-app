import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Recipe } from "../types";
import { getAllRecipes } from "../api";

const Dashboard = () => {
  const [recipes, setRecipes] = useState<Array<Recipe>>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  useEffect(() => {
    async function fetchAndApplyFilters() {
      try {
        const fetchedRecipes = await getAllRecipes();

        console.log("fetched: ", fetchedRecipes);

        setRecipes(fetchedRecipes);
      } catch (error) {
        console.log("ERROR FETCHING: ", error);
      }
    }
    fetchAndApplyFilters();
  }, [searchTerm, page, selectedTags]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div>
      <h2>Recipe Dashboard</h2>
      {/* Add tag selection */}
      <div>
        <label>Select Tags:</label>
        <select
          multiple
          value={selectedTags}
          onChange={(e) =>
            setSelectedTags(
              Array.from(e.target.selectedOptions, (option) => option.value)
            )
          }
        >
          <option value="Beef">Beef</option>
          <option value="Steak">Steak</option>
          {/* Add more tag options */}
        </select>
      </div>
      <input
        type="text"
        placeholder="Search recipes by title"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
        }}
      >
        {recipes.map((recipe) => (
          <Link key={recipe.id} to={`/recipe/${recipe.id}`}>
            <div
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                backgroundColor: "#f9f9f9",
              }}
            >
              <h3>{recipe.title}</h3>
              {/* Display other recipe information */}
            </div>
          </Link>
        ))}
      </div>
      <button onClick={handleLoadMore}>Load More</button>
      <Link to="/create-recipe">
        <button>Create New Recipe</button>
      </Link>
    </div>
  );
};

export default Dashboard;
