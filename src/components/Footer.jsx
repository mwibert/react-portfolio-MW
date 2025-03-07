import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#4c4d4c",
        padding: "1.5rem 2rem",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "bold",
        letterSpacing: "1px",
        boxShadow: "0 -4px 10px rgba(52, 152, 219, 0.6)",
        position: "relative",
        width: "100%",
      }}
    >
      <p
        style={{
          margin: "0",
          fontSize: "20px",
          fontWeight: "900",
          textTransform: "uppercase",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      >
        Check me out
      </p>

      <p style={{ marginTop: "0.5rem" }}>
        <a
          href="https://github.com/mwibert"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
            marginRight: "15px",
            transition: "color 0.3s ease, text-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.color = "#3498db";
            e.target.style.textShadow = "0px 2px 5px rgba(52, 152, 219, 0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "#fff";
            e.target.style.textShadow = "none";
          }}
        >
          GitHub
        </a>
        |
        <a
          href="https://www.linkedin.com/in/michael-wibert-61709029b/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#fff",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
            marginLeft: "15px",
            transition: "color 0.3s ease, text-shadow 0.3s ease",
          }}
          onMouseOver={(e) => {
            e.target.style.color = "#3498db";
            e.target.style.textShadow = "0px 2px 5px rgba(52, 152, 219, 0.6)";
          }}
          onMouseOut={(e) => {
            e.target.style.color = "#fff";
            e.target.style.textShadow = "none";
          }}
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;
