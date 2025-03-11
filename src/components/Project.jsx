import React from "react";

function Project({ project }) {
  const { title, image, deployedLink, text, githubLink } = project;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        marginBottom: "1rem",
        padding: "1rem",
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "100%", maxWidth: "400px" }}
      />
      <h3>{title}</h3>
      <p>
        <a href={deployedLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>{" "}
        |{" "}
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repo
        </a>
      </p>
    </div>
  );
}

export default Project;
