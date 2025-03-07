import React from "react";

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>

      <img
        src="/mwibert.jpg"
        alt="developer avatar"
        style={{
          width: "150px", // Set a fixed width (adjust as needed)
          height: "150px", // Maintain the aspect ratio
          borderRadius: "50%",
          marginBottom: "1rem",
          objectFit: "cover", // Ensures proper cropping if needed
        }}
      />
      <p>
        Hello! I'm Mike Wibert, a full stack web developer specializing in
        JavaScript, Typescript and several related frameworks and libraries,
        including React.JS, ExpressJS, NodeJS, Apollo GraphQL, and JWT.
      </p>
    </section>
  );
}

export default AboutMe;
