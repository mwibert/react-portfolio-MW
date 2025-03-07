import React from "react";
import Navigation from "./Navigation";

function Header() {
  return (
    <header
      style={{ backgroundColor: "#4c4d4c", color: "#fff", padding: "1rem" }}
    >
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h1>Michael Wibert</h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
