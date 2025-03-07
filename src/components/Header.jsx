import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header
      style={{
        backgroundColor: "#4c4d4c",
        color: "#fff",
        padding: "1.5rem 2rem",
        boxShadow: "0 4px 10px rgba(52, 152, 219, 0.6)", // ✅ Matches footer
        width: "100vw", // ✅ Ensures full width
        boxSizing: "border-box", // ✅ Prevents overflow
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            fontSize: "30px",
            fontWeight: "900",
            margin: "0",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
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
