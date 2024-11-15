// import React, { useState } from "react";
// import Recofday from "./RecofdayCard";
// import './rod.css';  // Assuming your CSS is in App.css

// const Recipeofday = () => {
//   const [data, setData] = useState();

//   const myFun = async () => {
//     const get = await fetch(`https://cosylab.iiitd.edu.in/recipe/recipeOftheDay`);
//     const jsonData = await get.json();
//     console.log(jsonData.payload);
//     setData(jsonData.payload);
//   }

//   console.log(data);

//   return (
//     <div className="recipe-container">
//       <button className="recipe-button" onClick={myFun}>Show Recipe of the Day!</button>
//       <div className="recipe-content">
//         <Recofday detail={data} />
//       </div>
//     </div>
//   );
// }

// export default Recipeofday;

import React, { useState, useEffect } from "react";
import Recofday from "./RecofdayCard";
import './rod.css';  // Assuming your CSS is in App.css

const Recipeofday = () => {
  const [data, setData] = useState(null);

  // Fetch Recipe of the Day when component mounts
  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`https://cosylab.iiitd.edu.in/recipe/recipeOftheDay`);
      const jsonData = await response.json();
      setData(jsonData.payload);
    };

    fetchRecipe(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array means it runs only once, when the component mounts

  return (
    <div className="recipe-container">
      {data ? (
        <div className="recipe-content">
          <Recofday detail={data} />
        </div>
      ) : (
        <p>Loading Recipe of the Day...</p>  // Show a loading message while fetching
      )}
    </div>
  );
};

export default Recipeofday;
