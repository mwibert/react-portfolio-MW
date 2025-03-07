import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#4c4d4c", // Dark background
        color: "#fff", // White text
        padding: "1rem 2rem", // More padding for better spacing
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Subtle shadow for depth
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px", // Keeps the header from stretching too wide
          margin: "0 auto", // Centers the header
        }}
      >
        <h1
          style={{
            fontSize: "24px",
            margin: "0",
            fontWeight: "bold",
            letterSpacing: "1px",
          }}
        >
          Michael Wibert
        </h1>

        <Navigation />
      </div>
    </header>
  );
}

export default Header;
