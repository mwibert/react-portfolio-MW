import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <NavLink
        to="/"
        style={({ isActive }) => ({
          margin: "0 1rem",
          color: isActive ? "#f39c12" : "#fff",
        })}
      >
        About Me
      </NavLink>
      <NavLink
        to="/portfolio"
        style={({ isActive }) => ({
          margin: "0 1rem",
          color: isActive ? "#f39c12" : "#fff",
        })}
      >
        Portfolio
      </NavLink>
      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          margin: "0 1rem",
          color: isActive ? "#f39c12" : "#fff",
        })}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navigation;
