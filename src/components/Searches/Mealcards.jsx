import React from "react";
import { NavLink } from "react-router-dom";

const Mealcards = ({ detail }) => {
  // Function to remove HTML tags from the recipe title
  const cleanTitle = (title) => {
    return title.replace(/<[^>]+>/g, ""); // This regex removes all HTML tags
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {!detail
          ? ""
          : detail.map((curItem, index) => {
              return (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-200 overflow-hidden"
                >
                  {/* Recipe Image */}
                  <img
                    src={curItem.img_url}
                    alt={`Recipe Image ${index}`}
                    className="w-full h-48 object-cover"
                  />
                  
                  {/* Recipe Details */}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white truncate">
                      {cleanTitle(curItem.Recipe_title)}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Calories: {curItem.Calories}
                    </p>
                    
                    {/* Recipe Button */}
                    <NavLink to={curItem.url}>
                      <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-6 rounded-full">
                        Open Recipe
                      </button>
                    </NavLink>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default Mealcards;
