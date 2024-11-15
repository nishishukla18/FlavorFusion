import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
// import CoverBanner from "./components/CoverBanner/CoverBanner.jsx";
// import Testimonial from "./components/Testimonial/Testimonial.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

import Region from './components/Searches/Region.jsx';  // Region Page Component

import Cuisine from './components/Searches/Cuisine.jsx';  // Cuisine Page Component
import Ingredients from './components/Searches/Ingredients.jsx';  // Ingredient Page Component
import Flavours from "./components/Flavours/Flavours.jsx";
import Subregion from "./components/Searches/Subregion.jsx";
import Continent from "./components/Searches/Continent.jsx";
import Recipeofday from "./components/recipeOfTheDay/Recipeofday.jsx";

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    // <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
    //   <Navbar />
    //   <Hero />
    //   <Services />
    //   {/* <Banner /> */}
    //   {/* <CoverBanner /> */}
    //   <AppStore />
    //   {/* <Testimonial /> */}
    //   <Footer />
    // </div>
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Hero/>} />
      <Route path="/region" element={<Region/>} />
      <Route path="/continent" element={<Continent/>} />
      <Route path="/cuisine" element={<Cuisine/>} />
      <Route path="/ingredient" element={<Ingredients/>} />
      <Route path="/flavours" element={<Flavours/>} />
      <Route path="/region" element={<Region/>} />
      <Route path="/subregion" element={<Subregion/>} />
      <Route path="/recipe-of-the-day" element={<Recipeofday/>} />
    </Routes>
    
    <Footer/>
  </Router>

  );
};

export default App;
