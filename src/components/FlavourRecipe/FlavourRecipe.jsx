import React, { useState, useEffect } from "react";

const RecipeFlavorFilter = () => {
  const [flavors, setFlavors] = useState([]);
  const [recipes, setRecipes] = useState([]);
  const [selectedFlavor, setSelectedFlavor] = useState("");

  useEffect(() => {
    const fetchFlavors = async () => {
      const response = await fetch("https://api.flavourdb.com/flavors");
      const data = await response.json();
      setFlavors(data);
    };

    fetchFlavors();
  }, []);

  useEffect(() => {
    if (selectedFlavor) {
      const fetchRecipes = async () => {
        const response = await fetch(
          `https://api.recipedb.com/recipes?flavor=${selectedFlavor}`
        );
        const data = await response.json();
        setRecipes(data);
      };

      fetchRecipes();
    }
  }, [selectedFlavor]);

  return (
    <div className="p-4">
      <h1>Filter Recipes by Flavor</h1>
      <select
        value={selectedFlavor}
        onChange={(e) => setSelectedFlavor(e.target.value)}
        className="p-2 border rounded"
      >
        <option value="">Select a Flavor</option>
        {flavors.map((flavor, index) => (
          <option key={index} value={flavor.name}>
            {flavor.name}
          </option>
        ))}
      </select>

      <div className="mt-4">
        <h2>Recipes</h2>
        {recipes.map((recipe, index) => (
          <div key={index} className="p-4 border rounded shadow-md">
            <h3>{recipe.name}</h3>
            <p>{recipe.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeFlavorFilter;
