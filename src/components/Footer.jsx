import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#4c4d4c",
        color: "#fff",
        padding: "1.5rem 2rem",
        textAlign: "center",
        fontSize: "18px",
        fontWeight: "bold",
        letterSpacing: "1px",
        boxShadow: "0 -4px 10px rgba(0, 0, 0, 0.3)",
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
        Connect with Me
      </p>
      <p style={{ marginTop: "0.5rem" }}>
        <a
          href="https://github.com/mwibert"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ffcc00",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
            marginRight: "15px",
          }}
          onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.target.style.textDecoration = "none")}
        >
          GitHub
        </a>
        |
        <a
          href="https://www.linkedin.com/in/michael-wibert-61709029b/"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ffcc00",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "18px",
            marginLeft: "15px",
          }}
          onMouseOver={(e) => (e.target.style.textDecoration = "underline")}
          onMouseOut={(e) => (e.target.style.textDecoration = "none")}
        >
          LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;
