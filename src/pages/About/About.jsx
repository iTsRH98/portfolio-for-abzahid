import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 py-16 text-center space-y-10 bg-slate-900 min-h-screen text-white">
      <h1 className="text-3xl md:text-5xl font-bold my-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-bounce">
        About Me
      </h1>

      <p className="max-w-2xl text-lg leading-relaxed text-gray-300">
        Hello! I’m Abdullah Zahid, a self-taught front-end developer. <br />
        Besides coding, I’m an avid anime lover — inspired by stories of
        resilience, friendship, and creativity. Anime fuels my imagination and
        motivates me to bring unique ideas to life through design and
        development.
      </p>

      {/* Education Section */}
      <div className="w-full max-w-3xl text-left bg-slate-800 p-6 rounded-xl border border-slate-700 shadow-lg">
        <h2 className="text-2xl font-semibold text-pink-400 mb-4 border-b border-slate-600 pb-2">
          Education
        </h2>
        <ul className="space-y-3 text-gray-300">
          <li>
            <strong>Heyako Banani High School</strong> — SSC 2021
          </li>
          <li>
            <strong>Ibn Taimiya School & College</strong> — HSC 2023
          </li>
          <li>
            <strong>Govt. Shahid Sohrawardi College</strong> — Honours (Running)
          </li>
        </ul>
      </div>

      <div className="flex space-x-4">
        <Link
          to="/contact"
          className="px-6 py-3 rounded-lg bg-pink-600 hover:bg-pink-500 transition"
        >
          Get In Touch
        </Link>
        <a
          href="/portfolio"
          className="px-6 py-3 rounded-lg border border-pink-600 hover:bg-pink-600 text-white hover:text-black transition"
        >
          View Portfolio
        </a>
      </div>
    </div>
  );
};

export default About;
