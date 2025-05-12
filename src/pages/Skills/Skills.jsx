import React, { useEffect, useState } from "react";

const Skills = () => {
  const [skillsData, setSkillsData] = useState([]);

  useEffect(() => {
    fetch("/skillsData.json")
      .then((res) => res.json())
      .then((data) => setSkillsData(data))
      .catch((err) => console.error("Failed to fetch skills:", err));
  }, []);

  return (
    <div className="p-6 md:p-12 text-white bg-slate-900 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold my-4 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text animate-bounce text-center">
        My Skills
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((category, index) => (
          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-2xl p-6 shadow-md hover:shadow-xl transition"
          >
            <h2 className="text-2xl font-semibold text-sky-300 capitalize mb-4 border-b border-slate-600 pb-2">
              {category.category} Skills
            </h2>

            <ul className="space-y-3">
              {category.skills.map((skill, idx) => (
                <li
                  key={idx}
                  className="flex justify-between items-center bg-slate-700/40 px-4 py-2 rounded-md hover:bg-slate-600 transition"
                >
                  <span className="font-medium text-white">
                    {skill.name || skill.language}
                  </span>
                  <span className="text-sm text-sky-400">
                    {skill.level || skill.fluency}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
