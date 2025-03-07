import React from "react";

function AboutMe() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "50px",
        maxWidth: "800px",
        margin: "0 auto",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontSize: "28px", color: "#333", marginBottom: "20px" }}>
        About Me
      </h2>

      <img
        src="/mwibert.jpg"
        alt="developer avatar"
        style={{
          width: "150px",
          height: "150px",
          borderRadius: "50%",
          marginBottom: "1rem",
          objectFit: "cover",
          border: "3px solid #4c4d4c",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
        }}
      />

      <p
        style={{
          fontSize: "18px",
          color: "#555",
          maxWidth: "600px",
          lineHeight: "1.6",
          padding: "0 20px",
        }}
      >
        Hello! I'm <strong>Mike Wibert</strong>, a passionate full stack web
        developer specializing in <strong>JavaScript, TypeScript</strong>, and
        several modern frameworks and libraries, including{" "}
        <strong>React.js, Express.js, Node.js, Apollo GraphQL, and JWT</strong>.
        I love building high-performing, user-friendly applications that make a
        real-world impact.
      </p>
    </section>
  );
}

export default AboutMe;
