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
    <section
      style={{
        padding: "60px",
        textAlign: "center",
        backgroundImage: "url('/portfolio-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "15px",
        maxWidth: "1300px",
        margin: "50px auto",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(5px)",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#fff",
          marginBottom: "20px",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      >
        Portfolio
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "20px",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        {projects.map((proj, index) => (
          <div
            key={index}
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.7)",
              padding: "20px",
              borderRadius: "10px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              textAlign: "left",
              transition: "transform 0.3s ease-in-out",
              color: "#fff",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <h3 style={{ fontSize: "22px", color: "#ffcc00" }}>{proj.title}</h3>
            <img
              src={proj.image}
              alt={proj.title}
              style={{
                width: "100%",
                height: "200px",
                objectFit: "cover",
                borderRadius: "5px",
                marginBottom: "10px",
              }}
            />
            <p style={{ fontSize: "16px", color: "#ddd" }}>{proj.text}</p>
            <div style={{ marginTop: "10px" }}>
              {proj.deployedLink && (
                <a
                  href={proj.deployedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    color: "#ffcc00",
                    textDecoration: "none",
                    fontWeight: "bold",
                    marginRight: "10px",
                  }}
                  onMouseOver={(e) =>
                    (e.target.style.textDecoration = "underline")
                  }
                  onMouseOut={(e) => (e.target.style.textDecoration = "none")}
                >
                  Live Demo
                </a>
              )}
              <a
                href={proj.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#ffcc00",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
                onMouseOver={(e) =>
                  (e.target.style.textDecoration = "underline")
                }
                onMouseOut={(e) => (e.target.style.textDecoration = "none")}
              >
                GitHub Repo
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
