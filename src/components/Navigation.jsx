import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "clamp(10px, 3vw, 20px)",
        fontSize: "clamp(14px, 2vw, 18px)",
        fontWeight: "bold",
        textTransform: "uppercase",
        letterSpacing: "1px",
        flexWrap: "wrap",
      }}
    >
      {["About Me", "Portfolio", "Contact"].map((item, index) => {
        const path = `/${item.toLowerCase().replace(" ", "")}`;

        return (
          <NavLink
            key={index}
            to={path}
            style={({ isActive }) => ({
              color: isActive ? "#3498db" : "#fff",
              textDecoration: "none",
              padding: "clamp(8px, 1.5vw, 12px) clamp(12px, 2vw, 15px)",
              borderRadius: "5px",
              transition: "background 0.3s ease, transform 0.2s ease",
              backgroundColor: isActive
                ? "rgba(52, 152, 219, 0.2)"
                : "transparent",
              boxShadow: isActive
                ? "0px 2px 5px rgba(52, 152, 219, 0.6)"
                : "none",
            })}
          >
            {item}
          </NavLink>
        );
      })}
    </nav>
  );
}

export default Navigation;
