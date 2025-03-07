import React from "react";

function Footer() {
  return (
    <footer
      style={{ backgroundColor: "#4c4d4c", color: "#fff", padding: "1rem" }}
    >
      <p>Connect with me:</p>
      <p>
        <a
          href="https://github.com/mwibert"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://www.linkedin.com/in/michael-wibert-61709029b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>{" "}
        |{" "}
      </p>
    </footer>
  );
}

export default Footer;
