import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "20px",
        padding: "10px 0",
        fontSize: "18px",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "#3498db" : "#fff", // ✅ Blue color for active link
          textDecoration: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          transition: "background 0.3s ease, transform 0.2s ease",
          backgroundColor: isActive ? "rgba(52, 152, 219, 0.2)" : "transparent", // ✅ Blue background for active link
          boxShadow: isActive ? "0px 2px 5px rgba(52, 152, 219, 0.6)" : "none", // ✅ Blue shadow effect for active link
        })}
      >
        About Me
      </NavLink>

      <NavLink
        to="/portfolio"
        style={({ isActive }) => ({
          color: isActive ? "#3498db" : "#fff",
          textDecoration: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          transition: "background 0.3s ease, transform 0.2s ease",
          backgroundColor: isActive ? "rgba(52, 152, 219, 0.2)" : "transparent",
          boxShadow: isActive ? "0px 2px 5px rgba(52, 152, 219, 0.6)" : "none",
        })}
      >
        Portfolio
      </NavLink>

      <NavLink
        to="/contact"
        style={({ isActive }) => ({
          color: isActive ? "#3498db" : "#fff",
          textDecoration: "none",
          padding: "10px 15px",
          borderRadius: "5px",
          transition: "background 0.3s ease, transform 0.2s ease",
          backgroundColor: isActive ? "rgba(52, 152, 219, 0.2)" : "transparent",
          boxShadow: isActive ? "0px 2px 5px rgba(52, 152, 219, 0.6)" : "none",
        })}
      >
        Contact
      </NavLink>
    </nav>
  );
}

export default Navigation;
