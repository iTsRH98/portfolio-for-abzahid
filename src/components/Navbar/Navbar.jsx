import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4 text-primary" : "hover:underline"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4 text-primary" : "hover:underline"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4 text-primary" : "hover:underline"
          }
        >
          Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4 text-primary" : "hover:underline"
          }
        >
          Contact
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/find"
          className={({ isActive }) =>
            isActive ? "underline underline-offset-4 text-primary" : "hover:underline"
          }
        >
          Find Me
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-50 shadow-sm bg-sky-950 text-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-sky-950 rounded-box z-10 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to={`/`} className="btn btn-ghost text-xl">Zahid Here</Link>
      </div>

      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default Navbar;
