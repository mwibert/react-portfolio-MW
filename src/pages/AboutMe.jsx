import React from "react";

function AboutMe() {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "60px",
        maxWidth: "900px",
        margin: "50px auto",
        backgroundImage: "url('/aboutme-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "15px",
        boxShadow: "0 10px 20px rgba(0, 0, 0, 0.15)",
        backdropFilter: "blur(5px)",
      }}
    >
      <h2
        style={{
          fontSize: "32px",
          color: "#fff", // ✅ Text is now white
          marginBottom: "20px",
          fontWeight: "bold",
          textTransform: "uppercase",
          letterSpacing: "2px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          padding: "10px 20px",
          borderRadius: "5px",
        }}
      >
        About Me
      </h2>

      <img
        src="/mwibert.jpg"
        alt="developer avatar"
        style={{
          width: "220px",
          height: "220px",
          borderRadius: "50%",
          marginBottom: "1.5rem",
          objectFit: "cover",
          border: "4px solid #fff",
          boxShadow: "0 8px 12px rgba(0, 0, 0, 0.3)",
          transition: "transform 0.3s ease-in-out",
        }}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      />

      <p
        style={{
          fontSize: "20px",
          maxWidth: "700px",
          lineHeight: "1.8",
          padding: "15px",
          backgroundColor: "rgba(0, 0, 0, 0.6)", // ✅ Darker background for better contrast
          borderRadius: "5px",
          color: "#fff", // ✅ Text is now white
        }}
      >
        Hello! I'm <strong style={{ color: "#ffcc00" }}>Mike Wibert</strong>, a
        passionate{" "}
        <strong style={{ color: "#ffcc00" }}>Full Stack Web Developer</strong>{" "}
        specializing in{" "}
        <strong style={{ color: "#ffcc00" }}>JavaScript, TypeScript</strong>,
        and modern web frameworks such as{" "}
        <strong style={{ color: "#ffcc00" }}>
          React.js, Express.js, Node.js, Apollo GraphQL, and JWT authentication
        </strong>
        . I love crafting high-performing, user-friendly applications that{" "}
        <strong style={{ color: "#ffcc00" }}>make a real-world impact</strong>.
      </p>
    </section>
  );
}

export default AboutMe;
