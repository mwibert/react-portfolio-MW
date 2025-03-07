import React from "react";

function AboutMe() {
  return (
    <section>
      <h2>About Me</h2>

      <img
        src="/mwibert.jpg"
        alt="developer avatar"
        style={{ borderRadius: "50%", marginBottom: "1rem" }}
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
