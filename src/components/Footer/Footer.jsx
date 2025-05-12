import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto text-center px-4">
        <h1 className="text-xl font-semibold mb-2">© 2025 Nayem Fardin</h1>
        <p className="text-sm opacity-70">
          Made with 💻 by{" "}
          <a href="mailto:rhnayemfardin@gmail.com" className="underline hover:text-pink-400">
            Nayem
          </a>{" "}
          | All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
