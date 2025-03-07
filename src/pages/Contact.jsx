import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const validateField = (name, value) => {
    let errorMsg = "";
    if (!value.trim()) {
      errorMsg = "This field is required";
    } else if (name === "email") {
      const emailRegex = /^[^@]+@[^@]+\.[^@]+$/;
      if (!emailRegex.test(value)) {
        errorMsg = "Invalid email address";
      }
    }
    return errorMsg;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nameError = validateField("name", formData.name);
    const emailError = validateField("email", formData.email);
    const messageError = validateField("message", formData.message);

    if (nameError || emailError || messageError) {
      setErrors({
        name: nameError,
        email: emailError,
        message: messageError,
      });
      return;
    }

    alert("Form submitted successfully!");

    setFormData({ name: "", email: "", message: "" });
    setErrors({ name: "", email: "", message: "" });
  };

  return (
    <section
      style={{
        padding: "50px",
        textAlign: "center",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        maxWidth: "500px",
        margin: "0 auto",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontSize: "28px", color: "#333", marginBottom: "20px" }}>
        Contact Me
      </h2>

      <form
        onSubmit={handleSubmit}
        style={{
          maxWidth: "400px",
          margin: "0 auto",
          padding: "20px",
          borderRadius: "8px",
          backgroundColor: "#fff",
          boxShadow: "0 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <div style={{ marginBottom: "1rem", textAlign: "left" }}>
          <label htmlFor="name" style={{ fontWeight: "bold" }}>
            Name*
          </label>
          <input
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.name && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.name}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "1rem", textAlign: "left" }}>
          <label htmlFor="email" style={{ fontWeight: "bold" }}>
            Email*
          </label>
          <input
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.email && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.email}
            </span>
          )}
        </div>

        <div style={{ marginBottom: "1rem", textAlign: "left" }}>
          <label htmlFor="message" style={{ fontWeight: "bold" }}>
            Message*
          </label>
          <textarea
            style={{
              display: "block",
              width: "100%",
              height: "100px",
              padding: "10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              resize: "none",
            }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          {errors.message && (
            <span style={{ color: "red", fontSize: "14px" }}>
              {errors.message}
            </span>
          )}
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#4c4d4c",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          Send
        </button>
      </form>
    </section>
  );
}

export default Contact;
