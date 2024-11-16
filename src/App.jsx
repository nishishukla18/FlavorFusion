import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Region from "./components/Searches/Region";
import Continent from "./components/Searches/Continent";
import Cuisine from "./components/Searches/Cuisine";
import Ingredients from "./components/Searches/Ingredients";
import Subregion from "./components/Searches/Subregion";
import Recipeofday from "./components/recipeOfTheDay/Recipeofday";
import Moleculeofday from "./components/Fcomponents/Moleculeofday";
import MoleculeByName from "./components/Fcomponents/Molecule_byname";

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/region" element={<Region />} />
        <Route path="/continent" element={<Continent />} />
        <Route path="/cuisine" element={<Cuisine />} />
        <Route path="/ingredient" element={<Ingredients />} />
        <Route path="/subregion" element={<Subregion />} />
        <Route path="/recipe-of-the-day" element={<Recipeofday />} />
        <Route path="/molecule-by-name" element={<MoleculeByName />} />
        <Route path="/molecule-of-the-day" element={<Moleculeofday />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
