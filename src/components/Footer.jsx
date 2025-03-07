import React from "react";

function Footer() {
  return (
    <footer
      style={{
        backgroundColor: "#4c4d4c",
        color: "#fff",
        padding: "1rem",
        textAlign: "center",
        fontSize: "16px",
        marginTop: "2rem",
        position: "relative",
        bottom: "0",
        width: "100%",
      }}
    >
      <p style={{ margin: "0", fontWeight: "bold" }}>Connect with me:</p>
      <p style={{ marginTop: "0.5rem" }}>
        <a
          href="https://github.com/mwibert"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#ffcc00",
            textDecoration: "none",
            fontWeight: "bold",
            marginRight: "10px",
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
            marginLeft: "10px",
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
