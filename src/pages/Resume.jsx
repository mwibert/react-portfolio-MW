import React from "react";

const ResumePage = () => {
  const googleDrivePdfId = "13hLDWzZvYkdpybFtP1rbFH0U8CKkj8qk";
  const resumePdfUrl = `https://drive.google.com/file/d/${googleDrivePdfId}/preview`;
  const downloadUrl = `https://drive.google.com/uc?export=download&id=${googleDrivePdfId}`;

  return (
    <section
      style={{
        padding: "60px",
        textAlign: "center",
        backgroundImage: "url('/resume-background.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderRadius: "15px",
        maxWidth: "900px",
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
        Resume
      </h2>
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.7)",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <iframe
          src={resumePdfUrl}
          style={{
            width: "100%",
            height: "600px",
            borderRadius: "5px",
            border: "none",
          }}
          title="Resume PDF"
          allow="autoplay"
        ></iframe>
        <div style={{ marginTop: "20px" }}>
          <a
            href={downloadUrl}
            download
            style={{
              display: "inline-block",
              backgroundColor: "#ffcc00",
              color: "#000",
              padding: "10px 20px",
              fontSize: "18px",
              fontWeight: "bold",
              textDecoration: "none",
              borderRadius: "5px",
              transition: "background 0.3s ease-in-out",
            }}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#ffdb4d")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ffcc00")}
          >
            Download PDF
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
