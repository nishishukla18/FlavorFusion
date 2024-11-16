import React, { useState } from "react";
import { Link } from "react-router-dom";
import BiryaniImg1 from "../../assets/biryani3.png";
import BiryaniImg2 from "../../assets/biryani5.png";
import BiryaniImg3 from "../../assets/biryani2.png";
import Vector from "../../assets/vector3.png";

const imageList = [
  { id: 1, img: BiryaniImg1 },
  { id: 2, img: BiryaniImg2 },
  { id: 3, img: BiryaniImg3 },
];

const Hero = () => {
  const [imageId, setImageId] = useState(BiryaniImg1);

  const bgImageStyle = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };

  return (
    <section
      className="min-h-[550px] sm:min-h-[600px] flex justify-center items-center bg-gray-100 dark:bg-gray-950 dark:text-white duration-200"
      style={bgImageStyle}
    >
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* Text Content */}
          <div className="flex flex-col justify-center gap-4 text-center sm:text-left">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              Welcome{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-b from-primary to-secondary">
                Flavour
              </span>{" "}
              Fusion
            </h1>
            <p className="text-sm">
              A Culinary Website that uses extensive <b>Recipe API</b> and{" "}
              <b>Flavor API</b> to generate recipes tailored to your flavor
              profile.
            </p>
            <div>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/molecule-by-name"
                    className="bg-gradient-to-r from-primary to-secondary text-white py-2 px-6 rounded-full hover:scale-105 duration-200 inline-block"
                  >
                    Search Molecules
                  </Link>
                </li>
                <li>
                  <Link
                    to="/molecule-of-the-day"
                    className="bg-red-800 hover:bg-red-600 text-white py-2 px-6 rounded-full duration-200 inline-block"
                  >
                    Molecule of the Day
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center items-center">
            <div className="h-[300px] sm:h-[450px] overflow-hidden">
              <img
                src={imageId}
                alt="Biryani"
                className="w-[300px] sm:w-[450px] sm:scale-125 mx-auto"
              />
            </div>
            <div className="absolute bottom-0 flex gap-4 bg-white/30 rounded-full p-2">
              {imageList.map((item) => (
                <img
                  key={item.id}
                  src={item.img}
                  onClick={() => setImageId(item.img)}
                  alt="Biryani Thumbnail"
                  className="max-w-[80px] h-[80px] object-contain cursor-pointer hover:scale-105 duration-200"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
