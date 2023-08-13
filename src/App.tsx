import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import CreateRecipe from "./components/CreateRecipe";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipe from "./components/EditRecipe";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Dashboard} />
          <Route path="/register" Component={Register} />
          <Route path="/login" Component={Login} />
          <Route path="/create-recipe" Component={CreateRecipe} />
          <Route path="/recipe/:recipeId" Component={RecipeDetails} />
          <Route path="/edit-recipe/:recipeId" Component={EditRecipe} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
