import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import MyMap from "../../components/MyMap/MyMap";

const Find = () => {
  const [showMap, setShowMap] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  const handleMapToggle = () => {
    setShowMap(true);
    setTimeout(() => setFadeIn(true), 10); // slight delay to trigger transition
  };

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col items-center justify-center px-6 py-16 text-white">
      <h1 className="text-3xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 text-transparent bg-clip-text animate-bounce">
        Find Me
      </h1>

      <p className="max-w-xl text-lg leading-relaxed text-gray-300 mb-10 text-center">
        Feel free to connect with me on my social media platforms or find me on
        the map!
      </p>

      <div className="flex space-x-6 text-3xl mb-10">
        <a
          href="https://www.facebook.com/zahiiid2031"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/refined_anhedonia"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.pinterest.com/abzahid2031"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 transition"
        >
          <FaPinterest />
        </a>
        <a
          href="https://x.com/zahiiid2031"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-sky-500 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://t.me/abzahiiid"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition"
        >
          <FaTelegram />
        </a>
      </div>

      {/* Fade-in animated Map section */}
      {showMap && (
        <div
          className={`w-full max-w-2xl mb-6 transform transition-all duration-700 ${
            fadeIn ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <MyMap />
        </div>
      )}

      {!showMap && (
        <button
          onClick={handleMapToggle}
          className="bg-pink-600 hover:bg-pink-500 text-white py-2 px-6 rounded-lg transition cursor-pointer"
        >
          See on Map
        </button>
      )}
    </div>
  );
};

export default Find;
