import React from "react";
import Project from "../components/Project";

function Portfolio() {
  const projects = [
    {
      title: "Weather Forecaster",
      image: "/weatherforecaster.png",
      deployedLink: "https://wibert-weather-forecaster.onrender.com",
      githubLink: "https://github.com/mwibert/weather-forecaster",
    },
    {
      title: "What's in my fridge?",
      image: "/wimf.jpg",
      text: "The first group project of class we created a site for recipes using what's in your fridge for a meal. We use a food recipe API to retrieve the data then allowed the user to add them to a favorites page.",
      githubLink: "https://aawllms.github.io/Whats-in-my-fridge-v1-dev/",
    },
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      {projects.map((proj, index) => (
        <Project key={index} project={proj} />
      ))}
    </section>
  );
}

export default Portfolio;
