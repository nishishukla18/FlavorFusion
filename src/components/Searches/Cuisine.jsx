import React, { useState } from "react";
import Mealcards from "./Mealcards";
const Cuisine = () =>{
    const [data,setData] = useState()
    const [search, setSearch] = useState()
    const handleInput = (event) =>{
        setSearch(event.target.value)
    }
    const myFun = async() =>{
        const get = await fetch(`https://cosylab.iiitd.edu.in/recipe-search/recipe?pageSize=100&searchText=${search}`)
        const jsonData = await get.json()
        console.log(jsonData.payload.data);
        setData(jsonData.payload.data)
    }
    console.log(data)
    return (
        <>
           
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4 space-y-6">
  {/* Search Bar Section */}
  <div className="searchBar flex items-center gap-4 bg-white shadow-lg p-4 rounded-lg w-full sm:w-96">
    {/* Input Box */}
    <input
      type="text"
      placeholder="What's on your Mind?"
      onChange={handleInput}
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    
    {/* Search Button */}
    <button
      onClick={myFun}
      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-1 px-6 rounded-full"
    >
      Search
    </button>
  </div>

  {/* Meal Cards Section */}
  <div className="w-full">
    <Mealcards detail={data} />
  </div>
</div>

        </>
    )
}
export default Cuisine;