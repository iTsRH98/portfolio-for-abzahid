import React from "react";
import banner from "../../assets/hero.jpeg";
import { TypeAnimation } from "react-type-animation";

// Custom styles for animated gradient text
const gradientStyle = {
  background: "linear-gradient(270deg, #a855f7, #ec4899, #ef4444)",
  backgroundSize: "600% 600%",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  animation: "gradientShift 5s ease infinite",
};

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-10 text-center">
      <h1 className="text-3xl md:text-5xl font-bold my-4" style={gradientStyle}>
        <TypeAnimation
          sequence={["Abdullah Zahid", 2000, "", 500]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </h1>

      <p className="text-lg text-gray-600 mb-6">
        I design and build modern, responsive websites with clean code and creative flair.
      </p>

      <img
        src={banner}
        alt="Hero banner"
        className="w-1/2 max-w-4xl rounded-lg shadow-md"
      />
    </div>
  );
};

export default Home;
